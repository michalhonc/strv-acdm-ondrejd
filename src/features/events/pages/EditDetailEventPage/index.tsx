import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { Attendees } from '../../components/Attendees'

export const EditDetailEventPage: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sent the EDIT form')
  }

  return (
    <LayoutInternal>
      <Head>
        <title>Edit event</title>
      </Head>
      <h1>Detail event: #this-is-just-a-random-slug</h1>
      <button>DELETE EVENT</button>
      <form onSubmit={handleSubmit} id="complicatedForm">
        <Input label="Title" type="text" name="title" />
        <Input label="Description" type="text" name="description" />
        <Input label="Date" type="date" name="time" />
        <Input label="Time" type="time" name="time" />
        <Input label="Capacity" type="number" name="capacity" />
        <button type="submit" form="complicatedForm" />
      </form>

      {/* <button form="complicatedForm" type="submit">
        SIGN IN
      </button> */}
      <Attendees />
    </LayoutInternal>
  )
}
