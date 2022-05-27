import React from 'react'

export const AddEventButton = () => {
  return (
    <button type="button" aria-label="Add a new event">
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
