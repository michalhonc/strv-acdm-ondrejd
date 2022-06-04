import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { StyledLink, StyledWrapper } from './styled'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN}>
    <StyledWrapper>
      <span>
        Do you have an account?{' '}
        <StyledLink type="button">
          <b>SIGN IN</b>
        </StyledLink>
      </span>
    </StyledWrapper>
  </Link>
)
