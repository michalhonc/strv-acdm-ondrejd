import type { FC, ReactNode } from 'react'

import { AsidePanel } from './parts/AsidePanel'
import { Wrapper } from './styled'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <AsidePanel />
        <main>{children}</main>
      </Wrapper>
    </>
  )
}

LayoutExternal.displayName = 'MyLayout'
