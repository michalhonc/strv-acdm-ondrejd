import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

export const LoginPage: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sent the LOGIN form')
  }

  return (
    <LayoutExternal>
      <Head>
        <title>Log in to Eventio</title>
      </Head>
      <h1>Sign in to Eventio.</h1>
      <p>Enter your details below.</p>
      <form onSubmit={handleSubmit} id="complicatedForm">
        <Input label="email" type="email" name="email" />
        <Input label="password" type="password" name="password" />
      </form>
      {/* Button outside the form element it handy when handling complicated layout */}
      <button form="complicatedForm" type="submit">
        SIGN IN
      </button>
    </LayoutExternal>
  )
}
