import Head from 'next/head'
import type { FC } from 'react'

export const HeadDefault: FC = () => (
  <Head>
    <meta charSet="UTF=8" />
    <title>Eventio</title>
    <meta
      name="description"
      content="A platform that allows registered users to sign up for and create events."
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta property="og:image:width" content="1652" />
    <meta property="og:image:height" content="865" />
    <meta property="og:title" content="Eventio" />
    <meta
      property="og:description"
      content="A platform that allows registered users to sign up for and create events."
    />
    <meta property="og:title" content="Eventio" />
    <meta property="og:url" content="http://example.com" />
    <meta
      property="og:image"
      content="https://drive.google.com/file/d/19Z0JS8HD2aSj9kjaANLVRxlf4Dplgb0Y/view?usp=sharing/og-image.jpg"
    />
  </Head>
)
