import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  theme as defaultTheme,
  darkTheme,
  funTheme,
  redTheme,
} from '../../stitches.config'

/*
  Thanks to Okiki for the inspo!
  https://blog.okikio.dev/psa-add-dark-mode-to-your-sites-or-at-least-let-the-browsers-do-it-for-you

  This example uses Okiki's method of combining matchMedia, 
  localStorage and Stitches to allow you to toggle 
  through multiple colour modes
  
  1. Create your theme(s) and import from `./stitches.config'
  2. Add to 'whitelist' available themes (below)
  3. Wrap your app in <ColorModeProvider>
  4. Use ColorModeContext.Consumer to access the toggle function / name
*/

export const ColorModeContext = createContext(null)

/* 
  Any available themes. The value of each key 
  returns the className from stitches' createTheme()
*/
const available_themes: Record<string, string> = {
  dark: darkTheme.className,
  fun: funTheme.className,
  // red: redTheme.className,
  light: defaultTheme.toString(), // how to be consistent?
}

// this should correspond to one of the keys in available_themes
const defaultMode = 'light'

const getSavedColorModePreference = () => {
  try {
    const savedMode = window.localStorage.getItem('color-mode')
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (typeof savedMode === 'string') return savedMode
  } catch (e) {
    // When Chrome in incognito, localStorage cannot be accessed
    console.warn(e)
    return defaultMode
  }

  // If they are using a browser/OS that doesn't support
  // color themes, let's not do anything.
  return defaultMode
}

const saveColorMode = (newMode: string) => {
  try {
    // If the user has explicitly chosen a mode, store it
    if (typeof newMode === 'string')
      window.localStorage.setItem('color-mode', newMode)
  } catch (e) {
    console.warn(e)
  }
}

const mediaTheme = () => {
  // If they haven't been explicitly set, let's check the media query
  const mql = matchMedia('(prefers-color-scheme: dark)')
  const hasMediaQueryPreference = typeof mql.matches === 'boolean'
  if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light'
}

const html = document.documentElement

// Set color mode in localStorage, as well as in the html tag
const applyColorMode = (newMode: string) => {
  html.className = available_themes[newMode]
  // html.setAttribute("data-color-mode", newMode);
  console.log('Current mode:', newMode)
}

const useColorMode = () => {
  const [colorMode, setColorMode] = useState('')

  // Based on [joshwcomeau.com/gatsby/dark-mode/]

  // Get mode from html tag, if it has a mode or get it from localStorage
  const checkCurrentMode = () => {
    // let themeAttr = html.getAttribute("data-color-mode");
    // if (themeAttr) return themeAttr;

    return getSavedColorModePreference()
  }

  // Set initial state
  useEffect(() => {
    setColorMode(checkCurrentMode())
  }, [])

  let savedColorMode = getSavedColorModePreference()
  if (savedColorMode == null) {
    savedColorMode = mediaTheme()
  }
  // html.setAttribute("data-color-mode", savedColorMode);
  html.classList.add(available_themes[savedColorMode])

  // If a user changes operating system mode, update site mode as well,
  // but don't save the change in local storage. The only two options here are dark or light.
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'dark' : 'light')
    })

  const cycleToggleMode = () => {
    const keys = Object.keys(available_themes)
    let currentMode = checkCurrentMode()
    let index = keys.indexOf(currentMode)
    if (index === keys.length - 1) {
      index = 0
    } else if (index >= 0) {
      index = index + 1
    }
    const newMode = keys[index]
    applyColorMode(newMode)
    saveColorMode(newMode)
    setColorMode(newMode)
  }

  return [colorMode, cycleToggleMode]
}

const ColorModeProvider = ({ children }) => {
  const [colorMode, cycleToggleMode] = useColorMode()
  return (
    <ColorModeContext.Provider
      value={{
        colorMode: colorMode,
        cycleToggleMode: cycleToggleMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}

ColorModeProvider.propTypes = {
  children: PropTypes.node,
}

export default ColorModeProvider
