import type { FC, ReactNode } from 'react'

import { AsidePanel } from './parts/AsidePanel'
import { Main, Wrapper } from './styled'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <AsidePanel />
      <Main>{children}</Main>
    </Wrapper>
  )
}

LayoutExternal.displayName = 'MyLayout'
