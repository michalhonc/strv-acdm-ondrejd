export const ScreenSize = {
  medium: 768,
  large: 1200,
}

// Dynamic media queries implemented with the same logic as font-size in the GlobalStyle
export const mq = {
  smallOnly: `@media(max-width: ${ScreenSize.medium / 16}em)`,
  medium: `@media(min-width: ${ScreenSize.medium / 16}em)`,
  large: `@media(min-width: ${ScreenSize.large / 16}em)`,
}
