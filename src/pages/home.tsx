import { Link } from 'react-router-dom'
import { Link2, Mic, Image, MessageSquare, ArrowRight, Layout, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const quickActions = [
  { label: 'Paste link', icon: Link2 },
  { label: 'Voice note', icon: Mic },
  { label: 'Screenshot', icon: Image },
  { label: 'Quick thought', icon: MessageSquare },
] as const

export function HomePage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <section>
        <h2 className="text-section font-semibold text-foreground mb-4">Quick Capture</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-workspace-outline bg-workspace-card overflow-hidden focus-within:ring-2 focus-within:ring-accent-green/50 focus-within:border-accent-green/50 transition-all">
            <Input
              placeholder="Paste a link, type a thought, or describe what you're capturing…"
              className="h-12 flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none pl-4"
            />
            <div className="flex items-center gap-1 pr-2 shrink-0">
              {quickActions.map(({ label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-lg"
                  title={label}
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 sm:items-center">
            {quickActions.map(({ label, icon: Icon }) => (
              <Button key={label} variant="secondary" size="default" className="gap-2">
                <Icon className="h-4 w-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-section font-semibold text-foreground">Recent Seeds</h2>
          <Link to="/garden">
            <Button variant="ghost" size="sm" className="gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-1 scrollbar-thin">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="min-w-[280px] shrink-0 card-interactive">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium truncate">
                  Seed idea {i} — topic placeholder
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Short snippet or extracted bullets from the seed content…
                </p>
                <div className="mt-3 flex gap-2">
                  <Button variant="ghost" size="sm">Keep</Button>
                  <Button variant="ghost" size="sm">Open</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/canvases">
          <Card interactive className="h-full border-accent-purple/30 hover:border-accent-purple/60 transition-colors">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-accent-purple/20 p-2">
                <Layout className="h-6 w-6 text-accent-purple" />
              </div>
              <div>
                <CardTitle className="text-lg">Continue Canvas</CardTitle>
                <p className="text-sm text-muted-foreground">Pick up where you left off</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Last active: —</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/drops">
          <Card interactive className="h-full border-accent-green/30 hover:border-accent-green/60 transition-colors">
            <CardHeader className="flex flex-row items-center gap-3">
              <div className="rounded-lg bg-accent-green/20 p-2">
                <Package className="h-6 w-6 text-accent-green" />
              </div>
              <div>
                <CardTitle className="text-lg">Prepare Drop</CardTitle>
                <p className="text-sm text-muted-foreground">Create a post bundle from a Canvas</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Generate 3–10 posts for the week</p>
            </CardContent>
          </Card>
        </Link>
      </section>

      <section>
        <Card className="border-workspace-outline bg-workspace-card">
          <CardHeader>
            <CardTitle className="text-section">Ritual reminder</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Capture something new today, then triage a cluster in Garden to keep your flow going.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
