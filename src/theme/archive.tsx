import React, { useState, useEffect } from 'react'
import {
  theme as defaultTheme,
  darkTheme,
  funTheme,
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

const ColorMode = () => {
  // Toggle through any available themes
  const [mode, setMode] = useState('')
  const available_themes: Record<string, string> = {
    dark: darkTheme.className,
    fun: funTheme.className,
    light: defaultTheme.toString(), // how to be consistent?
  }

  const html = document.querySelector('html')

  const getSavedColorModePreference = () => {
    const savedMode = window.localStorage.getItem('color-mode')
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (typeof savedMode === 'string') return savedMode

    // If they are using a browser/OS that doesn't support
    // color themes, let's not do anything.
    return null
  }

  useEffect(() => {
    setMode(getSavedColorModePreference())
  }, [])

  const saveColorMode = (newMode: string) => {
    // If the user has explicitly chosen one, store it
    if (typeof newMode === 'string')
      window.localStorage.setItem('color-mode', newMode)
  }

  // Based on [joshwcomeau.com/gatsby/dark-mode/]

  const mediaTheme = () => {
    // If they haven't been explicitly set, let's check the media query
    const mql = matchMedia('(prefers-color-scheme: dark)')
    const hasMediaQueryPreference = typeof mql.matches === 'boolean'
    if (hasMediaQueryPreference) return mql.matches ? 'dark' : 'light'
  }

  // Get mode from html tag, if it has a mode or get it from localStorage
  const checkCurrentMode = () => {
    let themeAttr = html.getAttribute('data-color-mode')
    console.log('themeAttr', themeAttr)

    if (themeAttr) return themeAttr

    return getSavedColorModePreference()
  }

  // Set Color Mode in localStorage, as well as in the html tag
  const applyColorMode = (newMode: string) => {
    html.className = available_themes[newMode]
    html.setAttribute('data-color-mode', newMode)
  }

  let savedColorMode = getSavedColorModePreference()
  if (savedColorMode == null) {
    savedColorMode = mediaTheme()
  }
  html.setAttribute('data-color-mode', savedColorMode)
  html.classList.add(available_themes[savedColorMode])

  // If a user changes overall system mode, update site mode as well,
  // but don't save the change in local storage
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
      applyColorMode(e.matches ? 'dark' : 'light')
    })

  const cycleToggleModes = () => {
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
    setMode(newMode)
  }

  return <button onClick={cycleToggleModes}>{mode}</button>
}

export default ColorMode
