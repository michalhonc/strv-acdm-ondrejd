import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { SignUp } from './parts/SignUp'

export const Header: FC = () => (
  <header style={{ border: '1px solid blue' }}>
    <Logo />
    <SignIn />
    <SignUp />
  </header>
)
