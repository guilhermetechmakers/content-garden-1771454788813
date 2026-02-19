import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Sprout,
  Layout,
  Package,
  Calendar,
  FileText,
  Library,
  Search,
  User,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useSidebar } from '@/contexts/sidebar-context'

const navItems = [
  { to: '/', label: 'Home', icon: LayoutDashboard },
  { to: '/garden', label: 'Garden', icon: Sprout },
  { to: '/canvases', label: 'Canvases', icon: Layout },
  { to: '/drops', label: 'Drops', icon: Package },
  { to: '/runway', label: 'Runway', icon: Calendar },
  { to: '/snippets', label: 'Snippets', icon: FileText },
  { to: '/library', label: 'Library', icon: Library },
  { to: '/search', label: 'Describe-to-Find', icon: Search },
] as const

export function AppSidebar() {
  const { collapsed, setCollapsed } = useSidebar()

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-workspace-outline bg-workspace-panel transition-[width] duration-300 ease-out',
        collapsed ? 'w-[72px]' : 'w-56'
      )}
      aria-label="Main navigation"
    >
      <div className="flex h-14 items-center border-b border-workspace-outline px-3">
        {!collapsed && (
          <span className="font-bold text-foreground truncate">Content Garden</span>
        )}
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200',
                isActive
                  ? 'bg-workspace-elevated text-accent-green border border-workspace-outline'
                  : 'text-muted-foreground hover:bg-workspace-elevated hover:text-foreground'
              )
            }
          >
            <Icon className="h-5 w-5 shrink-0" aria-hidden />
            {!collapsed && <span className="truncate">{label}</span>}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-workspace-outline p-2">
        <NavLink
          to="/profile"
          title={collapsed ? 'Profile' : undefined}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200',
              isActive
                ? 'bg-workspace-elevated text-accent-green'
                : 'text-muted-foreground hover:bg-workspace-elevated hover:text-foreground'
            )
          }
        >
          <User className="h-5 w-5 shrink-0" aria-hidden />
          {!collapsed && <span className="truncate">Profile</span>}
        </NavLink>
        <Button
          variant="ghost"
          size="icon"
          className="mt-2 w-full justify-center"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
    </aside>
  )
}
