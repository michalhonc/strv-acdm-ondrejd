import styled from 'styled-components'

import { colors } from '~/features/ui/theme/colors'
import { mq } from '~/features/ui/theme/mq'
import { font } from '~/features/ui/theme/typography'

export const Aside = styled.aside`
  // Making it disappear on mobile
  display: none;

  ${mq.medium} {
    display: flex;
    // Important otherwise it the Image layout fill wont work
    position: relative;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem clamp(2rem, 2.2vw, 4rem) 4rem;
  position: relative;
`

export const Hr = styled.hr`
  border: none;
  height: 1px;
  margin: 2rem 0 1.3rem 0;
  width: clamp(1.8rem, 1.5vw, 3rem);
  background-color: ${colors.accent.primary};
`

export const Quote = styled.q`
  display: block;
  text-align: center;
  font-size: clamp(2rem, 2.2vw, 3.6rem);
  font-family: ${font.quote};
  line-height: 1.166;
`

export const Figcap = styled.figcaption`
  color: ${colors.text.dimmed};
`
