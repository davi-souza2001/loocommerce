'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function SideBar() {
  const [pageSelected, setPageSelected] = useState<'home' | 'form' | 'map'>(
    'home',
  )

  useEffect(() => {
    const url = window.location.href
    const urlSplit = url.split('/')
    const route = urlSplit[urlSplit.length - 1]

    if (route === '') {
      setPageSelected('home')
    } else if (route === 'formPage') {
      setPageSelected('form')
    } else if (route === 'mapPage') {
      setPageSelected('map')
    }
  }, [])

  return (
    <aside className="h-56 w-16 fixed left-4 top-20 text-black rounded-md shadow-md bg-white">
      <div className="h-full w-full flex flex-col items-center justify-start">
        <div className="h-1/4 w-full flex items-center justify-center shadow-sm">
          <Image alt="menu logo" src="menu.svg" height={40} width={40} />
        </div>
        <div className="h-3/5 w-ful flex flex-col items-center justify-around">
          <Link
            href="/"
            onClick={() => setPageSelected('home')}
            className={
              pageSelected === 'home'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            {pageSelected === 'home' ? (
              <Image
                alt="home logo"
                src="whiteHome.svg"
                height={15}
                width={15}
                className="transition-all hover:text-purple-500"
              />
            ) : (
              <Image
                alt="home logo"
                src="blackHome.svg"
                height={38}
                width={38}
                className="transition-all hover:text-purple-500"
              />
            )}
          </Link>
          <Link
            href="/formPage"
            onClick={() => setPageSelected('form')}
            className={
              pageSelected === 'form'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            {pageSelected === 'form' ? (
              <Image
                alt="form logo"
                src="whiteDivision.svg"
                height={23}
                width={23}
                className="transition-all hover:text-purple-500"
              />
            ) : (
              <Image
                alt="form logo"
                src="blackDivision.svg"
                height={30}
                width={30}
                className="transition-all hover:text-purple-500"
              />
            )}
          </Link>
          <Link
            href="/mapPage"
            onClick={() => setPageSelected('map')}
            className={
              pageSelected === 'map'
                ? 'bg-purple-600 p-2 rounded-md text-white transition-all hover:bg-purple-500'
                : ''
            }
          >
            {pageSelected === 'map' ? (
              <Image
                alt="map logo"
                src="whiteTruck.svg"
                height={28}
                width={28}
                className="transition-all hover:text-purple-500"
              />
            ) : (
              <Image
                alt="map logo"
                src="blackTruck.svg"
                height={30}
                width={30}
                className="transition-all hover:text-purple-500"
              />
            )}
          </Link>
        </div>
      </div>
    </aside>
  )
}
