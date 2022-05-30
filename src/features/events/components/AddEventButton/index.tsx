import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

export const AddEventButton: FC = () => {
  return (
    <Link href={Routes.CREATE_EVENT}>
      <a aria-label="Create Event">PLUS BUTTON</a>
    </Link>
  )
}
