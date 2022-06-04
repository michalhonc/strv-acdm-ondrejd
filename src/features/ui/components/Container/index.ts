import styled from 'styled-components'

import { colors } from '../../theme/colors'
import { mq, ScreenSize } from '../../theme/mq'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.8rem;

  //  1200 px => 120rem
  max-width: ${ScreenSize.large / 10}rem;
  box-sizing: border-box;
  /* background-color: ${colors.background.light}; */

  ${mq.medium} {
    padding: 0 2rem;
  }

  ${mq.large} {
    padding: 0 4rem;
  }
`
