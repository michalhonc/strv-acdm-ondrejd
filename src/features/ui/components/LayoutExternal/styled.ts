import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // Keeps the aside panel on whole screen
  min-height: 100%;
`

export const Main = styled.main`
  // Flex will cut the content inside it to same size items, block will
  // preserve the size of inner items
  display: block;
  padding: 10rem 0;
  gap: 1rem;
  // Center objects like a GOAT with margin: 0 auto
  margin: 0 auto;
`
