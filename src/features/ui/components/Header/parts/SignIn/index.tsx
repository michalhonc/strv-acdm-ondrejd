import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export const SignIn = () => (
  <Link href={Routes.LOGIN}>
    <div>
      Already have an account? <b>sign in</b>
    </div>
  </Link>
)
