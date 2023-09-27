import UseAuth from '@/service/hooks/UseSideBar'
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'
import Image from 'next/image'

export function Header() {
  const { user } = UseAuth()

  return (
    <header className="h-16 w-full flex items-center justify-between fixed z-10 bg-white shadow-md">
      <div className="h-full w-20 flex items-center justify-center">
        <Image alt="logo" src={'logo.svg'} height={40} width={40} />
      </div>
      <div className="h-full flex items-center justify-around">
        <p className="mr-5">{user ?? 'Nome de usuário inválido'}</p>
        <Wrap>
          <WrapItem className="rounded-full text-white mr-5">
            <Avatar name={user} textColor={'white'} bg="#5A4CA7" />
          </WrapItem>
        </Wrap>
      </div>
    </header>
  )
}
