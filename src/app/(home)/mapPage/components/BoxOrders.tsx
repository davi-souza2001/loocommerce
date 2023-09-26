'use client'
import { BiFingerprint, BiHome } from 'react-icons/bi'
import { IoIosArrowForward } from 'react-icons/io'
import { Icon } from '@chakra-ui/react'

interface BoxOrdersProps {
  orders: number
  growth: number
}

export function BoxOrders(props: BoxOrdersProps) {
  return (
    <div className="h-72 w-[28rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-md p-5 rounded-md">
      <p className="font-nunito font-bold text-xl">Pedidos realizados no mês</p>
      <div className="w-full mt-5 flex items-center justify-around">
        <div className="h-24 w-1/3 p-3 rounded-md bg-[#F7F8FA]">
          <div className="w-full flex items-center justify-start">
            <Icon as={BiHome} height={25} width={25} />
            <p className="ml-4">{props.orders}</p>
          </div>
          <p className="mt-5 font-nunito">Pedidos</p>
        </div>
        <div className="h-24 w-1/3 p-3 rounded-md bg-[#F7F8FA]">
          <div className="w-full flex items-center justify-start">
            <Icon as={BiFingerprint} height={25} width={25} />
            <p className="ml-4">{props.growth}</p>
          </div>
          <p className="mt-5 font-nunito">Novos clientes</p>
        </div>
      </div>
      <div className="h-20 w-full flex items-end justify-center">
        <button className="bg-[#5B4DA7] h-14 w-44 flex items-center justify-around rounded-3xl font-nunito font-semibold text-xl text-white">
          <p> Ver mais</p>
          <div className="h-10 w-10 p-2 flex items-center justify-center bg-white rounded-full text-black">
            <Icon as={IoIosArrowForward} height={30} width={30} />
          </div>
        </button>
      </div>
    </div>
  )
}
