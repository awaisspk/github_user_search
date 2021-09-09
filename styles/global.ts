import { globalCss } from '@stitchesConfig'

const globalStyles = globalCss({
  '@font-face': {
    fontFamily: "'Inter'",
    fontStyle: 'normal',
    fontWeight: '100 900',
    fontDisplay: 'optional',
    src: "url(/fonts/inter-var-latin.woff2) format('woff2')",
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,   U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,    U+FEFF, U+FFFD',
  },

  '*, ::before, ::after': { boxSizing: 'border-box' },
  html: {
    lineHeight: '1.15',
    WebkitTextSizeAdjust: '100%',
    MozTabSize: '4',
    //@ts-ignore
    tabSize: '4',
    font: "112.5%/1.45 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },

  '@md': {
    html: {
      font: "100%/1.2888 'Inter', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    },
  },

  body: {
    margin: '0',
    color: '$typefacePri',
    fontFamily: '$body',
    backgroundColor: '$body',
    wordWrap: 'break-word',
  },
  img: {
    maxWidth: '100%',
  },

  hr: { height: '0', color: 'inherit' },
  'abbr[title]': { textDecoration: 'underline dotted' },
  'b, strong': { fontWeight: 'bolder' },
  'code, kbd, samp, pre': {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
    fontSize: '1em',
  },
  small: { fontSize: '80%' },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: { bottom: '-0.25em' },
  sup: { top: '-0.5em' },
  table: { textIndent: '0', borderColor: 'inherit' },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0',
  },
  'button, select': { textTransform: 'none' },
  "button, [type='button'], [type='reset'], [type='submit']": {
    WebkitAppearance: 'button',
  },
  '::-moz-focus-inner': { borderStyle: 'none', padding: '0' },
  ':-moz-focusring': { outline: '1px dotted ButtonText' },
  ':-moz-ui-invalid': { boxShadow: 'none' },
  legend: { padding: '0' },
  progress: { verticalAlign: 'baseline' },
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },
  //@ts-ignore
  "[type='search']": { WebkitAppearance: 'textfield', outlineOffset: '-2px' },
  '::-webkit-search-decoration': { WebkitAppearance: 'none' },
  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },
  summary: { display: 'list-item' },
})

export { globalStyles }
