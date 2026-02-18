import { Link } from 'react-router-dom'
import { Plus, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function DropsPage() {
  const mockDrops = [
    { id: '1', title: 'Week 8 bundle', canvas: 'Q1 content themes', postCount: 5, status: 'draft' as const },
    { id: '2', title: 'Launch week', canvas: 'Launch narrative', postCount: 7, status: 'ready' as const },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Drops</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Drop
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockDrops.map((drop) => (
          <Link key={drop.id} to={`/drops/${drop.id}`}>
            <Card interactive className="h-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-lg bg-accent-green/20 p-2">
                  <Package className="h-6 w-6 text-accent-green" />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-base font-medium truncate">{drop.title}</CardTitle>
                  <p className="text-sm text-muted-foreground truncate">From {drop.canvas}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{drop.postCount} posts</span>
                <span
                  className={cn(
                    'text-xs px-2 py-1 rounded-full',
                    drop.status === 'ready'
                      ? 'bg-accent-green/20 text-accent-green'
                      : 'bg-workspace-elevated text-muted-foreground'
                  )}
                >
                  {drop.status}
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="border-dashed border-workspace-outline bg-workspace-card/50">
        <CardContent className="py-12 text-center">
          <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Create a Drop from a Canvas</p>
          <p className="text-sm text-muted-foreground mb-4">Bundle 3–10 posts with Hook → Value → Example → CTA.</p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Drop
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
