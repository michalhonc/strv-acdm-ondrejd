import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'

import { ViewType } from '../EventView/types'

export const List = styled.ul<{ view: ViewType | string }>`
  /* typography.paragraph.small */
  display: grid;
  gap: 1.5rem;
  padding: 3rem 0 8rem;
  list-style: none;
  color: ${colors.text.dimmed};

  // Get back to this 30 mins in the recording
  ${(props) =>
    props.view === ViewType.GRID &&
    css`
      grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    `}
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
`
// Contains general styling for ul element of the StyledNav component
export const StyledUl = styled.ul`
  display: flex;
  // Getting rid of the default margin of the ul element
  padding: 0;
  list-style: none;
  gap: 1rem;
`
export const NavButton = styled.button`
  ${StyleReset}

  &:not(:disabled) {
    cursor: pointer;
  }
`
