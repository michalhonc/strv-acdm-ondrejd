import { Card } from '~/features/ui/components/Card'
import { Filter } from '~/features/ui/components/Filter'
import { Layout } from '~/features/ui/components/Layout'

export const DashboardPage = () => (
  <Layout>
    <h1>This is Dashboard Page!</h1>
    <Filter />
    <Card />
  </Layout>
)
