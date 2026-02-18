import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-green focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-accent-green text-black shadow-glow hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]',
        primary:
          'bg-accent-purple text-white shadow-glow-purple hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]',
        secondary:
          'bg-workspace-elevated text-foreground border border-border hover:bg-workspace-outline hover:border-accent-purple/50',
        outline: 'border border-border bg-transparent hover:bg-workspace-elevated hover:border-workspace-outline',
        ghost: 'hover:bg-workspace-elevated',
        destructive: 'bg-accent-red text-white hover:opacity-90',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        default: 'h-10 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
