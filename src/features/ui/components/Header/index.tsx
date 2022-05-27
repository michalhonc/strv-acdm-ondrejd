import { useRouter } from 'next/router'
import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { SignUp } from './parts/SignUp'
import { UserMenu } from './parts/UserMenu'

type Props = {
  user?: string
}

export const Header: FC<Props> = ({ user }) => {
  const router = useRouter()

  return (
    <header style={{ border: '1px solid blue' }}>
      <Logo />
      {router.pathname === '/login' && <SignUp />}
      {router.pathname === '/signUp' && <SignIn />}
      {router.pathname === '/' && !user && <SignIn />}
      {router.pathname === '/' && user && <UserMenu />}
    </header>
  )
}
