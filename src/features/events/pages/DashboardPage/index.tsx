import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Container } from '~/features/ui/components/Container'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { H1, H2 } from './styled'

import { AddEventButton } from '../../components/AddEventButton'
import { EventList } from '../../components/EventList'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Container>
      <Head>
        <title>Event dashboard</title>
      </Head>
      <H1>This is Dashboard Page on LayoutInternal!</H1>
      <section>
        <H2
        // Adding this invisible H2 for the accessibility of screen readers
        >
          Events List
        </H2>
        <EventList />
        <AddEventButton />
      </section>
    </Container>
  </LayoutInternal>
)
