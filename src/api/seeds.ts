import { api } from '@/lib/api'
import type { Seed } from '@/types'

export interface CreateSeedInput {
  type: Seed['type']
  title: string
  content: string
  tags?: string[]
  source_url?: string
}

export interface UpdateSeedInput {
  title?: string
  content?: string
  tags?: string[]
}

export const seedsApi = {
  getAll: () => api.get<Seed[]>('/seeds'),
  getById: (id: string) => api.get<Seed>(`/seeds/${id}`),
  create: (data: CreateSeedInput) => api.post<Seed>('/seeds', data),
  update: (id: string, updates: UpdateSeedInput) => api.patch<Seed>(`/seeds/${id}`, updates),
  delete: (id: string) => api.delete<void>(`/seeds/${id}`),
  merge: (ids: string[], payload: { title: string; tags: string[] }) =>
    api.post<Seed>('/seeds/merge', { seed_ids: ids, ...payload }),
}
