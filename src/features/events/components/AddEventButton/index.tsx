import React from 'react'
import type { FC } from 'react'

type Props = {
  form?: string
  ariaLabel?: string
  type?: 'reset' | 'submit' | 'button'
}

export const AddEventButton: FC<Props> = ({ type, ariaLabel, form }) => {
  return (
    <button type={type} aria-label={ariaLabel} form={form}>
      PLUS BUTTON
    </button>
  )
}

// export const AddEventButton = React.forwardRef(({ href }, ref) => {
//   return (
//     <a href={href} ref={ref} type="button" aria-label="Add a new event">
//       PLUS BUTTON
//     </a>
//   )
// })

// AddEventButton.displayName = 'AddEventButton'
