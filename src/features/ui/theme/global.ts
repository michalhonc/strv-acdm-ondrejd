import { createGlobalStyle } from 'styled-components'

// import { colors } from './colors'
import { typography } from './typography'

export const GlobalStyle = createGlobalStyle`


*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
}

html,
body, #__next {
    padding: 0;
    height: 100%;
}

// Base font size for every website is 16px. To help us with better translating
// the Figma designs into into the web world with REM units we set font-size to 10px.
// Therefore, the 500px design in the Figma translates to the 50 rem units (500/10)
// If we hardcoded 10px below, designs would appear wrong for the people who enlarged,
// text in their web browser. Therefore we use % instead 10/16 = 0.625%
html {
font-size: 62.5%;
}


body {
    font-weight: 400;    
    font-family: ${typography.font.base};
    font-size: 1.6rem;
    font: 400 1.6rem ${typography.font.base};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
}
`
