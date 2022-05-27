import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'

export default function Custom500() {
  return (
    <>
      <h1>Something went wrong.</h1>
      <p>
        Seems like Darth Vader just hits our website and drops it down. Please
        press the refresh button and everything should be fine again.
      </p>
      <span>
        <button type="button">REFRESH</button>
        <Link href={Routes.DASHBOARD}>
          <button type="button">GO TO THE HOMEPAGE</button>
        </Link>
      </span>
    </>
  )
}
