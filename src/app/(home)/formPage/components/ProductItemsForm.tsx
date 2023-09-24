'use client'
import { Icon, Input, Text } from '@chakra-ui/react'
import { Separator } from '@radix-ui/react-separator'
import { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { BiPlus } from 'react-icons/bi'

interface ItemProps {
  code: string
  color: string
  mxOne: string
  mxTwo: string
  m: string
}

interface ProductItemsFormProps {
  fields: any[]
  valueCode: UseFormRegisterReturn<'code'>
}

export function ProductItemsForm(props: ProductItemsFormProps) {
  const [items, setItems] = useState<ItemProps[]>([
    {
      code: '',
      color: '',
      mxOne: '',
      mxTwo: '',
      m: '',
    },
  ])

  function addItem() {
    const newItem: ItemProps = {
      code: '',
      color: '',
      mxOne: '',
      mxTwo: '',
      m: '',
    }
    setItems([...items, newItem])
  }

  return (
    <div className="p-5 flex flex-col items-start justify-center">
      <div className="w-full flex items-center justify-between">
        <p className="font-medium text-xl mb-8">Itens</p>
        <button
          onClick={addItem}
          className="font-normal mb-8 flex items-center justify-center"
        >
          <Icon as={BiPlus} height={5} width={5} />
          <p>Adicionar</p>
        </button>
      </div>
      {props.fields &&
        props.fields.map((item, index) => {
          return (
            <div key={index} className="h-full w-full mb-7">
              <div className="w-full flex items-center justify-between">
                <p className="mr-12">
                  Item&nbsp;{`${index + 1 >= 10 ? index + 1 : `0${index + 1}`}`}
                </p>
                <Separator className="h-[1px] w-full bg-slate-600" />
              </div>
              <div className="h-full w-full mt-2 flex flex-col">
                <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
                  <Text className="font-medium mr-9">Código: </Text>
                  <Input
                    size="sm"
                    padding={'5'}
                    borderRadius={'5'}
                    backgroundColor={'gray.200'}
                    {...props.valueCode}
                  />
                </div>
                <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
                  <Text className="font-medium mr-16">Cor: </Text>
                  <Input
                    size="sm"
                    padding={'5'}
                    borderRadius={'5'}
                    backgroundColor={'gray.200'}
                  />
                </div>
                <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
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
            </div>
          )
        })}
    </div>
  )
}
