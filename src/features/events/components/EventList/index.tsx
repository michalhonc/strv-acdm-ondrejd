import type { FC } from 'react'

export const EventList: FC = () => (
  <>
    <nav>
      <div>Filter</div>
      <div>EventView</div>
    </nav>
    <ul>
      <li>
        <div>Card</div>
      </li>
      <li>
        <div>Card</div>
      </li>
      <li>
        <div>Card</div>
      </li>
    </ul>
  </>
)

EventList.displayName = 'MyLayout'
