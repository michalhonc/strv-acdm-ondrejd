import styled from 'styled-components'

import { AccessibleHidden } from '~/features/ui/components/AccessibleHidden'

export const H1 = styled.h1`
  ${AccessibleHidden}
`

// Taking styles of H1 to and applying them to H2 similarly like we did
// with the UI button component in the Login page
export const H2 = styled(H1).attrs({ as: 'h2' })``
