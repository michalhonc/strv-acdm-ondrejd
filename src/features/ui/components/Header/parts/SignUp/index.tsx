import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export const SignUp = () => (
  <Link href={Routes.SIGNUP}>
    <div>
      Dont have an account? <b>Sign Up</b>
    </div>
  </Link>
)
