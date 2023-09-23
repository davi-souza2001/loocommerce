import { Metadata } from 'next'
import { Header } from './components/Header'

export const metadata: Metadata = {
  title: 'Loocommerce - Home',
  description: 'View the data of purchases made in your ecommerce',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
