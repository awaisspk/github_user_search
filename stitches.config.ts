import { createStitches, createTheme } from '@stitches/react'

export const { styled, globalCss, theme } = createStitches({
  theme: {
    fonts: {
      default: 'BlinkMacSystemFont',
    },
    colors: {
      hiContrast: 'black',
      loContrast: 'white',
    },
  },
})

export const darkTheme = createTheme({
  colors: {
    hiContrast: 'white',
    loContrast: 'black',
  },
})

export const funTheme = createTheme({
  colors: {
    hiContrast: 'blue',
    loContrast: 'pink',
  },
})

export const redTheme = createTheme({
  colors: {
    hiContrast: 'Cornsilk',
    loContrast: 'Maroon',
  },
})
