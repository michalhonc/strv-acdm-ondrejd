import styled, { css } from 'styled-components'

import { colors } from '../../theme/colors'
import { fontSize } from '../../theme/typography'
import { StyleReset } from '../StyleReset'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive'
}

export const Button = styled.button<ButtonProps>`
  // Declaring 3 CSS variables
  --text-color: ${colors.text.inverted};
  --background-color: ${colors.background.dark};
  --background-color-hover: ${colors.background.dark};

  // Regular style component styles
  ${StyleReset}
  // Defines whether the buttons will be...
  display: inline-block; // ... side by side - inline
  /* display: block; // ... or stacked - block */
  font-size: ${fontSize.labelText.medium};
  padding: 0.8rem 5.6rem;
  color: var(--text-color);
  border-radius: 2px;
  transition: background-color 0.3s;
  background-color: var(--background-color);
  border: none;

  &:disabled {
    --text-color: ${colors.text.inactive};
    --background-color: ${colors.background.inactive};
  }

  &:not(:disabled) {
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: var(--background-color-hover);
    }
  }

  // Accepting props
  ${(props) =>
    props.accent === 'primary' &&
    css`
      --background-color: ${colors.accent.primary};
      --background-color-hover: ${colors.accent.primaryHover};
    `}

  ${(props) =>
    props.accent === 'destructive' &&
    css`
      --background-color: ${colors.accent.destructive};
      --background-color-hover: ${colors.accent.destructiveHover};
    `}


  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: ${fontSize.labelText.small};
      padding: 0.3em 2em 0.2em;
    `}
`
