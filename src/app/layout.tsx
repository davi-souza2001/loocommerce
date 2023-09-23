import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loocommerce - Login',
  description: 'View the data of purchases made in your ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
