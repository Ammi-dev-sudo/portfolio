import { useEffect, useMemo, useState } from 'react'
import { MODES, STORAGE_KEY, ThemeContext } from './themeContext'

function getSystemTheme() {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function getStoredMode() {
  if (typeof window === 'undefined') return 'system'

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return MODES.includes(stored) ? stored : 'system'
  } catch {
    return 'system'
  }
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(getStoredMode)
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)

  const resolvedTheme = mode === 'system' ? systemTheme : mode

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => setSystemTheme(event.matches ? 'light' : 'dark')

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = resolvedTheme
    root.style.colorScheme = resolvedTheme

    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      /* le stockage peut être indisponible (navigation privée) */
    }

    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', resolvedTheme === 'light' ? '#f5f3ec' : '#07080a')
    }
  }, [mode, resolvedTheme])

  const value = useMemo(
    () => ({
      mode,
      resolvedTheme,
      setMode: (nextMode) => {
        if (MODES.includes(nextMode)) setMode(nextMode)
      },
    }),
    [mode, resolvedTheme]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
