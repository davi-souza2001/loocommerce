'use client'
import { BiHome } from 'react-icons/bi'
import { Icon } from '@chakra-ui/react'

export function BoxOrders() {
  return (
    <div className="h-72 w-[30rem] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 bg-white shadow-md p-5 rounded-md">
      <p className="font-nunito font-bold text-xl">Pedidos realizados no mês</p>
      <div className="w-full mt-5 flex items-center justify-around">
        <div className="h-24 w-1/3 p-3 rounded-md bg-[#F7F8FA]">
          <div className="w-full flex items-center justify-start">
            <Icon as={BiHome} height={25} width={25} />
            <p className="ml-4">5000</p>
          </div>
          <p className="mt-5 font-nunito">Pedidos</p>
        </div>
        <div className="h-24 w-1/3 p-3 rounded-md bg-[#F7F8FA]">
          <div className="w-full flex items-center justify-start">
            <Icon as={BiHome} height={25} width={25} />
            <p className="ml-4">5000</p>
          </div>
          <p className="mt-5 font-nunito">Novos clientes</p>
        </div>
      </div>
      <div className="h-20 w-full flex items-end justify-center">
        <button className="bg-[#5B4DA7] h-14 w-52 rounded-3xl font-nunito font-semibold text-xl text-white">
          Ver mais
        </button>
      </div>
    </div>
  )
}
