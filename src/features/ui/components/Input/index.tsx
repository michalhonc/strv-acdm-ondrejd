import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import { LabelText, StyledInput, Label, InputWrapper } from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
  hasError?: boolean
}

export const Input: FC<Props> = ({
  name,
  label,
  type,
  error,
  hasError,
  ...rest
}) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <InputWrapper>
      {/* <Label key={error} hasError={Boolean(true)}> */}
      <Label key={error} hasError={hasError}>
        <StyledInput
          placeholder={label}
          name={name}
          type={inputType}
          {...rest}
        />
        <LabelText>{label}</LabelText>
        {type === 'password' && (
          <button
            type="button"
            onClick={() => togglePassword(!isPasswordShown)}
            aria-label="Display password"
          >
            O.o
          </button>
        )}
      </Label>
    </InputWrapper>
  )
}
