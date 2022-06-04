import Link from 'next/link'
import React from 'react'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { StyledA } from './styled'

export const AddEventButton: FC = () => {
  return (
    <Link href={Routes.CREATE_EVENT}>
      <StyledA aria-label="Create Event">PLUS BUTTON</StyledA>
    </Link>
  )
}
