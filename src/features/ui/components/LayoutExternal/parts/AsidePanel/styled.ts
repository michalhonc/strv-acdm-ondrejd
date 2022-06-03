import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'

export const Aside = styled.aside`
  // Making it disappear on mobile
  display: none;

  ${mq.medium} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
    height: screen;
    max-width: 48rem;
    min-width: 30rem;
    color: ${colors.text.inverted};
    text-align: center;
    background-color: ${colors.background.dark};
  }
`
export const Figure = styled.figure`
  padding: 8rem clamp(2rem, 2.2vw, 4rem) 4rem;
`

export const Quote = styled.q`
  display: block;
  margin: 2rem 0;
  text-align: center;
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  /// font-family: font.quotes
  line-height: 1.166;
`
