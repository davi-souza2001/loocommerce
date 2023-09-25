'use client'
import dynamic from 'next/dynamic'
import GraphicCard from './GraphicCard'

interface PerformedDataProps {
  month: number
  value: number
}

interface PerformedChartProps {
  orders: PerformedDataProps[]
  canceledOrders: PerformedDataProps[]
}

export function PerformedChart(props: PerformedChartProps) {
  const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
  const ordersData = props.orders.map((item) => item.value)
  const canceledOrdersData = props.canceledOrders.map((item) => item.value)

  const series = [
    {
      name: 'Pedidos Realizados',
      type: 'column',
      data: ordersData,
      color: '#109E8E',
    },
    {
      name: 'Pedidos Cancelados',
      type: 'column',
      data: canceledOrdersData,
      color: '#F18F7F',
    },
  ]

  return (
    <GraphicCard title="Pedidos Realizados x Pedidos Cancelados">
      <ApexChart
        type="line"
        options={{
          chart: {
            height: 350,
            type: 'line',
          },
          stroke: {
            width: [0, 4],
          },
          dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
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
        series={series}
        height={200}
        width={500}
      />
    </GraphicCard>
  )
}
