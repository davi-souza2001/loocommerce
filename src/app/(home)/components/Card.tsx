import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react'

interface CardProps {
  title: string
  subtitle: string
  negative?: boolean
  details?: string
}

export function Card(props: CardProps) {
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
            {props.subtitle}
          </p>
        </div>
        <div className="w-full flex items-center justify-start text-sm font-normal p-1 text-green-600">
          <p className={`${props.negative && 'text-red-500'}`}>
            {props.details}
          </p>
        </div>
        <div className="mt-3 w-full flex items-center justify-start font-normal">
          <p>
            R$ <strong className="font-bold">9.292,00</strong>
          </p>
        </div>
      </CardBody>
    </ChakraCard>
  )
}
