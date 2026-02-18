import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Upload, FileText, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function DropEditorPage() {
  const { dropId } = useParams<{ dropId: string }>()

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between gap-4">
        <Link to="/drops" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
          <ArrowLeft className="h-4 w-4" />
          Back to Drops
        </Link>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Export to Runway
        </Button>
      </div>

      <h1 className="text-title font-bold">Drop {dropId ?? '—'}</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-section">Posts</CardTitle>
              <p className="text-sm text-muted-foreground">Hook → Value → Example → CTA</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4 p-4 rounded-lg border border-workspace-outline bg-workspace-elevated">
                  <Label>Post {i}</Label>
                  <Input placeholder="Hook" className="bg-workspace-card" />
                  <Input placeholder="Value" className="bg-workspace-card" />
                  <Input placeholder="Example" className="bg-workspace-card" />
                  <Input placeholder="CTA" className="bg-workspace-card" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Variants</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="secondary" size="sm" className="justify-start gap-2">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="sm" className="justify-start gap-2">
                <Twitter className="h-4 w-4" />
                X
              </Button>
              <Button variant="secondary" size="sm" className="justify-start gap-2">
                <FileText className="h-4 w-4" />
                Short Video Script
              </Button>
              <Button variant="secondary" size="sm" className="justify-start gap-2">
                Carousel
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Attach images/videos with provenance.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
