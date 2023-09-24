import Image from 'next/image'
import Chair from '../../../../public/chair.png'
import { BiCheck } from 'react-icons/bi'
import { Icon } from '@chakra-ui/react'

interface products {
  nome: string
  cores: string
  especificacoes: string[]
  status: string
}

interface TableProps {
  data: products[]
  currentPage: number
  itemsPerPage: number
}

export function Table() {
  const products: products[] = [
    {
      nome: 'Banco Cajá',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Ativo',
    },
    {
      nome: 'Produto 2',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Inativo',
    },
    {
      nome: 'Produto 3',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Inativo',
    },
    {
      nome: 'Produto 4',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Inativo',
    },
    {
      nome: 'Produto 5',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Inativo',
    },
    {
      nome: 'Produto 6',
      cores: 'Madeira escura; Madeira média',
      especificacoes: ['banco', 'sem braço', 'sala de jantar'],
      status: 'Inativo',
    },
  ]

  function renderTableData({ currentPage, data, itemsPerPage }: TableProps) {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = data.slice(startIndex, endIndex)

    return (
      <table className="min-w-full border-collapse rounded-md">
        <thead className="h-10 bg-gray-700 font-bold text-white">
          <tr>
            <th className="border w-1/4 p-3 rounded-l-md">PRODUTOS</th>
            <th className="border w-2/4 p-3">CORES</th>
            <th className="border w-2/4 p-3">ESPECIFICAÇÕES</th>
            <th className="border w-2/4 p-3 rounded-r-md">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => (
            <tr key={index} className="font-normal">
              <td className="border-b p-3">
                <div className="flex items-center justify-start">
                  <Image
                    alt="product image"
                    src={Chair}
                    height={60}
                    width={60}
                    className="rounded-md"
                  />
                  <p className="ml-2">{product.nome}</p>
                </div>
              </td>
              <td className="border p-3">{product.cores}</td>
              <td className="h-full border gap-7">
                {product.especificacoes.map((item, index) => (
                  <p key={index} className="p-2">
                    {item}
                  </p>
                ))}
              </td>
              <td className="border p-3">
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
    )
  }

  return (
    <>
      {renderTableData({
        data: products,
        currentPage: 1,
        itemsPerPage: 3,
      })}
    </>
  )
}
