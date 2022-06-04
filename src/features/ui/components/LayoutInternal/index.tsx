import type { ReactNode, FC } from 'react'

import { Main, Wrapper } from './styled'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutInternal: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  )
}
