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
  valueMxOne: UseFormRegisterReturn<`items.${number}.mxOne`>
  valueMxTwo: UseFormRegisterReturn<`items.${number}.mxTwo`>
  valueM: UseFormRegisterReturn<`items.${number}.m`>
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
        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
          <Text className="font-medium mr-9">Código: </Text>
          <Input
            size="sm"
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
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
        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
          <Text className="font-medium mr-16">Cor: </Text>
          <Input
            size="sm"
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
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
        <div className="h-16 w-full flex items-center justify-between bg-yellow-200">
          <Text className="font-medium mr-10">Tamanho: </Text>
          <Input
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
            {...props.valueMxOne}
          />
          <p>m x</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.mxOne?.message}
            />
          ) : (
            false
          )}
          <Input
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
            {...props.valueMxTwo}
          />
          <p>m x</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.mxTwo?.message}
            />
          ) : (
            false
          )}
          <Input
            size="sm"
            width={'16'}
            padding={'5'}
            borderRadius={'5'}
            backgroundColor={'gray.200'}
            {...props.valueM}
          />
          <p>m</p>
          {props.errors?.items ? (
            <ErrorMessage
              error={props.errors.items[props.itemPosition]?.m?.message}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </>
  )
}
