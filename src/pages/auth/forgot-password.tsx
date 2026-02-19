import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Sprout, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const forgotSchema = z.object({
  email: z.string().email('Invalid email'),
})

type ForgotForm = z.infer<typeof forgotSchema>

export function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotForm>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = async (_data: ForgotForm) => {
    await new Promise((r) => setTimeout(r, 500))
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-workspace-main via-workspace-panel to-black" />
      <Link
        to="/landing"
        className="absolute top-6 left-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
      >
        <Sprout className="h-6 w-6 text-accent-green" />
        <span className="font-semibold">Content Garden</span>
      </Link>

      <Card className="w-full max-w-md border-workspace-outline bg-workspace-card">
        <CardHeader className="text-center">
          <CardTitle className="text-title">Reset password</CardTitle>
          <CardDescription>
            Enter your email and we&apos;ll send a link to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitSuccessful ? (
            <div className="space-y-4 text-center">
              <div className="rounded-full bg-accent-green/20 p-3 w-fit mx-auto">
                <Mail className="h-6 w-6 text-accent-green" />
              </div>
              <p className="text-sm text-muted-foreground">
                If an account exists for that email, you&apos;ll receive a reset link shortly.
              </p>
              <Link to="/login">
                <Button variant="secondary" className="w-full">Back to login</Button>
              </Link>
            </div>
          ) : (
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
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send reset link'}
              </Button>
            </form>
          )}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            <Link to="/login" className="text-accent-green hover:underline">
              ← Back to login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
