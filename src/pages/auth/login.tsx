import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Sprout, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(1, 'Password required'),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  })

  const onSubmit = async (_data: LoginForm) => {
    // Placeholder: call auth API
    await new Promise((r) => setTimeout(r, 500))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-workspace-main via-workspace-panel to-black" />
      <Link to="/landing" className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <Sprout className="h-6 w-6 text-accent-green" />
        <span className="font-semibold">Content Garden</span>
      </Link>

      <Card className="w-full max-w-md border-workspace-outline bg-workspace-card">
        <CardHeader className="text-center">
          <CardTitle className="text-title">Log in</CardTitle>
          <CardDescription>Enter your email and password to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-accent-red">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register('password')}
              />
              {errors.password && (
                <p className="text-sm text-accent-red">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-accent-green hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in…' : 'Sign in'}
            </Button>
            <Separator className="my-4 bg-border" />
            <div className="space-y-2">
              <Button type="button" variant="secondary" className="w-full" disabled>
                <Mail className="h-4 w-4" />
                Send magic link
              </Button>
              <p className="text-xs text-center text-muted-foreground">or continue with</p>
              <div className="flex gap-2">
                <Button type="button" variant="outline" className="flex-1" disabled>
                  Google
                </Button>
                <Button type="button" variant="outline" className="flex-1" disabled>
                  Apple
                </Button>
                <Button type="button" variant="outline" className="flex-1" disabled>
                  LinkedIn
                </Button>
              </div>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="text-accent-green hover:underline">Sign up</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
