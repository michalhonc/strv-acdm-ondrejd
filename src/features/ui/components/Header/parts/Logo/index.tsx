import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const Logo: FC = () => (
  <Link href={Routes.DASHBOARD}>
    <a aria-label="Eventio home button">E.</a>
  </Link>
)
