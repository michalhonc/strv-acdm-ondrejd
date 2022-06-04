import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const StyledWrapper = styled.div`
  color: ${colors.text.formLabel};
`
export const StyledLink = styled.a`
  color: ${colors.text.dimmed};

  &:not(:disabled) {
    cursor: pointer;
  }
`
