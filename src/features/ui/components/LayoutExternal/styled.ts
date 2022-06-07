import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  // Keeps the aside panel on whole screen
  min-height: 100%;
  text-align: start;
`

export const Main = styled.main`
  // Flex will cut the content inside it to same size items, block will
  // preserve the size of inner items
  display: flex;
  flex-direction: column;
  // Use flex-grow to make the content fill the whole screen
  flex-grow: 1;
  position: relative;

  //Centering content

  /* justify-content: center; */
  //GOAT centering trick with margin: 0 auto
  /* margin: auto 0; */
  align-items: center;

  /*
    We could remove &::before and &::after pseudo-elements and use just
    justify-content: center; instead. However, with these pseudo-elements,
    we get more control over the placement and push it a bit upwards
    to make it more centered optically.
  */
  &::before,
  &::after {
    content: '';
    display: block;
    flex: 3;
  }

  &::after {
    flex: 4;
  }
`
