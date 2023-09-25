'use client'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Input, Text } from '@chakra-ui/react'
import { Separator } from '@radix-ui/react-separator'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ProductItemsFormProps {
  itemPosition: number
  errors: any
  valueCode: UseFormRegisterReturn<`items.${number}.code`>
  valueColor: UseFormRegisterReturn<`items.${number}.color`>
  width: UseFormRegisterReturn<`items.${number}.width`>
  height: UseFormRegisterReturn<`items.${number}.height`>
  length: UseFormRegisterReturn<`items.${number}.length`>
}

export function ProductItemsForm(props: ProductItemsFormProps) {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <p className="mr-12">
          Item&nbsp;
          {`${
            props.itemPosition + 1 >= 10
              ? props.itemPosition + 1
              : `0${props.itemPosition + 1}`
          }`}
        </p>
        <Separator className="h-[1px] w-full bg-slate-600" />
      </div>
      <div className="h-full w-full mt-2 flex flex-col">
        <div className="h-16 w-full flex items-center justify-between">
          <Text className="font-medium mr-9">Código: </Text>
          <div className="w-full flex-col">
            <Input
              size="sm"
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'#F3F5F6'}
              {...props.valueCode}
            />
            {props.errors?.items ? (
              <ErrorMessage
                error={props.errors.items[props.itemPosition]?.code?.message}
              />
            ) : (
              false
            )}
          </div>
        </div>
        <div className="h-16 w-full flex items-center justify-between">
          <Text className="font-medium mr-16">Cor: </Text>
          <div className="w-full flex-col">
            <Input
              size="sm"
              padding={'5'}
              borderRadius={'5'}
              backgroundColor={'#F3F5F6'}
              {...props.valueColor}
            />
            {props.errors?.items ? (
              <ErrorMessage
                error={props.errors.items[props.itemPosition]?.color?.message}
              />
            ) : (
              false
            )}
          </div>
        </div>
        <div className="h-16 w-full flex items-center justify-between">
          <Text className="font-medium mr-10">Tamanho: </Text>
          <Input
            type="number"
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.width}
          />
          <p>Largura</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.width?.message}
            />
          ) : (
            false
          )}
          <Input
            type="number"
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.height}
          />
          <p>altura</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.height?.message}
            />
          ) : (
            false
          )}
          <Input
            type="number"
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'#F3F5F6'}
            {...props.length}
          />
          <p>tamanho</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.length?.message}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </>
  )
}
