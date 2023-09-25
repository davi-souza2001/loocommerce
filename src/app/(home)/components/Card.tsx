import { client } from '@/data/client'
import {
  Card as ChakraCard,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react'

interface CardProps {
  title: string
  negative?: boolean
  details?: string
  endPoint: string
  type: 'ticket' | 'orders' | 'products'
}

interface ProductProps {
  type: string
  value: number
  since: string
}

export async function Card(props: CardProps) {
  const req = await client.get(props.endPoint)
  const value = parseFloat(JSON.stringify(req.data.value))
  const formatterTicket = value.toFixed(2).replace('.', ',')
  const products = props.endPoint === '/alerts' ? req.data.length : 0

  const growth = parseFloat(JSON.stringify(req.data.growth))

  const keepingProducts =
    props.title === 'Produtos em manutenção' &&
    req.data.filter((p: ProductProps) => p.type === 'Produtos em manutenção')[0]

  const endingStock =
    props.title === 'Acabando o estoque' &&
    req.data.filter((p: ProductProps) => p.type === 'Acabando o estoque')[0]

  function calculateDaysUntilDate(dateString: string): number {
    const currentDate = new Date()
    const targetDate = new Date(dateString)

    const timeDifferenceInMilliseconds =
      targetDate.getTime() - currentDate.getTime()

    const timeDifferenceInDays = Math.floor(
      timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24),
    )

    return Math.abs(timeDifferenceInDays)
  }

  return (
    <ChakraCard className="min-h-40 w-64 shadow-md">
      <CardHeader className="mb-[-30PX]">
        <Heading size="sm">
          <p className="font-bold">{props.title}</p>
        </Heading>
      </CardHeader>
      <CardBody className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-center text-sm font-normal p-1 shadow-md rounded-md text-green-600">
          <p className={`${props.negative && 'text-red-500'} font-bold p-0.5`}>
            {props.type === 'ticket' && `${growth}%`}
            {props.type === 'orders' && `${growth}%`}
            {props.type === 'products' &&
              props.endPoint === '/orders-month' &&
              `${growth}%`}

            {keepingProducts &&
              `há ${calculateDaysUntilDate(keepingProducts.since)} dias`}

            {endingStock &&
              `há ${calculateDaysUntilDate(endingStock.since)} dias`}
          </p>
        </div>
        <div className="w-full flex items-center justify-start text-sm font-normal p-1 text-green-600">
          <p className={`${props.negative && 'text-red-500'}`}>
            {props.details}
          </p>
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
                {props.endPoint === '/orders-month'
                  ? value
                  : keepingProducts.value ?? endingStock.value}
              </strong>{' '}
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
