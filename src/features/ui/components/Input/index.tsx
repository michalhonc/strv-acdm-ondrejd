import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import {
  Label,
  StyledInput,
  LabelText,
  PasswordToggle,
  StyledPasswordIcon,
} from './styled'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  key?: string
  hasError?: boolean
}

export const Input: FC<Props> = ({
  name,
  label,
  type,
  key,
  hasError,
  ...rest
}) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <Label key={key} hasError={hasError}>
      <StyledInput placeholder={label} name={name} type={inputType} {...rest} />
      <LabelText>{label}</LabelText>
      {type === 'password' && (
        <PasswordToggle
          type="button"
          onClick={() => togglePassword(!isPasswordShown)}
          aria-label="Display password"
        >
          <StyledPasswordIcon isActive={isPasswordShown} />
        </PasswordToggle>
      )}
    </Label>
  )
}
