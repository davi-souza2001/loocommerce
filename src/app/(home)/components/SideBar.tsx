'use client'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { HiOutlineSquare3Stack3D, HiOutlineTruck } from 'react-icons/hi2'
import { BiHomeAlt2 } from 'react-icons/bi'
import { Icon } from '@chakra-ui/react'
import UseSideBar from '@/service/hooks/UseSideBar'

export function SideBar() {
  const { pageSelected, setPageSelected } = UseSideBar()

  function handlePageSelected(page: 'home' | 'form' | 'map') {
    setPageSelected(page)
  }

  return (
    <aside className="h-56 w-16 absolute left-4 top-20 text-black rounded-md shadow-md">
      <div className="h-full w-full flex flex-col items-center justify-start">
        <div className="h-1/4 w-full flex items-center justify-center shadow-sm">
          <button>
            <Icon
              as={HiOutlineMenuAlt2}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
        </div>
        <div className="h-3/5 w-ful flex flex-col items-center justify-around">
          <button
            onClick={() => handlePageSelected('home')}
            className={
              pageSelected === 'home'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            <Icon as={BiHomeAlt2} height={5} width={5} />
          </button>
          <button
            onClick={() => handlePageSelected('form')}
            className={
              pageSelected === 'form'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            <Icon
              as={HiOutlineSquare3Stack3D}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
          <button
            onClick={() => handlePageSelected('map')}
            className={
              pageSelected === 'map'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            <Icon
              as={HiOutlineTruck}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
        </div>
      </div>
    </aside>
  )
}
