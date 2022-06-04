import styled from 'styled-components'

import { colors } from '../../theme/colors'

export const Wrapper = styled.div`
  display: block;
  flex-wrap: wrap;
  // Keeps the background on whole screen
  min-height: 100%;
  background-color: ${colors.background.dimmed};
`

export const Main = styled.main`
  // Flex will cut the content inside it to same size items, block will
  // preserve the size of inner items
  display: block;
  padding: 10rem 0;
  min-height: 100%;
  gap: 1rem;
  // Center objects like a GOAT with margin: 0 auto
  margin: 0 auto;
`
