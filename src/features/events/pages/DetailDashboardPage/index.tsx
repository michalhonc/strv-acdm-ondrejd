import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Routes } from '~/features/core/constants/routes'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { Attendees } from '../../components/Attendees'
import { Card } from '../../components/Card'

export const DetailDashboardPage: NextPage = () => {
  return (
    <LayoutInternal>
      <Head>
        <title>Event detail</title>
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "The Adventures of Kira and Morrison",
      "startDate": "2025-07-21T19:00-05:00",
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
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "The Adventures of Kira and Morrison is coming to Snickertown in a can't miss performance.",
      "offers": {
        "@type": "Offer",
        "url": "https://www.example.com/event_offer/12345_201803180430",
        "price": "30",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-05-21T12:00"
      },
      "performer": {
        "@type": "PerformingGroup",
        "name": "Kira and Morrison"
      },
      "organizer": {
        "@type": "Organization",
        "name": "Kira and Morrison Music",
        "url": "https://kiraandmorrisonmusic.com"
      }
    }
  `}
        </script>
      </Head>
      <nav>
        <Link href={Routes.DASHBOARD}>
          <button type="button">Back to events</button>
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
    </LayoutInternal>
  )
}
