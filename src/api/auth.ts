import { api } from '@/lib/api'
import type { AuthResponse, SignInInput, SignUpInput, User } from '@/types'

export const authApi = {
  signIn: async (credentials: SignInInput): Promise<AuthResponse> => {
    const data = await api.post<AuthResponse>('/auth/login', credentials)
    if (data.token) localStorage.setItem('access_token', data.token)
    return data
  },
  signUp: async (credentials: SignUpInput): Promise<AuthResponse> => {
    const data = await api.post<AuthResponse>('/auth/register', credentials)
    if (data.token) localStorage.setItem('access_token', data.token)
    return data
  },
  signOut: async (): Promise<void> => {
    await api.post('/auth/logout', {}).catch(() => {})
    localStorage.removeItem('access_token')
  },
  getCurrentUser: () => api.get<User>('/users/me'),
  resetPassword: (email: string) => api.post<void>('/auth/forgot-password', { email }),
}
