import type { ReactNode, FC } from 'react'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutInternal: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ border: '2px solid green' }}>{children}</main>
    </>
  )
}
