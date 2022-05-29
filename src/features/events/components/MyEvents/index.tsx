import Link from 'next/link'
import type { FC } from 'react'

import { Card } from '../Card'
import { EventView } from '../EventView'

export const MyEvents: FC = () => (
  <>
    <h2>My Events</h2>
    <nav>
      <EventView
        onChange={(e) => console.log('clicked on EventView, type:', e)}
      />
    </nav>
    <ul>
      <Link href="/events/this-is-just-a-random-slug">
        <li tabIndex={0}>
          <Card />
        </li>
      </Link>
      <Link href="/events/this-is-just-a-random-slug">
        <li tabIndex={0}>
          <Card />
        </li>
      </Link>
      <Link href="/events/this-is-just-a-random-slug">
        <li tabIndex={0}>
          <Card />
        </li>
      </Link>
    </ul>
  </>
)

MyEvents.displayName = 'MyLayout'
