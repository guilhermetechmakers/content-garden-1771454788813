import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AppTopNavProps {
  sidebarCollapsed: boolean
  title?: string
}

export function AppTopNav({ sidebarCollapsed, title }: AppTopNavProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-14 items-center justify-between border-b border-workspace-outline bg-workspace-panel/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-workspace-panel/80',
        sidebarCollapsed ? 'pl-[88px]' : 'pl-[232px]'
      )}
    >
      <h1 className="text-section font-semibold text-foreground">
        {title ?? 'Dashboard'}
      </h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <Link to="/profile">
          <Button variant="secondary" size="sm">
            Profile
          </Button>
        </Link>
      </div>
    </header>
  )
}
