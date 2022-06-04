import type { FC } from 'react'

import { NavButton, StyledUl } from '../../styled'

enum FilterType {
  ALL = 'ALL',
  FUTURE = 'FUTURE',
  PAST = 'PAST',
}

type Props = {
  onChange: (filterType: FilterType) => void
}

export const Filter: FC<Props> = ({ onChange }) => (
  <StyledUl>
    <li>
      <NavButton type="button" onClick={() => onChange(FilterType.ALL)}>
        ALL EVENTS
      </NavButton>
    </li>
    <li>
      <NavButton type="button" onClick={() => onChange(FilterType.FUTURE)}>
        FUTURE EVENTS
      </NavButton>
    </li>
    <li>
      <NavButton type="button" onClick={() => onChange(FilterType.PAST)}>
        PAST EVENTS
      </NavButton>
    </li>
  </StyledUl>
)
