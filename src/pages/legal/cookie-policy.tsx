import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CookiePolicyPage() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-title font-bold text-foreground">Cookie Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-section">How we use cookies</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert prose-sm max-w-none text-muted-foreground">
          <p>
            Content Garden uses essential cookies to keep you signed in and remember your preferences.
            We may use analytics cookies to improve the product. We do not sell data from cookies to third parties.
          </p>
          <p>
            You can manage cookie preferences in your browser or in account settings. For full details, contact support.
          </p>
        </CardContent>
      </Card>
      <Link to="/" className="text-sm text-accent-green hover:underline">← Back to app</Link>
    </div>
  )
}
