import styled, { css, keyframes } from 'styled-components'

import { colors } from '../../theme/colors'
import { StyleReset } from '../StyleReset'

export const InputWrapper = styled.div`
  margin: 1rem 0;
  font-size: 1.6rem;
`

export const LabelText = styled.span`
  /* padding */
  display: block;
  // By setting position absolute we can move it to the top of the input
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
  color: ${colors.text.formLabel};
  transition: 0.4s transform;
  transform-origin: 0 50%;
`

export const StyledInput = styled.input`
  ${StyleReset}
  /* padding */

  display: block;
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

  // If the element is in focus state I'm targeting the LabelText
  // &:not(:placeholder-shown) this code makes sure that label text sticks up
  // when there's something in the input file

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

export const Label = styled.label<{ hasError?: boolean }>`
  display: block;
  position: relative;
  padding-top: 2rem;

  ${(props) =>
    props.hasError &&
    css`
      animation: 0.5s ${shake} ${StyledInput} {
        border-bottom-color: ${colors.accent.destructive};
      }
    `}
`
