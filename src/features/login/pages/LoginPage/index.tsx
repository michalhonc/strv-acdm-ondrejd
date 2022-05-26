import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

export const LoginPage: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('sent the form')
  }

  return (
    <LayoutExternal>
      <h1>This is Sign In/Login Page on LayoutExternal!</h1>
      <p>Enter your details below.</p>
      <form onSubmit={onSubmit} id="complicatedForm">
        <Input label="email" type="email" name="email" />
        <Input label="password" type="password" name="password" />
      </form>
      {/* Button outside the form element it handy when handling complicated layout */}
      <button form="complicatedForm" type="submit">
        Sign In
      </button>
    </LayoutExternal>
  )
}
