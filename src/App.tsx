import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { SidebarProvider } from '@/contexts/sidebar-context'
import { router } from '@/routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <RouterProvider router={router} />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'rgb(38 38 44)',
              border: '1px solid rgb(54 54 60)',
              color: 'rgb(237 237 237)',
            },
          }}
        />
      </SidebarProvider>
    </QueryClientProvider>
  )
}
