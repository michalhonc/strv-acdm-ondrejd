import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { AddEventButton } from '../../components/AddEventButton'
import { EventList } from '../../components/EventList'

export const DashboardPage: NextPage = () => (
  <LayoutInternal>
    <Head
    // This tag "re-assigns" the one in the __app or document file
    >
      <title>Event dashboard</title>
    </Head>
    <h1>This is Dashboard Page on LayoutInternal!</h1>
    <section>
      <EventList />
      <Link href={Routes.CREATE_EVENT}>
        <div>
          <AddEventButton />
        </div>
      </Link>
    </section>
  </LayoutInternal>
)

/// Can I really just pass  <AddEventButton /> inside the a tag and get with it?
/// https://nextjs.org/docs/api-reference/next/link#if-the-child-is-a-functional-component
/// https://stackoverflow.com/questions/66421459/warning-function-components-cannot-be-given-refs
// https://github.com/vercel/next.js/issues/7915

// export const DashboardPage: NextPage = () => (
//   <LayoutInternal>
//     <Head
//     // This tag "re-assigns" the one in the __app or document file
//     >
//       <title>Event dashboard</title>
//     </Head>
//     <h1>This is Dashboard Page on LayoutInternal!</h1>
//     <section>
//       <EventList />
//       <Link href={Routes.CREATE_EVENT} passHref>
//         <AddEventButton />
//       </Link>
//     </section>
//   </LayoutInternal>
// )
