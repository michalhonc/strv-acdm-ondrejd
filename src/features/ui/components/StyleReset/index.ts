import { css } from 'styled-components'

export const StyleReset = css`
  // all: unset is not recommended to use. In the Global it would rewrite
  // the box-sizing property
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  appearance: none;
  border-radius: 0;
  background: none;
`
