import Link from 'next/link'
import type { FC, TimeHTMLAttributes } from 'react'

import { Routes } from '~/features/core/constants/routes'

type Props = TimeHTMLAttributes<HTMLTimeElement> & {
  author?: string
  title?: string
  description?: string
  currentCapacity?: number
  maxCapacity?: number
}

export const Card: FC<Props> = ({
  dateTime = '2008-02-14 20:00',
  title = 'Valentines day!!!',
  author = 'Ondrej Dr',
  description = 'If you have ever felt confused then you are not alone. I will show you the way.',
  currentCapacity = 11,
  maxCapacity = 10,
}) => (
  <article style={{ border: '1px solid black' }}>
    <time dateTime={dateTime}>{dateTime}</time>
    <h3>{title}</h3>
    <p>{author}</p>
    <p>{description}</p>
    <p>
      {currentCapacity} <span>of</span> {maxCapacity}
    </p>
    <Link href={Routes.EDIT}>
      <button type="button">EDIT (or VIEW or JOIN)</button>
    </Link>
  </article>
)
