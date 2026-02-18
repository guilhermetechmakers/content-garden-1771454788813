import { api } from '@/lib/api'
import type { Drop, DropPost } from '@/types'

export interface CreateDropInput {
  title: string
  canvas_id: string
  posts?: DropPost[]
}

export interface UpdateDropInput {
  title?: string
  posts?: DropPost[]
  status?: Drop['status']
}

export const dropsApi = {
  getAll: () => api.get<Drop[]>('/drops'),
  getById: (id: string) => api.get<Drop>(`/drops/${id}`),
  create: (data: CreateDropInput) => api.post<Drop>('/drops', data),
  update: (id: string, updates: UpdateDropInput) => api.patch<Drop>(`/drops/${id}`, updates),
  delete: (id: string) => api.delete<void>(`/drops/${id}`),
}
