import type { FC } from 'react'

import { Card } from './parts/Card'
import { EventView } from './parts/EventView'
import { Filter } from './parts/Filter'

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
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
  </>
)

EventList.displayName = 'MyLayout'
