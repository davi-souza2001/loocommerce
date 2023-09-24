'use client'
import { Header } from './components/Header'
import { SideBar } from './components/SideBar'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <SideBar />
      {children}
    </>
  )
}
