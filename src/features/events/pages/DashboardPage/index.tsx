import type { NextPage } from 'next'

import { Layout } from '~/features/ui/components/Layout'

import { EventList } from '../../components/EventList'

export const DashboardPage: NextPage = () => (
  <Layout>
    <h1>This is Dashboard Page!</h1>
    <EventList />
  </Layout>
)
