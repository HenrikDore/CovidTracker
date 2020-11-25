import Card from './Card'

const DisplayData = (props) => {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props
  return (
    <div>
      <div>
        <h1>COVID-19 TRACKER</h1>
        <h1 style={{ textTransform: 'capitalize' }}>
          {country === '' ? 'Word Report' : country}
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Card>
            <span>Total Confirmed:</span>
            <br />
            <span>{totalConfirmed}</span>
          </Card>
          <Card>
            <span>Total Recovered:</span>
            <br />
            <span>{totalRecovered}</span>
          </Card>
          <Card>
            <span>Total Deaths:</span>
            <br />
            <span>{totalDeaths}</span>
          </Card>
        </div>
      </div>
    </div>
  )
}
export default DisplayData
