import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const SignUp: FC = () => (
  <Link href={Routes.SIGNUP}>
    <div>
      Dont have an account?{' '}
      <span>
        <button type="button">
          <b>SIGN UP</b>
        </button>
      </span>
    </div>
  </Link>
)
