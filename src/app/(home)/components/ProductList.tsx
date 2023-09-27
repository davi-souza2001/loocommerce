'use client'
import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Heading,
  Icon,
  Input,
  Button,
} from '@chakra-ui/react'
import { Products, Table } from './Table'
import { BiSearch } from 'react-icons/bi'
import { client } from '@/data/client'
import { useState, useEffect } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { UseDebounce } from '@/service/hooks/UseDebounce'

export const revalidade = 60 * 60 * 24 // 24 hours

export function ProductList() {
  const [products, setProducts] = useState<Products[]>([])
  const [pagination, setPagination] = useState(1)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const debouncedSearch = UseDebounce(search, 800)

  async function getProductsByPage(pagination: number) {
    setLoading(true)
    const url = `/products?page=${pagination}&limit=10`
    const req = await client.get(url)
    setProducts(req.data)
    setLoading(false)
  }

  async function getProductsBySearch(handleSearch: string) {
    setLoading(true)
    const url = `/products?page=1&limit=10&search=${handleSearch}`
    const req = await client.get(url)
    setProducts(req.data)
    setLoading(false)
  }

  useEffect(() => {
    getProductsByPage(pagination)
  }, [pagination])

  useEffect(() => {
    getProductsBySearch(debouncedSearch)
    setPagination(1)
  }, [debouncedSearch])

  return (
    <ChakraCard className="min-h-40 mr-10 mt-12">
      <CardHeader className="mb-[-30PX] flex items-center justify-between">
        <Heading className="h-full flex items-center justify-center">
          <p className="text-2xl mr-5 font-normal">Listagem do produtos</p>
          {loading && (
            <Icon
              as={AiOutlineLoading}
              height={7}
              width={7}
              className="ml-3 transition-all animate-spin"
            />
          )}
        </Heading>
        <div className="flex items-center justify-center font-ubuntu">
          <Input
            placeholder="Pesquisar produtos"
            size="sm"
            backgroundColor={'gray.200'}
            borderRightRadius={0}
            borderLeftRadius={6}
            height={'10'}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            height={'10'}
            size="sm"
            backgroundColor={'gray.200'}
            borderLeftRadius={0}
          >
            <Icon as={BiSearch} height={5} width={5} />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="flex">
        <Table
          loading={loading}
          pagination={pagination}
          products={products}
          setPagination={setPagination}
        />
      </CardBody>
    </ChakraCard>
  )
}
