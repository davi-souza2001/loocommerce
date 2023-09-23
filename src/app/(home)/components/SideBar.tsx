'use client'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { HiOutlineSquare3Stack3D, HiOutlineTruck } from 'react-icons/hi2'
import { BiHomeAlt2 } from 'react-icons/bi'
import { Icon } from '@chakra-ui/react'

export function SideBar() {
  return (
    <aside className="h-56 w-16 absolute left-4 top-20 text-black rounded-md shadow-md">
      <div className="h-full w-full flex flex-col items-center justify-start">
        <div className="h-1/4 w-full flex items-center justify-center shadow-sm">
          <button className="">
            <Icon
              as={HiOutlineMenuAlt2}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
        </div>
        <div className="h-3/5 w-ful flex flex-col items-center justify-around">
          <button>
            <Icon
              as={BiHomeAlt2}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
          <button>
            <Icon
              as={HiOutlineSquare3Stack3D}
              height={5}
              width={5}
              className="transition-all hover:text-purple-500"
            />
          </button>
          <button>
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