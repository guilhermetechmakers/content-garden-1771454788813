import { Link } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <AlertCircle className="h-16 w-16 text-accent-red mb-6" />
      <h1 className="text-title font-bold text-foreground mb-2">500</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">Something went wrong. We’re on it.</p>
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </div>
  )
}
