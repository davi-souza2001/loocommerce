import { Select } from '@chakra-ui/react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface ProductSelectFormProps {
  title: string
  placeholder: string
  value: UseFormRegisterReturn<'categories' | 'tags'>
}

export function ProductSelectForm(props: ProductSelectFormProps) {
  return (
    <div className="p-5 flex flex-col items-start justify-start bg-purple-200">
      <p className="font-medium text-xl mb-8">{props.title}</p>
      <div className="h-16 w-[30rem] flex items-center justify-between bg-yellow-200">
        <Select
          defaultValue={'ano'}
          placeholder={props.placeholder}
          height={'9'}
          backgroundColor={'gray.200'}
          {...props.value}
        >
          <option value="option2">Mês</option>
          <option value="option3">Dia</option>
        </Select>
      </div>
    </div>
  )
}
