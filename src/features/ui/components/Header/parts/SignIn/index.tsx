import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN}>
    <div>
      Already have an account?{' '}
      <span>
        <button type="button">
          <b>Sign In</b>
        </button>
      </span>
    </div>
  </Link>
)
