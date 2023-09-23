import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react'

export function Card() {
  return (
    <ChakraCard className="min-h-40 w-52 mr-5">
      <CardHeader className="mb-[-30PX]">
        <Heading size="sm"> Ticket</Heading>
      </CardHeader>
      <CardBody>
        <div className="w-12 flex items-center justify-center text-sm font-normal font-roboto p-1 shadow-md rounded-md text-green-600">
          <p>+15%</p>
        </div>
        <div className="w-full flex items-center justify-start text-sm font-normal font-roboto p-1 text-green-600">
          <p>em relação a ontem</p>
        </div>
        <div className="mt-3 w-full flex items-center justify-start font-roboto">
          <p>
            R$ <strong>9.292,00</strong>
          </p>
        </div>
      </CardBody>
    </ChakraCard>
  )
}
