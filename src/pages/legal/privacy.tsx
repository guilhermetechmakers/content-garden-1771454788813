import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function PrivacyPage() {
  return (
    <div className="space-y-6 animate-fade-in max-w-3xl">
      <h1 className="text-title font-bold text-foreground">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-section">Data we collect</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-invert prose-sm max-w-none text-muted-foreground">
          <p>
            We collect account information, content you create (Seeds, Canvases, Drops), and usage data
            to provide the service and improve the product. We do not sell your data.
          </p>
          <p>
            For full details, contact support. We comply with GDPR and CCPA where applicable.
          </p>
        </CardContent>
      </Card>
      <Link to="/" className="text-sm text-accent-green hover:underline">← Back to app</Link>
    </div>
  )
}
