import type { FC, InputHTMLAttributes } from 'react'
import { useState } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
}

export const Input: FC<Props> = ({ label, name, type, ...rest }) => {
  const [isPasswordShown, togglePassword] = useState(false)
  const inputType = isPasswordShown ? 'text' : type

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={inputType} name={name} {...rest} />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => togglePassword(!isPasswordShown)}
          aria-label="Display password"
        >
          O.o
        </button>
      )}
    </div>
  )
}
