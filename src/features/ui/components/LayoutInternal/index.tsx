import type { ReactNode, FC } from 'react'

import { Header } from '../Header'
import { Main } from '../LayoutExternal/styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutInternal: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main style={{ border: '2px solid green' }}>{children}</Main>
    </>
  )
}
