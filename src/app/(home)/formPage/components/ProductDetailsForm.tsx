import { ErrorMessage } from '@/components/ErrorMessage'
import { Input, Text } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ProductDetailsProps {
  valueName: UseFormRegisterReturn<'productId'>
  valueId: UseFormRegisterReturn<'id'>
  valueCode: UseFormRegisterReturn<'code'>
  valueSeller: UseFormRegisterReturn<'seller'>
  valueDeadline: UseFormRegisterReturn<'deliveryDate'>
  errorsName?: string
  errorsId?: string
  errorsCode?: string
  errorsSeller?: string
  errorsDeadline?: string
}

export function ProductDetailsForm(props: ProductDetailsProps) {
  return (
    <div className="p-5 flex flex-col items-start justify-center">
      <p className="font-medium text-xl mb-8">Detalhes</p>
      <div className="h-16 w-[30rem] flex items-center justify-between">
        <Text className="font-medium">Nome: </Text>
        <div className="flex flex-col items-center justify-center">
          <Input
            size="sm"
            width={'72'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.valueName}
          />
          {props.errorsName && <ErrorMessage error={props.errorsName} />}
        </div>
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between">
        <Text className="font-medium">ID: </Text>
        <div className="flex flex-col items-center justify-center">
          <Input
            size="sm"
            width={'72'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.valueId}
          />
          {props.errorsId && <ErrorMessage error={props.errorsId} />}
        </div>
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between">
        <Text className="font-medium">Código: </Text>
        <div className="flex flex-col items-center justify-center">
          <Input
            size="sm"
            width={'72'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.valueCode}
          />
          {props.errorsCode && <ErrorMessage error={props.errorsCode} />}
        </div>
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between">
        <Text className="font-medium">Seller: </Text>
        <div className="flex flex-col items-center justify-center">
          <Input
            size="sm"
            width={'72'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.valueSeller}
          />
          {props.errorsSeller && <ErrorMessage error={props.errorsSeller} />}
        </div>
      </div>
      <div className="h-16 w-[30rem] flex items-center justify-between">
        <Text className="font-medium">Prazo de entrega: </Text>
        <div className="flex flex-col items-center justify-center">
          <Input
            type="date"
            size="sm"
            width={'72'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.valueDeadline}
          />
          {props.errorsDeadline && (
            <ErrorMessage error={props.errorsDeadline} />
          )}
        </div>
      </div>
    </div>
  )
}
