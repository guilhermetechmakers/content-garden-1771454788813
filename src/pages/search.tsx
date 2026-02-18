import { Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const examplePrompts = [
  'Seeds about product launch',
  'Canvases with growth frameworks',
  'Drops from last week',
]

export function SearchPage() {
  const [query, setQuery] = useState('')

  return (
    <div className="space-y-6 animate-fade-in max-w-3xl mx-auto">
      <h1 className="text-title font-bold text-foreground">Describe-to-Find</h1>
      <p className="text-muted-foreground">
        Natural-language search across Seeds, Canvases, Drops, and media moments.
      </p>

      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Describe what you're looking for…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-12 h-12 text-base rounded-xl border-workspace-outline focus:ring-accent-green/50"
        />
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Example prompts</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((prompt) => (
            <Button
              key={prompt}
              variant="outline"
              size="sm"
              onClick={() => setQuery(prompt)}
            >
              {prompt}
            </Button>
          ))}
        </div>
      </div>

      <Card className="border-workspace-outline">
        <CardHeader>
          <CardTitle className="text-base">Results</CardTitle>
          <p className="text-sm text-muted-foreground">Exact matches, contextual snippets, related Drops</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-8">
            Enter a query to see results with provenance and timecode. Open in Garden or Canvas context.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
