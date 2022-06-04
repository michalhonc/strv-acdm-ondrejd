import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 3rem;
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: ${colors.background.light};
`

export const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
`
export const TitleAuthorDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Description = styled.p`
  /* max-width: 85%; */
`
