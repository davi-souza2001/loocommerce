import {
  Card as ChakraCard,
  CardBody,
  CardHeader,
  Heading,
  Select,
} from '@chakra-ui/react'

interface GraphicCardProps {
  select?: boolean
  children?: React.ReactNode
  title: string
}

export default function GraphicCard(props: GraphicCardProps) {
  return (
    <ChakraCard className="min-h-40 w- mr-5">
      <CardHeader className="mb-[-30PX] w-[400px] flex items-center justify-between">
        <Heading size="sm">{props.title}</Heading>
        {props?.select && (
          <Select
            defaultValue={'ano'}
            placeholder="Ano"
            width={'40'}
            backgroundColor={'gray.200'}
          >
            <option value="option2">Mês</option>
            <option value="option3">Dia</option>
          </Select>
        )}
      </CardHeader>
      <CardBody>{props?.children}</CardBody>
    </ChakraCard>
  )
}
