import type { FC } from 'react'

import { ViewType } from './types'

type Props = {
  onChange: (ViewType: ViewType) => void
}

export const EventView: FC<Props> = ({ onChange }) => (
  <ul>
    <li>
      <button
        type="button"
        aria-label="Cards view"
        onClick={() => onChange(ViewType.GRID)}
      >
        #
      </button>
    </li>
    <li>
      <button
        type="button"
        aria-label="List view"
        onClick={() => onChange(ViewType.LIST)}
      >
        =
      </button>
    </li>
  </ul>
)
