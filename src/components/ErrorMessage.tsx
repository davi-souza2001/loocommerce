import { Text, Collapse } from '@chakra-ui/react'

interface ErrorMessageProps {
  error?: string
}

export function ErrorMessage(props: ErrorMessageProps) {
  return (
    <Collapse in={!!props?.error} animateOpacity>
      <Text fontSize="1rem" color="red">
        *{props?.error}
      </Text>
    </Collapse>
  )
}
