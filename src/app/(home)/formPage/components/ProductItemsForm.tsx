'use client'
import { Button, Icon, Input, Text } from '@chakra-ui/react'
import { Separator } from '@radix-ui/react-separator'
import { BiPlus } from 'react-icons/bi'

export function ProductItemsForm() {
  return (
    <div className="p-5 flex flex-col items-start justify-center">
      <div className="w-full flex items-center justify-between">
        <p className="font-medium text-xl mb-8">Itens</p>
        <button className="font-normal mb-8 flex items-center justify-center">
          <Icon as={BiPlus} height={5} width={5} />
          <p>Adicionar</p>
        </button>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="mr-12">Item&nbsp;01</p>
        <Separator className="h-[1px] w-full bg-slate-600" />
      </div>
      <div className="h-full w-full min-[1338px]:grid-cols-2 grid grid-cols-1">
        <div className="h-full w-[67rem] mt-2 flex flex-col">
          <div className="h-16 w-2/4 flex items-center justify-between bg-yellow-200">
            <Text className="font-medium mr-10">Código: </Text>
            <Input
              size="sm"
              width={'96'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.200'}
            />
          </div>
          <div className="h-16 w-2/4 flex items-center justify-between bg-yellow-200">
            <Text className="font-medium mr-10">Cor: </Text>
            <Input
              size="sm"
              width={'96'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.200'}
            />
          </div>
          <div className="h-16 w-2/4 flex items-center justify-between bg-yellow-200">
            <Text className="font-medium mr-10">Tamanho: </Text>
            <Input
              size="sm"
              width={'16'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.200'}
            />
            <p>m x</p>
            <Input
              size="sm"
              width={'16'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.200'}
            />
            <p>m x</p>
            <Input
              size="sm"
              width={'16'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.200'}
            />
            <p>m</p>
          </div>
        </div>
        <div className="h-full w-full">
          <div className="h-20 w-2/4 flex items-center justify-start bg-yellow-200">
            <Text className="font-medium mr-10">Imagens: </Text>
            <Button
              size="sm"
              height={'20'}
              width={'20'}
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'gray.400'}
            >
              <Icon as={BiPlus} height={30} width={30} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
