import { useParams, Link } from 'react-router-dom'
import { Search, Sparkles, History, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CanvasWorkspacePage() {
  const { canvasId } = useParams<{ canvasId: string }>()

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-fade-in">
      <div className="flex items-center justify-between gap-4 mb-4">
        <Link to="/canvases" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Canvases
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <History className="h-4 w-4" />
            Version history
          </Button>
          <Button size="sm" className="gap-1">
            <Upload className="h-4 w-4" />
            Publish to Drop
          </Button>
        </div>
      </div>

      <div className="flex-1 flex gap-4 min-h-0">
        {/* Left pane - Seeds panel */}
        <aside className="w-64 shrink-0 flex flex-col border border-workspace-outline rounded-card-lg bg-workspace-card overflow-hidden">
          <div className="p-2 border-b border-workspace-outline">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search seeds…" className="pl-8 h-9" />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Propose related</p>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-2 rounded-lg border border-workspace-outline mb-2 cursor-grab bg-workspace-elevated hover:border-accent-purple/50"
              >
                <p className="text-sm font-medium truncate">Seed {i}</p>
                <p className="text-xs text-muted-foreground truncate">Snippet…</p>
              </div>
            ))}
          </div>
        </aside>

        {/* Center - Canvas */}
        <main className="flex-1 min-w-0 rounded-card-lg border border-workspace-outline bg-workspace-panel overflow-hidden flex flex-col">
          <div className="p-4 border-b border-workspace-outline">
            <h1 className="text-section font-semibold">Canvas {canvasId ?? '—'}</h1>
            <p className="text-xs text-muted-foreground">Drag seeds here • Autosave on</p>
          </div>
          <div className="flex-1 overflow-auto p-8 bg-[#1a1a1e] relative">
            <div className="absolute inset-8 rounded-lg border border-dashed border-workspace-outline grid grid-cols-4 grid-rows-4 gap-4 place-content-start">
              <div className="rounded-lg border border-accent-purple/50 bg-workspace-card p-4 w-48">
                <p className="text-sm font-medium">Seed node</p>
                <p className="text-xs text-muted-foreground">Drag from left</p>
              </div>
            </div>
          </div>
        </main>

        {/* Right pane - AI panel */}
        <aside className="w-72 shrink-0 flex flex-col border border-workspace-outline rounded-card-lg bg-workspace-card overflow-hidden">
          <div className="p-3 border-b border-workspace-outline flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-accent-purple" />
            <span className="font-medium text-sm">AI Panel</span>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            <Button variant="secondary" size="sm" className="w-full justify-start gap-2">
              <Sparkles className="h-4 w-4" />
              Draft 5 angles
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start gap-2">
              Generate hooks
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start gap-2">
              Turn selection into thread
            </Button>
            <Button variant="secondary" size="sm" className="w-full justify-start gap-2">
              Summarize selected Seeds
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
