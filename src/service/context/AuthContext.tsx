'use client'
import { client } from '@/data/client'
import { useToast } from '@chakra-ui/react'
import { createContext, useEffect, useState } from 'react'
import { setCookie } from 'cookies-next'
import { nameInEmail } from '../utils'

interface LoginRequest {
  email: string
  password?: string
}

export interface AuthContextProps {
  user: string
  loading: boolean
  handleLogin(request: LoginRequest): Promise<void>
}

const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider(props: any) {
  const toast = useToast()
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin({ email, password }: LoginRequest) {
    setLoading(true)

    try {
      const req = await client.get('/login', {
        params: {
          email,
          senha: password,
        },
      })
      const name = nameInEmail(email)
      setCookie('tokenLoocommerce', req.data)
      if (name) {
        setUser(name)
        localStorage.setItem('user', name)
      }
    } catch (error: any) {
      toast({
        title: 'Erro ao cadastrar!',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const userLocal = localStorage.getItem('user')
    if (userLocal) {
      setUser(userLocal)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, handleLogin, loading }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
