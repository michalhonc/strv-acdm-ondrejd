import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { AddEventButton } from '../../components/AddEventButton'
import { EventList } from '../../components/EventList'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <Head>
        <title>Event dashboard</title>
      </Head>
      <h1>This is Dashboard Page on LayoutInternal!</h1>
      <section>
        <EventList />
        <AddEventButton />
      </section>
    </Container>
  </LayoutInternal>
)
