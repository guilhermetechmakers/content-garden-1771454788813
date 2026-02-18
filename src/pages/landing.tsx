import { Link } from 'react-router-dom'
import { Sprout, Zap, Layout, Package, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-workspace-main via-workspace-panel to-black" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent-purple/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent-green/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <header className="border-b border-workspace-outline bg-workspace-panel/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8 text-accent-green" />
            <span className="font-bold text-xl">Content Garden</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button>Get started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fade-in-up">
              <span className="bg-gradient-to-r from-accent-green to-accent-purple bg-clip-text text-transparent">
                Grow your content
              </span>
              <br />
              <span className="text-foreground">like a living garden</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Capture Seeds, curate in your Garden, compose on Canvases with AI, and ship weekly Drops through your Runway. Creator-first workspace for ritual flow.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/signup">
                <Button size="lg" className="gap-2">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="secondary">Sign in</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature highlights - Bento-style */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-title font-bold text-center mb-12">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Zap, title: 'Capture', desc: 'Paste links, voice notes, screenshots, quick thoughts into one bar.' },
                { icon: Sprout, title: 'Curate', desc: 'Soft-clustered Garden with Keep, Merge, Ignore triage.' },
                { icon: Layout, title: 'Compose', desc: 'Visual Canvases, drag Seeds, AI grounded in your materials.' },
                { icon: Package, title: 'Ship', desc: 'Drops (3–10 posts) and Runway slots for manual scheduling.' },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className={cn(
                    'rounded-card-lg border border-workspace-outline bg-workspace-card p-6 card-interactive',
                    'animate-fade-in-up'
                  )}
                  style={{ animationDelay: `${0.1 * (i + 3)}s` }}
                >
                  <Icon className="h-8 w-8 text-accent-green mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 border-t border-workspace-outline">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-title font-bold mb-4">Ready to grow?</h2>
            <p className="text-muted-foreground mb-8">Join creators who ship consistently with less friction.</p>
            <Link to="/signup">
              <Button size="lg">Create your garden</Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-workspace-outline py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">© Content Garden</span>
          <div className="flex gap-6">
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
