import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

export const CreateEventPage: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sent the SIGN UP  form')
  }
  return (
    <LayoutInternal>
      <Head>
        <title>Create new event</title>
      </Head>
      <h1>Create new event</h1>
      <p>Enter details below.</p>
      <form onSubmit={handleSubmit}>
        <Input label="Title" type="text" name="title" />
        <Input label="Description" type="text" name="description" />
        <Input label="Date" type="date" name="time" />
        <Input label="Time" type="time" name="time" />
        <Input label="Capacity" type="number" name="capacity" />
        <button type="submit">CREATE NEW EVENT</button>
      </form>
    </LayoutInternal>
  )
}
