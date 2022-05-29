import type { NextPage } from 'next'
import type { FormEvent } from 'react'

import { Input } from '~/features/ui/components/Input'
import { LayoutExternal } from '~/features/ui/components/LayoutExternal'

export const SignUpPage: NextPage = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sent the SIGN UP  form')
  }

  return (
    <LayoutExternal>
      <h1>Get started absolutely free.</h1>
      <p>Enter your details below.</p>
      <form onSubmit={handleSubmit}>
        <Input label="First name" type="text" name="firstName" />
        <Input label="Last name" type="text" name="lastName" />
        <Input label="Email" type="email" name="email" />
        <Input label="Password" type="password" name="password" />
        <Input label="Repeat password" type="password" name="password" />
        <button type="submit">SIGN UP</button>
      </form>
    </LayoutExternal>
  )
}
