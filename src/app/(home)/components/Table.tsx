'use client'
import Image from 'next/image'
import Chair from '../../../../public/chair.png'
import { Dispatch, SetStateAction } from 'react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineLoading } from 'react-icons/ai'

export interface Products {
  id: string
  name: string
  color: string
  status: string
  description: string
}

interface ProductsProps {
  products: Products[]
  loading: boolean
  pagination: number
  setPagination: Dispatch<SetStateAction<number>>
}

export function Table(props: ProductsProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <table className="min-w-full border-collapse rounded-md">
        <thead className="h-10 bg-gray-700 font-bold text-white">
          <tr>
            <th className="border w-1/4 p-3 rounded-l-md">PRODUTOS</th>
            <th className="border w-1/4 p-3">CORES</th>
            <th className="border w-2/4 p-3">ESPECIFICAÇÕES</th>
            <th className="border w-2/4 p-3 rounded-r-md">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id} className="font-normal">
              <td className="border-b p-3">
                <div className="flex items-center justify-start">
                  <Image
                    alt="product image"
                    src={Chair}
                    height={60}
                    width={60}
                    className="rounded-md"
                  />
                  <p className="ml-2">{product.name}</p>
                </div>
              </td>
              <td className="border p-3">{product.color}</td>
              <td className="h-full p-2 border gap-7">
                <p className="p-2">{product.description}</p>
              </td>
              <td className="border p-7">
                <div className="flex items-center justify-center">
                  {product.status}
                  <Image
                    alt="logo check"
                    src={'check.svg'}
                    height={28}
                    width={28}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-16 w-full font-normal flex items-center justify-end">
        <div className="h-full w-48 flex items-center justify-between">
          {props.loading && (
            <Icon
              as={AiOutlineLoading}
              height={5}
              width={5}
              className="ml-3 transition-all animate-spin"
            />
          )}
          <p>{props.pagination} de 6</p>
          <div className="flex items-center justify-center mr-5">
            <button
              disabled={props.pagination === 1}
              onClick={() => props.setPagination((state) => state - 1)}
            >
              <Image alt="arrow" src={'arrowLeft.svg'} width={40} height={40} />
            </button>
            <button
              disabled={props.pagination === 6}
              onClick={() => props.setPagination((state) => state + 1)}
            >
              <Image
                alt="arrow"
                src={'arrowRight.svg'}
                width={40}
                height={40}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
