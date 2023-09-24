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
import { Table } from './Table'
import { BiSearch } from 'react-icons/bi'

export function ProductList() {
  return (
    <ChakraCard className="min-h-40 mr-10 mt-12">
      <CardHeader className="mb-[-30PX] flex items-center justify-between">
        <Heading>
          <p className="text-2xl font-normal">Listagem do produtos</p>
        </Heading>
        <div className="flex items-center justify-center font-ubuntu">
          <Input
            placeholder="Pesquisar produtos"
            size="sm"
            backgroundColor={'gray.200'}
            borderRightRadius={0}
            borderLeftRadius={6}
            height={'10'}
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
        <Table />
      </CardBody>
    </ChakraCard>
  )
}
