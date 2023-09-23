import { Card } from './components/Card'

export default function Home() {
  return (
    <main className="w-full flex">
      <div className="w-28" />
      <div className="w-full">
        <h1 className="text-2xl font-semibold my-8 ml-10">Início</h1>
        <div className="w-full flex">
          <Card />
        </div>
        <h2 className="text-2xl font-semibold text-purple-800 my-8 ml-10">
          Dashboard de vendas
        </h2>
        <div className="w-full flex">
          <Card />
        </div>
      </div>
    </main>
  )
}
