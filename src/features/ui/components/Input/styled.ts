import styled, { css, keyframes } from 'styled-components'

import { PasswordIcon } from './parts/PasswordIcon'

import { colors } from '../../theme/colors'
import { StyleReset } from '../StyleReset'

export const InputWrapper = styled.div`
  margin: 2rem auto;
  /* position: relative; */
`

// Grabbing a whole Logo component and changing color to the base color
type PasswordProps = {
  isActive: boolean
}

export const StyledPasswordIcon = styled(PasswordIcon)<PasswordProps>`
  color: ${colors.text.formLabel};

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isActive &&
    css`
      color: ${colors.text.base};
    `}
`

export const PasswordToggle = styled.a`
  ${StyleReset}
  position: absolute;
  left: 95%;

  // Another way how to center the button, but Label flex needs to be block
  /* position: absolute;
  left: 95%;
  transform: translateY(-100%); */
`

export const LabelText = styled.span`
  /* padding */
  display: block;
  // By setting position absolute we can move it to the top of the input
  position: absolute;
  top: 2rem;
  left: 0;
  color: ${colors.text.formLabel};
  transition: 0.4s transform;
  transform-origin: 0 50%;
`

export const StyledInput = styled.input`
  ${StyleReset}
  /* padding */

  display: block;
  color: ${colors.text.base};
  // Important for the input to be 100% width
  width: 100%;
  outline: none;
  border-bottom: 1px solid ${colors.text.formLabel};
  transition: border-bottom-color 0.2s;

  &:focus {
    border-bottom-color: ${colors.accent.primary};
  }

  &::placeholder {
    opacity: 0;
  }

  // If the element is in focus state I'm targeting the LabelText and applying
  // following rules over it.
  // &:not(:placeholder-shown) this code makes sure that label text sticks up
  // when placeholder is not visible => input has value in the field

  &:focus + ${LabelText}, &:not(:placeholder-shown) + ${LabelText} {
    transform: translateY(-2.5rem) scale(0.8);
  }
`

const shake = keyframes`
from { transform: none}
20% { transform: translateX(-1.5rem) }
40% { transform: translateX(1.5rem) }
60% { transform: translateX(-1.5rem) }
80% { transform: translateX(1.5rem) }
to { transform: none}
`

type LabelProps = {
  hasError?: boolean
}

export const Label = styled.label<LabelProps>`
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 2rem;

  ${(props) =>
    props.hasError &&
    // Correct behavior would be coloring the StyledInput with colors.accent.destructive
    // the same way it's purple now. It seems targeting is not working and it always
    // the color to the Label instead of StyledInput.

    css`
      animation: 0.5s ${shake};
      ${StyledInput} {
        border-bottom-color: ${colors.accent.destructive};
      }
    `}
`
