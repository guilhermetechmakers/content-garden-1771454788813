import { Link } from 'react-router-dom'
import { FileQuestion } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-6 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-6" />
      <h1 className="text-title font-bold text-foreground mb-2">404</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">This page doesn’t exist or was moved.</p>
      <Link to="/">
        <Button>Go home</Button>
      </Link>
    </div>
  )
}
