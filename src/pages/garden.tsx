import { useState } from 'react'
import { Search, Filter, CheckSquare, Square, Merge, Trash2, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MergeSeedModal } from '@/components/garden/MergeSeedModal'
import { cn } from '@/lib/utils'
import type { Seed } from '@/types'

const mockClusters = [
  { id: '1', label: 'Product ideas', count: 5 },
  { id: '2', label: 'Content angles', count: 3 },
  { id: '3', label: 'Research notes', count: 4 },
] as const

const mockSeedsForMerge = (ids: string[]): Seed[] =>
  ids.map((id, i) => ({
    id,
    user_id: 'user',
    type: 'thought',
    title: `Seed ${i + 1}`,
    content: `Snippet or extracted bullets from seed ${i + 1}…`,
    tags: ['tag1', 'tag2'],
    extracted_bullets: [],
    attachments: [],
    created_at: new Date().toISOString(),
  }))

export function GardenPage() {
  const [triageMode, setTriageMode] = useState(false)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [mergeOpen, setMergeOpen] = useState(false)

  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Garden</h1>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={triageMode ? 'default' : 'secondary'}
            size="sm"
            onClick={() => setTriageMode(!triageMode)}
          >
            {triageMode ? 'Exit triage' : 'Triage mode'}
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Describe what you're looking for…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="default" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="default">Sort</Button>
        </div>
      </div>

      {triageMode && selected.size > 0 && (
        <div className="flex items-center gap-4 p-4 rounded-lg bg-workspace-elevated border border-workspace-outline">
          <span className="text-sm text-muted-foreground">{selected.size} selected</span>
          <Button variant="secondary" size="sm" className="gap-1">
            Keep
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="gap-1"
            onClick={() => selected.size >= 2 && setMergeOpen(true)}
            disabled={selected.size < 2}
          >
            <Merge className="h-4 w-4" />
            Merge
          </Button>
          <Button variant="secondary" size="sm" className="gap-1 text-accent-red">
            <Trash2 className="h-4 w-4" />
            Ignore
          </Button>
        </div>
      )}

      <MergeSeedModal
        open={mergeOpen}
        onOpenChange={setMergeOpen}
        seeds={mockSeedsForMerge(Array.from(selected))}
        onConfirm={(_payload) => {
          setSelected(new Set())
        }}
      />

      <div className="space-y-8">
        {mockClusters.map((cluster) => (
          <section key={cluster.id}>
            <h2 className="text-section font-semibold text-foreground mb-4">
              {cluster.label} <span className="text-muted-foreground font-normal">({cluster.count})</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => {
                const seedId = `${cluster.id}-${i}`
                const isSelected = selected.has(seedId)
                return (
                  <Card
                    key={seedId}
                    className={cn(
                      'card-interactive',
                      isSelected && 'ring-2 ring-accent-green border-accent-green/50'
                    )}
                  >
                    <CardHeader className="flex flex-row items-start justify-between gap-2 pb-2">
                      <div className="flex items-start gap-2 min-w-0">
                        {triageMode && (
                          <button
                            type="button"
                            onClick={() => toggleSelect(seedId)}
                            className="shrink-0 mt-0.5"
                            aria-label={isSelected ? 'Deselect' : 'Select'}
                          >
                            {isSelected ? (
                              <CheckSquare className="h-5 w-5 text-accent-green" />
                            ) : (
                              <Square className="h-5 w-5 text-muted-foreground" />
                            )}
                          </button>
                        )}
                        <CardTitle className="text-base font-medium truncate">
                          Seed: {cluster.label} — item {i}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-2">
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        Extracted bullets or snippet from this seed…
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {['tag1', 'tag2'].map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded-full bg-workspace-elevated text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button variant="ghost" size="sm">Keep</Button>
                        <Button variant="ghost" size="sm">Merge</Button>
                        <Button variant="ghost" size="sm">Ignore</Button>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Open <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      <Card className="border-dashed border-workspace-outline bg-workspace-card/50">
        <CardContent className="py-12 text-center">
          <p className="text-muted-foreground mb-2">No seeds in this cluster yet</p>
          <p className="text-sm text-muted-foreground">Capture from Home or merge similar seeds.</p>
        </CardContent>
      </Card>
    </div>
  )
}
