import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import { LabelText, StyledInput, Label, InputWrapper } from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  hasError?: boolean
  error?: string
}

export const Input: FC<Props> = ({
  name,
  label,
  type,
  hasError,
  error,
  ...rest
}) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <InputWrapper>
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
