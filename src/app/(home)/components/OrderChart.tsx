'use client'
import dynamic from 'next/dynamic'
import GraphicCard from './GraphicCard'

interface GraphicProps {
  series: any
}

export function OrderChart(props: GraphicProps) {
  const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

  return (
    <GraphicCard title="Pedidos do mês" select>
      <ApexChart
        type="line"
        options={{
          chart: {
            width: 300,
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
            },
          },
          xaxis: {
            categories: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
        }}
        series={props.series}
        height={200}
        width={500}
      />
    </GraphicCard>
  )
}
