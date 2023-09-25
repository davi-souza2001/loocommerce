'use client'
import dynamic from 'next/dynamic'
import GraphicCard from './GraphicCard'

interface GaindDataProps {
  month: number
  value: number
}

interface GainChartProps {
  monthlyProfit: GaindDataProps[]
  realMonthlyProfit: GaindDataProps[]
}

export function GainChart(props: GainChartProps) {
  const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
  const monthlyProfitData = props.monthlyProfit.map((item) => item.value)
  const realMonthlyProfitData = props.realMonthlyProfit.map(
    (item) => item.value,
  )

  function calculateAverages(array1: number[], array2: number[]) {
    if (array1.length !== array2.length) {
      throw new Error('Arrays must have the same length')
    }
    const averages = []

    for (let i = 0; i < array1.length; i++) {
      const average = (array1[i] + array2[i]) / 2
      averages.push(parseInt(average.toFixed(2)))
    }

    return averages
  }

  const series = [
    {
      name: 'Lucro Mensal',
      type: 'column',
      data: monthlyProfitData,
      color: '#9DD6D3',
    },
    {
      name: 'Lucro Real',
      type: 'column',
      data: realMonthlyProfitData,
      color: '#F78899',
    },
    {
      name: 'Média',
      type: 'line',
      data: calculateAverages(monthlyProfitData, realMonthlyProfitData),
      color: 'red',
    },
  ]

  return (
    <GraphicCard title="Expectativa de lucro x lucro real" select>
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
