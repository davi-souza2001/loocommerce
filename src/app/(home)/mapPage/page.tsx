import { client } from '@/data/client'
import { BoxOrders } from './components/BoxOrders'
import { Map } from './components/Map'

export default async function MapPage() {
  const req = await client.get('/orders-month')

  return (
    <main className="w-full flex z-0">
      <div className="w-28" />
      <div className="h-[75vh] w-full mt-16">
        <h1 className="text-2xl font-semibold my-8 ml-10">
          Regiões de entrega
        </h1>
        <div className="h-full w-full">
          <BoxOrders orders={req.data.value} growth={req.data.growth} />
          <Map />
        </div>
      </div>
      <div className="w-16" />
    </main>
  )
}
