import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

import * as styled from './styled'

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
    <styled.InputWrapper>
      <styled.Label key={key} hasError={hasError}>
        <styled.StyledInput
          placeholder={label}
          name={name}
          type={inputType}
          {...rest}
        />
        <styled.LabelText>{label}</styled.LabelText>
        {type === 'password' && (
          <styled.PasswordToggle
            type="button"
            onClick={() => togglePassword(!isPasswordShown)}
            aria-label="Display password"
          >
            <styled.StyledPasswordIcon isActive={isPasswordShown} />
          </styled.PasswordToggle>
        )}
      </styled.Label>
    </styled.InputWrapper>
  )
}
