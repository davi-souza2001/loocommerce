import { Card } from './components/Card'
import { ProductList } from './components/ProductList'
import { OrderChart } from './components/OrderChart'
import { client } from '@/data/client'
import {
  CardMissingProducts,
  CardProps,
} from './components/CardMissingProducts'
import { GainChart } from './components/GainChart'
import { PerformedChart } from './components/PerformedChart'

interface SalesProps {
  value: number
  month: number
}

export default async function Home() {
  const alerts = await client.get('/alerts')
  const keepingProducts = alerts.data
  const sales = await client.get('/sells-per-month')
  const salePerMonth = sales.data.map((sales: SalesProps) => sales.value)
  const monthlyProfit = await client.get('/profit-expectation-per-month')
  const realMonthlyProfit = await client.get('/profit-per-month')
  const orders = await client.get('/orders-per-month')
  const canceledOrders = await client.get('/canceled-orders-per-month')

  return (
    <main className="w-full flex z-0 bg-background">
      <div className="w-28" />
      <div className="w-full mt-16">
        <h1 className="text-2xl font-bold my-8 ml-10">Início</h1>
        <div className="w-full p-3 grid min-[1618px]:grid-cols-6 min-[1156px]:grid-cols-4 grid-cols-3 gap-5 overflow-x-auto scrollbar-none ">
          <Card
            title="Ticket médio últimas 24h"
            details="em relação a ontem"
            endPoint={'/avg-ticket-day'}
            type="ticket"
          />
          <Card
            title="Ticket médio mensal"
            details="em relação a julho"
            endPoint={'/avg-ticket-month'}
            type="ticket"
          />
          {keepingProducts.map((pro: CardProps, index: number) => {
            return (
              <CardMissingProducts
                since={pro.since}
                details={pro.details}
                type={pro.type}
                value={pro.value}
                stock={index === 1}
                key={index}
              />
            )
          })}
          <Card
            title="Pedidos realizados no mês"
            details="em relação a julho"
            endPoint={'/orders-month'}
            type="orders"
          />
          <Card
            title="Produtos vendidos no mês"
            details="em relação a julho"
            endPoint={'/orders-month'}
            type="products"
          />
        </div>
        <h2 className="text-2xl font-bold text-purple-800 my-8 ml-10">
          Dashboard de vendas
        </h2>
        <div className="w-full p-2 grid grid-cols-1 min-[1268px]:grid-cols-2  min-[1800px]:grid-cols-3">
          <OrderChart
            series={[
              {
                type: 'column',
                data: salePerMonth,
                color: 'black',
              },
            ]}
          />
          <GainChart
            monthlyProfit={monthlyProfit.data}
            realMonthlyProfit={realMonthlyProfit.data}
          />
          <PerformedChart
            orders={orders.data}
            canceledOrders={canceledOrders.data}
          />
        </div>
        <ProductList />
      </div>
    </main>
  )
}
