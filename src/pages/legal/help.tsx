import { Link } from 'react-router-dom'
import { BookOpen, MessageCircle, FileQuestion, Mail } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
export function HelpPage() {
  return (
    <div className="space-y-8 animate-fade-in max-w-3xl mx-auto">
      <div>
        <h1 className="text-title font-bold text-foreground mb-2">About & Help</h1>
        <p className="text-muted-foreground">
          Guides, FAQs, and support for Content Garden.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="card-interactive border-workspace-outline">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="rounded-lg bg-accent-green/20 p-2">
              <BookOpen className="h-5 w-5 text-accent-green" />
            </div>
            <CardTitle className="text-base">Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn Capture → Curate → Compose → Package → Runway and get the most from your ritual flow.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Go to Home</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="card-interactive border-workspace-outline">
          <CardHeader className="flex flex-row items-center gap-3">
            <div className="rounded-lg bg-accent-purple/20 p-2">
              <FileQuestion className="h-5 w-5 text-accent-purple" />
            </div>
            <CardTitle className="text-base">FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Common questions about Seeds, Garden triage, Canvases, Drops, and Runway.
            </p>
            <Button variant="outline" size="sm" asChild>
              <a href="#faq">View FAQs</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="border-workspace-outline">
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="rounded-lg bg-workspace-elevated p-2">
            <MessageCircle className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <CardTitle className="text-base">Contact support</CardTitle>
            <p className="text-sm text-muted-foreground">Get help from the team</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Can&apos;t find what you need? Send us a message and we&apos;ll get back to you.
          </p>
          <Button className="gap-2" asChild>
            <a href="mailto:support@contentgarden.example.com">
              <Mail className="h-4 w-4" />
              support@contentgarden.example.com
            </a>
          </Button>
        </CardContent>
      </Card>

      <section id="faq" className="space-y-4">
        <h2 className="text-section font-semibold text-foreground">Frequently asked questions</h2>
        {[
          { q: 'How do I capture a Seed?', a: 'Use the Quick Capture bar on Home: paste a link, record a voice note, upload a screenshot, or type a quick thought.' },
          { q: 'What is Triage Mode in Garden?', a: 'Triage lets you Keep, Merge, or Ignore seeds in clusters. Select multiple seeds and use Merge to combine them into one with a single title and tags.' },
          { q: 'How do I create a Drop from a Canvas?', a: 'In the Canvas workspace, use the Publish/Export button to create a Drop. You can then edit post cards (Hook, Value, Example, CTA) and export to Runway or CSV.' },
          { q: 'What are Runway slots?', a: 'Runway is a slot-based timeline for the next 7 posts. Drag posts from Drops or Library into slots, complete the checklist, and mark as Posted when done.' },
        ].map((faq, i) => (
          <Card key={i} className="border-workspace-outline">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{faq.q}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">{faq.a}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
