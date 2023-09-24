import { ErrorMessage } from '@/components/ErrorMessage'
import { Input, Textarea, Text } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ProductSpecificationFormProps {
  valueSubtitle: UseFormRegisterReturn<'subtitle'>
  valueInformations: UseFormRegisterReturn<'informations'>
  valueCleanup: UseFormRegisterReturn<'cleanup'>
  errorsSubtitle?: string
  errorsInformations?: string
  errorsCleanup?: string
}

export function ProductSpecificationForm(props: ProductSpecificationFormProps) {
  return (
    <div className="p-5 flex flex-col items-start justify-center bg-purple-200">
      <p className="font-medium text-xl mb-8">Especificações</p>
      <div className="h-16 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium mr-20">Subtítulo: </Text>
        <div className="flex items-center justify-center">
          {props.errorsSubtitle && (
            <ErrorMessage error={props.errorsSubtitle} />
          )}
          <Input
            size="sm"
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
            {...props.valueSubtitle}
          />
        </div>
      </div>
      <div className="h-20 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium mr-12">Informações: </Text>
        <div className="flex items-center justify-center">
          {props.errorsInformations && (
            <ErrorMessage error={props.errorsInformations} />
          )}
          <Textarea
            size="sm"
            padding={'5'}
            borderRadius={'5'}
            height={'4rem'}
            backgroundColor={'gray.200'}
            resize={'none'}
            {...props.valueInformations}
          />
        </div>
      </div>
      <div className="h-20 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Limpeza e cuidados: </Text>
        <div className="flex items-center justify-center">
          {props.errorsCleanup && <ErrorMessage error={props.errorsCleanup} />}
          <Textarea
            size="sm"
            padding={'5'}
            borderRadius={'5'}
            height={'4rem'}
            backgroundColor={'gray.200'}
            resize={'none'}
            {...props.valueCleanup}
          />
        </div>
      </div>
    </div>
  )
}
