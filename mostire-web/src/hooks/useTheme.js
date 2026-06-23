import { useSyncExternalStore, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'mostire-theme'

function readTheme() {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
}

let currentTheme = readTheme()
const listeners = new Set()

function setThemeGlobal(next) {
  currentTheme = next
  try {
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem(STORAGE_KEY, next)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', next === 'dark' ? '#0a0d12' : '#f6f8fb')
  } catch {
    // Ignore storage or document access errors in restricted contexts.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, () => currentTheme, () => 'light')

  const setTheme = useCallback((next) => setThemeGlobal(next), [])
  const toggle = useCallback(() => setThemeGlobal(currentTheme === 'dark' ? 'light' : 'dark'), [])

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === STORAGE_KEY) setThemeGlobal(event.newValue === 'dark' ? 'dark' : 'light')
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return { theme, toggle, setTheme }
}
