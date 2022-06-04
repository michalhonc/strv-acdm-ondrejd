import type { FC } from 'react'

import { ViewType } from './types'

import { NavButton, StyledUl } from '../EventList/styled'

type Props = {
  onChange: (ViewType: ViewType) => void
}

export const EventView: FC<Props> = ({ onChange }) => (
  <StyledUl>
    <li>
      <NavButton
        type="button"
        aria-label="Cards view"
        onClick={() => onChange(ViewType.GRID)}
      >
        #
      </NavButton>
    </li>
    <li>
      <NavButton
        type="button"
        aria-label="List view"
        onClick={() => onChange(ViewType.LIST)}
      >
        =
      </NavButton>
    </li>
  </StyledUl>
)
