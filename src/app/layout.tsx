import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import './globals.css'
import { AuthProvider } from '@/service/context/AuthContext'

export const metadata: Metadata = {
  title: 'Loocommerce',
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
        <AuthProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
