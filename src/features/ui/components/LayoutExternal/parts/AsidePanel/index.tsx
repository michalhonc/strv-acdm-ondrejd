import type { FC } from 'react'

import { Aside, Figure, Quote } from './styled'

export const AsidePanel: FC = () => {
  return (
    <Aside>
      <Figure>
        <Quote>Great, kid. Don&apos;t get cocky.</Quote>
        <hr />
        <figcaption>San Holo</figcaption>
      </Figure>
    </Aside>
  )
}
