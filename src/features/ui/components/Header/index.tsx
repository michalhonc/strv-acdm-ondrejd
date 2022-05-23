import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { SignUp } from './parts/SignUp'

export const Header = () => (
  <header style={{ border: '1px solid blue' }}>
    <Logo />
    <SignIn />
    <SignUp />
  </header>
)
