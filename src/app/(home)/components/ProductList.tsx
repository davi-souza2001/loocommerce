'use'
import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Select,
  Heading,
} from '@chakra-ui/react'

export function ProductList() {
  return (
    <ChakraCard className="min-h-40 mr-10 mt-12" backgroundColor={'red.500'}>
      <CardHeader className="mb-[-30PX] flex items-center justify-between">
        <Heading>
          <h2 className="text-2xl font-semibold">Listagem do produtos</h2>
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
      <CardBody></CardBody>
    </ChakraCard>
  )
}
