import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { AddEventButton } from '../../components/AddEventButton'
import { Attendees } from '../../components/Attendees'
import { Card } from '../../components/Card'

export const DetailDashboardPage: NextPage = () => {
  return (
    <LayoutInternal>
      <Head>
        <title>Event detail</title>
        {/* <script type="application/ld+json">
          {`
          
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": ${title},
      "startDate": ${dateTime},
      "endDate": "2025-07-21T23:00-05:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Snickerpark Stadium",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "100 West Snickerpark Dr",
          "addressLocality": "Snickertown",
          "postalCode": "19019",
          "addressRegion": "PA",
          "addressCountry": "US"
        }
      },
      "description": ${description},
      "remainingAttendeeCapacity": ${maxCapacity - currentCapacity}
      "organizer": {
        "@type": "Organization",
        "name": ${author},
        "url": "https://kiraandmorrisonmusic.com"
      }
    }
  `}
        </script> */}
      </Head>
      <nav>
        <Link href={Routes.DASHBOARD}>
          <a type="button">Back to events</a>
        </Link>
      </nav>
      <h1>Detail event: #this-is-just-a-random-slug</h1>
      <Card
        dateTime="2008-02-14 20:00"
        title="Valentines day!!!"
        author="Ondrej Dr"
        description="If you have ever felt confused then you are not alone. I will show you the way."
        currentCapacity={11}
        maxCapacity={10}
      />
      <Attendees />
      <AddEventButton />
    </LayoutInternal>
  )
}
