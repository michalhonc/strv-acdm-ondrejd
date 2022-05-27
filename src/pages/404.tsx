import Link from 'next/link'
import { useRouter } from 'next/router'

import { Routes } from '~/features/core/constants/routes'

export default function Custom404() {
  const router = useRouter()

  const refresh = () => {
    router.reload()
  }

  return (
    <>
      <h1>404 Error - page not found</h1>
      <p>
        Seems like Darth Vader just hits our website and drops it down. Please
        press the refresh button and everything should be fine again.
      </p>
      <span>
        <button type="button" onClick={refresh}>
          REFRESH
        </button>
        <Link href={Routes.DASHBOARD}>
          <button type="button">GO TO THE HOMEPAGE</button>
        </Link>
      </span>
    </>
  )
}
