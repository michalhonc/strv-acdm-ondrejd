import Image from 'next/image'
import type { FC } from 'react'

// This is the static import of the image. This is the recommended way to import images by Next.js
import asideImage from './assets/background.jpg'
import { Aside, Figure, Quote } from './styled'

export const AsidePanel: FC = () => {
  return (
    <Aside>
      <Image
        src={asideImage}
        alt="Stormtroopers"
        objectFit="cover"
        layout="fill"
        objectPosition="right"
        placeholder="blur"
        priority
        aria-hidden="true"
      />

      <Figure>
        <Quote>Great, kid. Don&apos;t get cocky.</Quote>
        <hr />
        <figcaption>San Holo</figcaption>
      </Figure>
    </Aside>
  )
}
