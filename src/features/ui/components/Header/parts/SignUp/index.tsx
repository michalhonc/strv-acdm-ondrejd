import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { StyledLink, StyledWrapper } from './styled'

export const SignUp: FC = () => (
  <Link href={Routes.SIGNUP}>
    <StyledWrapper>
      Dont have an account?{' '}
      <span>
        <StyledLink type="button">
          <b>SIGN UP</b>
        </StyledLink>
      </span>
    </StyledWrapper>
  </Link>
)
