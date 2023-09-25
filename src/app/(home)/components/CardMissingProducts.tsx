import {
  Card as ChakraCard,
  CardHeader,
  Heading,
  CardBody,
} from '@chakra-ui/react'

export interface CardProps {
  type: string
  value: number
  since: string
  details: string
  stock?: boolean
}

export function CardMissingProducts(props: CardProps) {
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
          <p className="font-bold">{props.type}</p>
        </Heading>
      </CardHeader>
      <CardBody className="w-full flex flex-col items-start justify-between">
        <div className="flex items-center justify-center text-sm font-normal p-1 shadow-md rounded-md text-green-600">
          <p className="text-red-500 font-bold p-0.5">
            {props.since && `há ${calculateDaysUntilDate(props.since)} dias`}
          </p>
        </div>
        <div className="w-full flex items-center justify-start text-sm font-normal p-1 text-green-600">
          <p className="text-red-500">
            {props.stock && 'repor o quanto antes'}
          </p>
        </div>
        <div className="mt-3 w-full flex items-center justify-start font-normal">
          {props.value && (
            <p>
              <strong className="font-bold mr-3">{props.value}</strong> pedidos
            </p>
          )}
        </div>
      </CardBody>
    </ChakraCard>
  )
}
