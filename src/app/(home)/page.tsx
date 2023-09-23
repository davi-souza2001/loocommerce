'use client'
import dynamic from 'next/dynamic'

import { Card } from './components/Card'
import GraphicCard from './components/GraphicCard'
import { ProductList } from './components/ProductList'

export default function Home() {
  const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

  const series = [
    {
      name: 'Website Blog',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ]

  return (
    <main className="w-full flex z-0">
      <div className="w-28" />
      <div className="w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">Início</h1>
        <div className="w-full flex">
          <Card />
        </div>
        <h2 className="text-2xl font-semibold text-purple-800 my-8 ml-10">
          Dashboard de vendas
        </h2>
        <div className="w-full flex">
          <GraphicCard title="Pedidos do mês" select>
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
                title: {
                  text: 'Traffic Sources',
                },
                dataLabels: {
                  enabled: true,
                  enabledOnSeries: [1],
                },
                labels: [
                  '01 Jan 2001',
                  '02 Jan 2001',
                  '03 Jan 2001',
                  '04 Jan 2001',
                  '05 Jan 2001',
                  '06 Jan 2001',
                  '07 Jan 2001',
                  '08 Jan 2001',
                  '09 Jan 2001',
                  '10 Jan 2001',
                  '11 Jan 2001',
                  '12 Jan 2001',
                ],
                xaxis: {
                  type: 'datetime',
                },
                yaxis: [
                  {
                    title: {
                      text: 'Website Blog',
                    },
                  },
                  {
                    opposite: true,
                    title: {
                      text: 'Social Media',
                    },
                  },
                ],
              }}
              series={series}
              height={200}
              width={500}
            />
          </GraphicCard>
        </div>
        <ProductList />
      </div>
    </main>
  )
}
