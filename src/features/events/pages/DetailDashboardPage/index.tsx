import type { NextPage } from 'next'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { Attendees } from '../../components/Attendees'
import { Card } from '../../components/Card'

export const DetailDashboardPage: NextPage = () => {
  return (
    <LayoutInternal>
      <nav>
        <Link href={Routes.DASHBOARD}>
          <button type="button">Back to events</button>
        </Link>
      </nav>
      <h1>Detail event: #this-is-just-a-random-slug</h1>
      <Card />
      <Attendees />
    </LayoutInternal>
  )
}
