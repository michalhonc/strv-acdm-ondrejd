import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { fontSize } from '~/features/ui/theme/typography'

export const StyledWrapper = styled.div`
  color: ${colors.text.formLabel};
  font-size: ${fontSize.headerText};
`
export const StyledLink = styled.a`
  color: ${colors.text.dimmed};

  &:not(:disabled) {
    cursor: pointer;
  }
`
