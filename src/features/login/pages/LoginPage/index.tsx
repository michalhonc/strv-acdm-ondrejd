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
        {error && <p>{error}</p>}
        <Input
          hasError={error ? true : false}
          label="email"
          type="email"
          name="email"
        />
        <Input label="password" type="password" name="password" />
      </form>

      <Button
        type="button"
        size="small"
        accent="destructive"
        onClick={() => setError(Date.now().toString())}
      >
        Trigger error
      </Button>

      {/* Button outside the form element it handy when handling complicated layout */}
      <SubmitButton form="complicatedForm">SIGN IN</SubmitButton>
    </LayoutExternal>
  )
}
