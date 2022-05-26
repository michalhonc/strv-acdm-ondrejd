import type { FC } from 'react'

enum FilterType {
  all = 'all',
  future = 'future',
  past = 'past',
}

type Props = {
  onChange: (filterType: FilterType) => void
}

export const Filter: FC<Props> = ({ onChange }) => (
  <ul style={{ border: '1px solid black' }}>
    <li>
      <button type="button" onClick={() => onChange(FilterType.all)}>
        All events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange(FilterType.future)}>
        Future Events
      </button>
    </li>
    <li>
      <button type="button" onClick={() => onChange(FilterType.past)}>
        Past events
      </button>
    </li>
  </ul>
)
