import Link from 'next/link'
import type { FC } from 'react'

import { Filter } from './parts/Filter'

import { Card } from '../Card'
import { EventView } from '../EventView'

export const EventList: FC = () => (
  <>
    <h2>Events List</h2>
    <nav>
      <Filter onChange={(e) => console.log('clicked on filter, type: ', e)} />
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
    </ul>
  </>
)

EventList.displayName = 'MyLayout'
