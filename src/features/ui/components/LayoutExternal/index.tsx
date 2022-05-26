import type { FC, ReactNode } from 'react'

import { AsidePanel } from './parts/AsidePanel'

import { Header } from '../Header'
type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutExternal: FC<Props> = ({ children }) => (
  <>
    <Header />
    <div style={{ border: '2px solid red' }}>
      <main>{children}</main>
      <AsidePanel />
    </div>
  </>
)

LayoutExternal.displayName = 'MyLayout'
