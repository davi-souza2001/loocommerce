import axios from 'axios'
import { getCookie } from 'cookies-next'

const token = getCookie('tokenLoocommerce')?.toString()

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_DATABASE,
  headers: {
    Authorization: `Basic ${token}`,
  },
})

export { client }
