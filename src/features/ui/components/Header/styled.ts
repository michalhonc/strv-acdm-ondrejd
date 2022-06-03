import styled from 'styled-components'

import { mq, ScreenSize } from '../../theme/mq'

export const HeaderContainer = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // Without min-width justify content wont work
  min-width: 100%;
  min-height: 8rem;
  padding: 0 2rem;
  /* max-width: ${ScreenSize.large / 10}rem; */

  ${mq.medium} {
    padding: 0 2rem;
  }

  ${mq.large} {
    padding: 0 4rem;
  }
`
