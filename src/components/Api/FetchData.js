// export function fromatDate  (date) => {
//   const d = new Date(date)

//   const year = d.getFullYear()
//   const month = `0${d.getMonth() + 1}`.slice(-2)
//   const _date = d.getDate()

//   return `${year}-${month}-${_date}`
// }
export function formatDate(date) {
  const d = new Date(date)

  const year = d.getFullYear()
  const month = `0${d.getMonth() + 1}`.slice(-2)
  const _date = d.getDate()

  return `${year}-${month}-${_date}`
}

const FetchData = () => {
  return <div>FetchData</div>
}

export default FetchData
