import { Users, Shield, CreditCard, BarChart3, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function AdminDashboardPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-title font-bold text-foreground">Admin Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'User management', icon: Users, href: '#' },
          { label: 'Moderation queue', icon: Shield, href: '#' },
          { label: 'Billing & usage', icon: CreditCard, href: '#' },
          { label: 'Product analytics', icon: BarChart3, href: '#' },
          { label: 'System logs', icon: FileText, href: '#' },
        ].map(({ label, icon: Icon }) => (
          <Card key={label} interactive>
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-workspace-elevated p-2">
                <Icon className="h-5 w-5 text-accent-green" />
              </div>
              <CardTitle className="text-base font-medium">{label}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm">Open</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-section">Product analytics</CardTitle>
          <p className="text-sm text-muted-foreground">DAU, Drops/week, retention, AI usage</p>
        </CardHeader>
        <CardContent>
          <div className="h-64 rounded-lg bg-workspace-elevated flex items-center justify-center text-muted-foreground">
            Chart placeholder
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
