import DisplayData from '../components/DisplayData'
import { useEffect, useState } from 'react'
import axios from '../components/Api/axios'
import Graph from '../components/Graph'
import '../Home.css'

function Home() {
  const [totalConfirmed, setTotalConfirmed] = useState(0)
  const [totalRecovered, setTotalRecovered] = useState(0)
  const [totalDeaths, setTotalDeaths] = useState(0)
  const [covidSummary, setCovidSummary] = useState({})
  const [casesArray, setCasesArray] = useState([])
  const [country, setCountry] = useState('')
  const [days, setDays] = useState(7)
  const [label, setLabel] = useState([])
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    axios
      .get(`/summary`, setIsloading(true))
      .then((res) => {
        setTotalConfirmed(res.data.Global.TotalConfirmed)
        setTotalRecovered(res.data.Global.TotalRecovered)
        setTotalDeaths(res.data.Global.TotalDeaths)
        setCovidSummary(res.data)

        setIsloading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const formatDate = (date) => {
    const d = new Date(date)

    const year = d.getFullYear()
    const month = `0${d.getMonth() + 1}`.slice(-2)
    const _date = d.getDate()

    return `${year}-${month}-${_date}`
  }

  const handleCountry = (e) => {
    setCountry(e.target.value)
    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - days))
    getCountryData(e.target.value, from, to)
  }

  const handleDays = (e) => {
    setDays(e.target.value)
    const d = new Date()
    const to = formatDate(d)
    const from = formatDate(d.setDate(d.getDate() - e.target.value))
    getCountryData(country, from, to)
  }

  const getCountryData = (countrySlug, from, to) => {
    axios
      .get(
        `country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z`
      )
      .then((res) => {
        const yAxis = res.data.map((d) => d.Cases)
        const xAxisLbl = res.data.map((d) => d.Date)

        setCasesArray(yAxis)
        setLabel(xAxisLbl)

        const covidDetails = covidSummary.Countries.find(
          (country) => country.Slug === countrySlug
        )

        setTotalConfirmed(covidDetails.TotalConfirmed)
        setTotalRecovered(covidDetails.TotalRecovered)
        setTotalDeaths(covidDetails.TotalDeaths)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="Container">
      {isLoading ? (
        <p>Loading.....</p>
      ) : (
        <DisplayData
          totalConfirmed={totalConfirmed}
          totalRecovered={totalRecovered}
          totalDeaths={totalDeaths}
          country={country}
        />
      )}

      <div>
        <select value={country} onChange={handleCountry}>
          <option value="">Select Country</option>
          {covidSummary.Countries &&
            covidSummary.Countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
        <select value={days} onChange={handleDays}>
          <option value="7"> Last 7 days</option>
          <option value="30"> Last 30 days</option>
          <option value="90"> Last 90 days</option>
        </select>
      </div>
      <div>
        <Graph yAxis={casesArray} label={label} />
      </div>
    </div>
  )
}

export default Home
