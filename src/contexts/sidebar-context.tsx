import { createContext, useContext, useState, useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'sidebar-collapsed'

function getSnapshot() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'false') as boolean
  } catch {
    return false
  }
}

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

type SidebarContextValue = {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

const SidebarContext = createContext<SidebarContextValue | null>(null)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsedState] = useState(getSnapshot)
  const setCollapsed = useCallback((value: boolean) => {
    setCollapsedState(value)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  }, [])
  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const ctx = useContext(SidebarContext)
  if (!ctx) throw new Error('useSidebar must be used within SidebarProvider')
  return ctx
}

export function useSidebarCollapsed() {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
