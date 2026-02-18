import { User, CreditCard, Link2, Shield, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ProfilePage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl">
      <h1 className="text-title font-bold text-foreground">Profile & Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Account
          </CardTitle>
          <CardDescription>Your account info and email.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" className="bg-workspace-elevated" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" className="bg-workspace-elevated" />
          </div>
          <Button>Save</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Billing & Subscription
          </CardTitle>
          <CardDescription>Manage plan and payment.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary">Manage billing</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5" />
            Connected integrations
          </CardTitle>
          <CardDescription>OAuth connectors and schedulers.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">Connect Drive, social auth, and schedulers.</p>
          <Button variant="secondary">Add integration</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security
          </CardTitle>
          <CardDescription>2FA and password.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary">Security settings</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Workspace & AI defaults
          </CardTitle>
          <CardDescription>Capture and AI preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="secondary">Workspace settings</Button>
        </CardContent>
      </Card>
    </div>
  )
}
