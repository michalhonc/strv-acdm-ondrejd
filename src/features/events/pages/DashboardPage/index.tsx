import type { NextPage } from 'next'
import Head from 'next/head'

import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { AddEventButton } from '../../components/AddEventButton'
import { EventList } from '../../components/EventList'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Head
    // This tag "re-assigns" the one in the __app or document file
    >
      <title>Event dashboard</title>
    </Head>
    <h1>This is Dashboard Page on LayoutInternal!</h1>
    <section>
      <EventList />
      <AddEventButton />
    </section>
  </LayoutInternal>
)
