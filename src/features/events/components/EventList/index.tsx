import Link from 'next/link'
import type { FC } from 'react'
import { useState } from 'react'

import { Filter } from './parts/Filter'
import { List } from './styles'

import { Card } from '../Card'
import { EventView } from '../EventView'

export const EventList: FC = () => {
  const [view, setView] = useState<string>('GRID')
  // const view = ViewType.GRID as ViewType

  return (
    <>
      <h2>Events List</h2>
      <nav>
        <Filter onChange={(e) => console.log('clicked on filter, type: ', e)} />
        <EventView
          onChange={(e) => {
            console.log('clicked on EventView, type:', e)
            setView(e)
          }}
        />
      </nav>
      <List view={view}>
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
      </List>
    </>
  )
}

EventList.displayName = 'MyLayout'
