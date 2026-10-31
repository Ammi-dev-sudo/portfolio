import { createContext } from 'react'

export const STORAGE_KEY = 'portfolio-theme'
export const MODES = ['light', 'dark', 'system']

export const ThemeContext = createContext(null)
