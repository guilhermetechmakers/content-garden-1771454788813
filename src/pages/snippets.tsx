import { Plus, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const mockSnippets = [
  { id: '1', title: 'CTA — Book a call', content: 'Ready? Book a call.', tags: ['cta'], usage: 12 },
  { id: '2', title: 'Hook template', content: 'What if you could…', tags: ['hook'], usage: 8 },
]

export function SnippetsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Snippets</h1>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Create Snippet
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Input placeholder="Search snippets…" className="max-w-sm" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mockSnippets.map((snippet) => (
          <Card key={snippet.id} className="card-interactive">
            <CardHeader className="flex flex-row items-start justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="h-5 w-5 text-accent-purple shrink-0" />
                <CardTitle className="text-base font-medium truncate">{snippet.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0 space-y-2">
              <p className="text-sm text-muted-foreground line-clamp-2">{snippet.content}</p>
              <div className="flex flex-wrap gap-1">
                {snippet.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-workspace-elevated text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Used {snippet.usage} times</p>
              <Button variant="ghost" size="sm">Insert into Canvas / Drop</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-dashed border-workspace-outline bg-workspace-card/50">
        <CardContent className="py-12 text-center">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground mb-2">Reusable hooks, CTAs, prompts</p>
          <p className="text-sm text-muted-foreground mb-4">Quick-insert into Canvas or Drop.</p>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Snippet
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
