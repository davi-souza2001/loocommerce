import UseAuth from '@/service/hooks/UseSideBar'
import { Avatar, Wrap, WrapItem } from '@chakra-ui/react'

export function Header() {
  const { user } = UseAuth()

  return (
    <header className="h-16 w-full flex items-center justify-between fixed z-10 bg-white shadow-md">
      <div className="h-full w-20 flex items-center justify-center">
        <div className="h-14 w-14 rounded-full bg-red-500" />
      </div>
      <div className="h-full flex items-center justify-around">
        <p className="mr-5">{user ?? 'Nome de usuário inválido'}</p>
        <Wrap>
          <WrapItem>
            <Avatar
              name="User Avatar"
              src="https://avatars.githubusercontent.com/u/77704994?v=4"
            />
          </WrapItem>
        </Wrap>
      </div>
    </header>
  )
}
