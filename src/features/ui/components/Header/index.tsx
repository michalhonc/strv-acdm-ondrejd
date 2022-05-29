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
      {/* {TODO: change to the switch statement} */}
      {router.pathname === '/login' && <SignUp />}
      {router.pathname === '/signUp' && <SignIn />}

      {/* {Difference between asPath and pathname} */}
      {/* <p>{router.asPath}</p>
      <p>{router.pathname}</p> */}

      {/* {This will; be replaced with global state of "user"} */}
      {router.pathname === '/events/[slug]' && !user && <SignIn />}
      {router.pathname === '/events/[slug]' && user && <UserMenu />}

      {router.pathname === '/events/create' && !user && <SignIn />}
      {router.pathname === '/events/create' && user && <UserMenu />}

      {router.pathname === '/profile' && user && <UserMenu />}

      {router.pathname === '/' && !user && <SignIn />}
      {router.pathname === '/' && user && <UserMenu />}
    </header>
  )
}
