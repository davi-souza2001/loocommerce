import { Input, Textarea, Text } from '@chakra-ui/react'

export function ProductSpecificationForm() {
  return (
    <div className="p-5 flex flex-col items-start justify-center bg-purple-200">
      <p className="font-medium text-xl mb-8">Especificações</p>
      <div className="h-16 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium mr-20">Subtítulo: </Text>
        <Input
          size="sm"
          padding={'5'}
          borderRadius={'5'}
          backgroundColor={'gray.200'}
        />
      </div>
      <div className="h-20 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium mr-12">Informações: </Text>
        <Textarea
          size="sm"
          padding={'5'}
          borderRadius={'5'}
          height={'4rem'}
          backgroundColor={'gray.200'}
          resize={'none'}
        />
      </div>
      <div className="h-20 w-full mb-3 flex items-center justify-between bg-yellow-200">
        <Text className="font-medium">Limpeza e cuidados: </Text>
        <Textarea
          size="sm"
          padding={'5'}
          borderRadius={'5'}
          height={'4rem'}
          backgroundColor={'gray.200'}
          resize={'none'}
        />
      </div>
    </div>
  )
}
