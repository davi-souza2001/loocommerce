import { Input, Text } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface EmailInputProps {
  value: UseFormRegisterReturn<'email'>
}

export function EmailInput(props: EmailInputProps) {
  return (
    <>
      <Text mb="8px" className="text-black font-medium">
        E-mail
      </Text>
      <Input
        type="email"
        placeholder="nome@examplo.com"
        size="sm"
        backgroundColor={'gray.200'}
        height={'12'}
        {...props.value}
      />
    </>
  )
}
