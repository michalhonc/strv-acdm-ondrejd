import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '~/features/ui/components/Button'
import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { SubmitButton } from './styled'

export const LoginPage: NextPage = () => {
  const [error, setError] = useState('')

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
      {/* <button form="complicatedForm" type="submit">
        SIGN IN
      </button> */}
      {error && <p>{error}</p>}
      <Button
        type="button"
        form="complicatedForm"
        size="small"
        accent="destructive"
        onClick={() => setError(Date.now().toString())}
      >
        Trigger error
      </Button>
      <SubmitButton>SIGN IN</SubmitButton>
    </LayoutExternal>
  )
}
