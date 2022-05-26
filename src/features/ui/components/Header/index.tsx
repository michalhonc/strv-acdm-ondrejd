import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { SignUp } from './parts/SignUp'
import { UserMenu } from './parts/UserMenu'

export const Header: FC = () => (
  <header style={{ border: '1px solid blue' }}>
    <Logo />
    <div
    // This will be conditionally rendered
    >
      <SignIn />
      <SignUp />
      <UserMenu />
    </div>
  </header>
)
