import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TermsPage() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-title font-bold text-foreground">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-section">Agreement</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert prose-sm max-w-none text-muted-foreground">
          <p>
            By using Content Garden you agree to these terms. You retain ownership of your content;
            we need limited rights to store, process, and display it. Use the service responsibly.
          </p>
        </CardContent>
      </Card>
      <Link to="/" className="text-sm text-accent-green hover:underline">← Back to app</Link>
    </div>
  )
}
