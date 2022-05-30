import type { NextPage } from 'next'
import Head from 'next/head'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { MyEvents } from '../../components/MyEvents'

export const ProfilePage: NextPage = () => {
  return (
    <LayoutInternal>
      <Head>
        <title>Profile section</title>
      </Head>
      <h1>Tom Watts</h1>
      <p>tommwatts@strv.com</p>
      <section>
        <MyEvents />
      </section>
    </LayoutInternal>
  )
}
