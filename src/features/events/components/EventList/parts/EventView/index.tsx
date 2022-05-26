import type { FC } from 'react'

enum ViewType {
  list = 'list',
  grid = 'grid',
}

type Props = {
  onChange: (viewType: ViewType) => void
}

export const EventView: FC<Props> = ({ onChange }) => (
  <ul style={{ border: '1px solid black' }}>
    <li>
      <button type="button" onClick={() => onChange(ViewType.grid)}>
        #
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange(ViewType.list)}>
        =
      </button>
    </li>
  </ul>
)
