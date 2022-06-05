import type { NextPage } from 'next'
import Head from 'next/head'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '~/features/ui/components/Button'
import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

import { Form, H1, P, SubmitButton } from './styled'

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
      <H1>Sign in to Eventio.</H1>
      <P>Enter your details below.</P>
      <Form onSubmit={handleSubmit} id="complicatedForm">
        {error && <p>{error}</p>}
        <Input
          hasError={Boolean(error)} // the same as "error ? true : false"
          key={error}
          label="Email"
          type="email"
          name="email"
        />
        <Input
          hasError={Boolean(error)}
          key={error + 'just making sure error is unique here'}
          label="Password"
          type="password"
          name="password"
        />
      </Form>
      <SubmitButton form="complicatedForm">SIGN IN</SubmitButton>
      <Button
        type="button"
        size="small"
        accent="destructive"
        onClick={() => setError(Date.now().toString())}
      >
        Trigger error
      </Button>

      {/* Button outside the form element it handy when handling complicated layout */}
    </LayoutExternal>
  )
}
