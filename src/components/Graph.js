import { Line } from 'react-chartjs-2'
import '../GraphStyling.css'

const Graph = (props) => {
  return (
    <div
      style={{
        width: 600,
        height: 600,
        margin: '40px auto',
        textAlign: 'center'
      }}
    >
      <Line
        data={{
          labels: props.label,
          datasets: [
            {
              label: 'Total Cases',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: props.yAxis
            }
          ]
        }}
      />
    </div>
  )
}

export default Graph
