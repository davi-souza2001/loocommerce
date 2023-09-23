import {
  Table as TableUI,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import Chair from '../../../../public/chair.png'
import { BiCheck } from 'react-icons/bi'
import { Icon } from '@chakra-ui/react'

export function Table() {
  return (
    <TableUI className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="h-10 font-medium text-sm rounded-md text-white bg-gray-700">
            PRODUTO
          </TableHead>
          <TableHead className="h-10 font-medium text-sm rounded-l-md text-white bg-gray-700">
            CORES
          </TableHead>
          <TableHead className="h-10 font-medium text-sm text-white bg-gray-700">
            ESPECIFICAÇÕES
          </TableHead>
          <TableHead className="h-10 font-medium text-sm rounded-r-md text-white bg-gray-700">
            STATUS
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium flex items-center justify-start">
            <Image
              alt="product example image"
              src={Chair}
              height={70}
              width={70}
              className="rounded-md ml-5"
            />
            <p className="ml-5"> Banco Cajá</p>
          </TableCell>
          <TableCell className="font-medium">
            Madeira escura; Madeira média
          </TableCell>
          <TableCell className="font-medium">
            <p className="w-fit bg-gray-300 p-1 rounded-md text-xs break-keep">
              banco
            </p>
            <p className="w-fit bg-gray-300 p-1 rounded-md text-xs break-keep">
              sem braço
            </p>
            <p className="w-fit bg-gray-300 p-1 rounded-md text-xs break-keep">
              sala de jantar
            </p>
            <p className="w-fit bg-gray-300 p-1 rounded-md text-xs break-keep">
              madeira natural
            </p>
          </TableCell>
          <TableCell className="font-medium flex items-center justify-center">
            Ativo <Icon as={BiCheck} height={5} width={5} />
          </TableCell>
        </TableRow>
      </TableBody>
    </TableUI>
  )
}
