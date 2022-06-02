import styled from 'styled-components'

import { mq, ScreenSize } from '../../theme/mq'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.8rem;
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: border-box;

  ${mq.medium} {
    padding: 0 2rem;
  }

  ${mq.large} {
    padding: 0 4rem;
  }
`
