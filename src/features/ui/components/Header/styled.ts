import styled, { css } from 'styled-components'

import { Logo } from './parts/Logo'

import { colors } from '../../theme/colors'
import { mq, ScreenSize } from '../../theme/mq'

// Grabbing a whole Logo component and changing color to the base color
export const StyledLogo = styled(Logo)`
  color: ${colors.text.base};
`

type HeaderProps = {
  isAbsolute?: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Without min-width justify content wont work
  min-width: 100%;
  min-height: 8rem;
  padding: 0 2rem;
  /* max-width: ${ScreenSize.large / 10}rem; */
  z-index: 100;

  ${mq.medium} {
    // Isn't vw better use-case here?
    /* padding: 0 2vw; */
    padding: 0 2rem;
  }

  ${mq.large} {
    /* padding: 0 2vw; */
    padding: 0 4rem;
  }

  ${(props) =>
    props.isAbsolute &&
    css`
      // It's important to set mq.medium explicitly here, otherwise there will be
      // white logo on the smallest size instead of base color
      ${mq.medium} {
        ${StyledLogo} {
          color: ${colors.text.inverted};
        }
      }
    `}
`
