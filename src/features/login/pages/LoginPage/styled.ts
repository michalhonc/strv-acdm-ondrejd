import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'
import { colors } from '~/features/ui/theme/colors'
import { fontWeight } from '~/features/ui/theme/typography'

// Importing existing button and adding some attrs
export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})`
  // Inside here you can add any styles you want
  /* color: purple; */
  font-weight: ${fontWeight.submitButton};
  /* font-weight: bold; */
`

export const H1 = styled.h1`
  color: ${colors.text.base};
`

export const P = styled.p`
  color: ${colors.text.base};
`

export const Form = styled.form`
  // inline-block is crucial for the full width login view (input is inline by default
  // therefore no margin or padding can be applied to it)
  // great vid about block, inline and inline-block https://www.youtube.com/watch?v=x_i2gga-sYg&t=710s&ab_channel=KevinPowell
  /* display: inline-block; */

  // Gives you a chance to play with the length of the input field
  /* max-width: 46rem; */
`
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;

  > form,
  ${SubmitButton} {
    margin-top: 4rem;
  }
`
