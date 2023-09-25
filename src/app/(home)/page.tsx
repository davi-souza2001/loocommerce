import { Card } from './components/Card'
import { ProductList } from './components/ProductList'
import { Graphic } from './components/Graphic'

export default function Home() {
  const series = [
    {
      name: 'test',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      color: 'black',
    },
  ]

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
          <Card
            title="Produtos em manutenção"
            endPoint={'/alerts'}
            negative
            type="products"
          />
          <Card
            title="Acabando o estoque"
            endPoint={'/alerts'}
            negative
            details="repor o quanto antes"
            type="products"
          />
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
        <div className="w-full flex">
          <Graphic series={series} />
        </div>
        <ProductList />
      </div>
    </main>
  )
}
