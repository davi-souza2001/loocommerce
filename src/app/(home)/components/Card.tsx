import { client } from '@/data/client'
import {
  Card as ChakraCard,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react'

interface CardProps {
  title: string
  details?: string
  endPoint: string
  type: 'ticket' | 'orders' | 'products'
}

export async function Card(props: CardProps) {
  const req = await client.get(props.endPoint)
  const value = parseFloat(JSON.stringify(req.data.value))
  const formatterTicket = value.toFixed(2).replace('.', ',')

  const growth = parseFloat(JSON.stringify(req.data.growth))

  return (
    <ChakraCard className="min-h-40 w-64 shadow-md">
      <CardHeader className="mb-[-30PX]">
        <Heading size="sm">
          <p className="font-bold">{props.title}</p>
        </Heading>
      </CardHeader>
      <CardBody className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-center text-sm font-normal p-1 shadow-md rounded-md text-green-600">
          <p className="font-bold p-0.5`">{props.type && `${growth}%`}</p>
        </div>
        <div className="w-full flex items-center justify-start text-sm font-normal p-1 text-green-600">
          <p>{props.details}</p>
        </div>
        <div className="mt-3 w-full flex items-center justify-start font-normal">
          {props.type === 'ticket' && (
            <p>
              R$ <strong className="font-bold">{formatterTicket}</strong>
            </p>
          )}

          {props.type === 'products' && (
            <p>
              <strong className="font-bold mr-3">
                {props.endPoint === '/orders-month' && value}
              </strong>
              produtos
            </p>
          )}

          {props.type === 'orders' && (
            <p>
              <strong className="font-bold mr-3">{value}</strong> pedidos
            </p>
          )}
        </div>
      </CardBody>
    </ChakraCard>
  )
}
