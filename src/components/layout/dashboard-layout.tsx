import { Outlet } from 'react-router-dom'
import { AppSidebar } from '@/components/layout/app-sidebar'
import { AppTopNav } from '@/components/layout/app-top-nav'
import { useSidebar } from '@/contexts/sidebar-context'

export function DashboardLayout() {
  const { collapsed: sidebarCollapsed } = useSidebar()

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <div
        className={`transition-[margin-left] duration-300 ${
          sidebarCollapsed ? 'ml-[72px]' : 'ml-56'
        }`}
      >
        <AppTopNav
          sidebarCollapsed={sidebarCollapsed}
          title={undefined}
        />
        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
