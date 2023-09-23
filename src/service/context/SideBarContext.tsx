'use client'
import { createContext, useState } from 'react'

export interface SideBarContextProps {
  pageSelected: 'home' | 'form' | 'map'
  setPageSelected: (page: 'home' | 'form' | 'map') => void
}

const SideBarContext = createContext({} as SideBarContextProps)

export function SideBarProvider(props: any) {
  const [pageSelected, setPageSelected] = useState<'home' | 'form' | 'map'>(
    'home',
  )

  return (
    <SideBarContext.Provider value={{ pageSelected, setPageSelected }}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
