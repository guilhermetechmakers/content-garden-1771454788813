import { Image, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function LibraryPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Library</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Export</Button>
          <Button variant="outline" size="sm">Sync</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-section flex items-center gap-2">
              <FileText className="h-5 w-5 text-accent-green" />
              Published items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-workspace-outline bg-workspace-elevated p-4 card-interactive"
                >
                  <div className="aspect-video rounded bg-workspace-outline mb-2" />
                  <p className="text-sm font-medium truncate">Post title {i}</p>
                  <p className="text-xs text-muted-foreground">LinkedIn • Feb 18</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-section flex items-center gap-2">
              <Image className="h-5 w-5 text-accent-purple" />
              Asset manager
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">Images/videos with provenance.</p>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-workspace-outline card-interactive"
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-workspace-outline">
        <CardHeader>
          <CardTitle className="text-base">Repurpose suggestions (AI)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">Suggestions will appear here based on published content.</p>
        </CardContent>
      </Card>
    </div>
  )
}
