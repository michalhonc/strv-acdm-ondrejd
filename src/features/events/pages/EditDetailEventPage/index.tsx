import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutInternal } from '~/features/ui/components/LayoutInternal'

import { AddEventButton } from '../../components/AddEventButton'
import { Attendees } from '../../components/Attendees'

export const EditDetailEventPage: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sent the EDIT form')
  }

  return (
    <LayoutInternal>
      <h1>Detail event: #this-is-just-a-random-slug</h1>
      <button>DELETE EVENT</button>
      <form onSubmit={handleSubmit} id="complicatedForm">
        <Input label="Title" type="text" name="title" />
        <Input label="Description" type="text" name="description" />
        <Input label="Date" type="date" name="time" />
        <Input label="Time" type="time" name="time" />
        <Input label="Capacity" type="number" name="capacity" />
      </form>

      {/* <button form="complicatedForm" type="submit">
        SIGN IN
      </button> */}
      <AddEventButton type="submit" form="complicatedForm" />
      <Attendees />
    </LayoutInternal>
  )
}