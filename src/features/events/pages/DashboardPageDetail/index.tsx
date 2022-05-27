import type { NextPage } from 'next'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

export const DashboardPageDetail: NextPage = () => {
  return (
    <LayoutInternal>
      <article>
        <nav>
          <Link href={Routes.DASHBOARD}>
            <button type="button">Back to events</button>
          </Link>
        </nav>
        <h1>This is DashboardPageDetail </h1>
        <p>Detail event: #this-is-just-a-random-slug</p>
        <p>
          11 <span>of</span> 10
        </p>
        <button type="button">CTA</button>
      </article>
      <aside>
        <h2>Attendees</h2>
        <ul>
          <li>Peter Pan</li>
          <li>Woody</li>
          <li>Mr. Yoda</li>
        </ul>
      </aside>
    </LayoutInternal>
  )
}
