import { Input, Text } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ProductDetailsProps {
  valueName: UseFormRegisterReturn<'name'>
  valueId: UseFormRegisterReturn<'id'>
  valueCode: UseFormRegisterReturn<'code'>
  valueSeller: UseFormRegisterReturn<'seller'>
  valueDeadline: UseFormRegisterReturn<'deadline'>
}

export function ProductDetailsForm(props: ProductDetailsProps) {
  return (
    <div className="p-5 flex flex-col items-start justify-center bg-purple-200">
      <p className="font-medium text-xl mb-8">Detalhes</p>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Nome: </Text>
        <Input
          size="sm"
          width={'72'}
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
          {...props.valueName}
        />
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">ID: </Text>
        <Input
          size="sm"
          width={'72'}
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
          {...props.valueId}
        />
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Código: </Text>
        <Input
          size="sm"
          width={'72'}
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
          {...props.valueCode}
        />
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Seller: </Text>
        <Input
          size="sm"
          width={'72'}
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
          {...props.valueSeller}
        />
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Prazo de entrega: </Text>
        <Input
          size="sm"
          width={'72'}
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
          {...props.valueDeadline}
        />
      </div>
    </div>
  )
}
