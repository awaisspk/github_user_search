import React from 'react'
import { styled } from '../../stitches.config'
const Box = styled('div', {})
const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
  lineHeight: 1.6,
})

const Button = styled('button', {
  border: '1px solid $hiContrast',
  backgroundColor: '$loContrast',
  color: '$hiContrast',
  padding: 8,
  borderRadius: 8,
  '&:hover': {
    backgroundColor: '$hiContrast',
    color: '$loContrast',
  },
})

const Features = () => (
  <ul>
    <Text as="li">
      ✅ Exportable as a design system color provider (including toggle
      functions and getColorMode)
    </Text>
    <Text as="li">
      ✅ Applies stitches' theme classNames to the html element
    </Text>
    <Text as="li">✅ Can toggle between more than 2 themes</Text>
    <Text as="li">✅ Checks `prefers-color-scheme`</Text>
    <Text as="li">✅ LocalStorage to set preferences</Text>
    <Text as="li">
      ✅ Will update if user changes their Operating System's color mode, but
      won't save.
    </Text>
  </ul>
)

export { Box, Text, Button, Features }
