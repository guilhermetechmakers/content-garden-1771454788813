import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { authApi } from '@/api/auth'
import type { SignInInput, SignUpInput } from '@/types'

export const authKeys = {
  user: ['auth', 'user'] as const,
}

export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user,
    queryFn: authApi.getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 10,
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('access_token'),
  })
}

export function useSignIn() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (input: SignInInput) => authApi.signIn(input),
    onSuccess: (data) => {
      if (data.user) queryClient.setQueryData(authKeys.user, data.user)
      queryClient.invalidateQueries({ queryKey: authKeys.user })
    },
    onError: (_e: Error) => {
      // Toast handled by caller if desired
    },
  })
}

export function useSignUp() {
  return useMutation({
    mutationFn: (input: SignUpInput) => authApi.signUp(input),
  })
}

export function useSignOut() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => authApi.signOut(),
    onSuccess: () => queryClient.clear(),
  })
}
