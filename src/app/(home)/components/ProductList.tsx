'use client'
import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Select,
  Heading,
} from '@chakra-ui/react'
import { Table } from './Table'

export function ProductList() {
  return (
    <ChakraCard className="min-h-40 mr-10 mt-12">
      <CardHeader className="mb-[-30PX] flex items-center justify-between">
        <Heading>
          <p className="text-2xl font-semibold">Listagem do produtos</p>
        </Heading>
        <Select
          defaultValue={'ano'}
          placeholder="Ano"
          width={'40'}
          backgroundColor={'gray.200'}
        >
          <option value="option2">Mês</option>
          <option value="option3">Dia</option>
        </Select>
      </CardHeader>
      <CardBody className="flex">
        <Table />
      </CardBody>
    </ChakraCard>
  )
}
