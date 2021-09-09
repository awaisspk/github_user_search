import { createStitches } from '@stitches/react'

const { styled, css, createTheme, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      typefacePri: '#2B3442',
      main: '#313030',
      body: '#F6F8FF',
      content: '#FEFEFE',
      btn: ' #0079FF',
      btnHover: '#60ABFF',
    },
    shadows: {
      shadow1: '0px 4px 4px 0px rgba(0,0,0,0.25)',
      shadow2: '0px 16px 30px -10px rgba(0,0,0,0.2)',
    },

    fonts: {
      body: "'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      Heading: '$body',
      mono: 'Fira Code, monospace',
    },

    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      round: '50%',
      full: '9999px',
    },

    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },

    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
  },

  media: {
    sm: `(min-width: 30em)`, // 480px
    md: `(min-width: 48em)`, //768px
    lg: `(min-width: 62em)`, //992px
    xl: `(min-width: 80em)`, //1280px
    '2xl': `(min-width: 96em)`, //1536px
    dark: `(prefers-color-scheme: dark)`,
    light: `(prefers-color-scheme: light)`,
  },

  utils: {
    linearGradient: (value: number | string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
})

const DarkTheme = createTheme('dark', {
  colors: {
    main: '#4B6A9B',
    typefacePri: '#4B6A9B',
    body: '#141c2f',
    content: '#1f2a48',
    btn: ' #0079FF',
    btnHover: '#60ABFF',
  },
})

export { styled, css, createTheme, globalCss, DarkTheme, getCssText }
