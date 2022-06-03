import styled from 'styled-components'

import { Button } from '~/features/ui/components/Button'

// Importing existing button and adding some attrs
export const SubmitButton = styled(Button).attrs({
  type: 'submit',
  accent: 'primary',
})`
  // Inside here you can add any styles you want
  color: purple;
`
