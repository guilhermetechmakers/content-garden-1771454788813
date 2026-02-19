import { Link } from 'react-router-dom'
import { Plus, Layout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CanvasesPage() {
  const mockCanvases = [
    { id: '1', title: 'Q1 content themes', updated: '2 hours ago' },
    { id: '2', title: 'Launch narrative', updated: '1 day ago' },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Canvases</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            From template
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Canvas
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockCanvases.map((canvas) => (
          <Link key={canvas.id} to={`/canvases/${canvas.id}`}>
            <Card interactive className="h-full">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-lg bg-accent-purple/20 p-2">
                  <Layout className="h-6 w-6 text-accent-purple" />
                </div>
                <CardTitle className="text-base font-medium truncate">{canvas.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground">Updated {canvas.updated}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card className="border-dashed border-workspace-outline bg-workspace-card/50">
        <CardContent className="py-12 text-center">
          <Layout className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Create your first Canvas</p>
          <p className="text-sm text-muted-foreground mb-4">Compose narratives with Seeds and AI.</p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Canvas
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
