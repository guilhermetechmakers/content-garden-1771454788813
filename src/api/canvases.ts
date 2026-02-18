import { api } from '@/lib/api'
import type { Canvas, CanvasNode, CanvasEdge } from '@/types'

export interface CreateCanvasInput {
  title: string
  nodes?: CanvasNode[]
  edges?: CanvasEdge[]
}

export interface UpdateCanvasInput {
  title?: string
  nodes?: CanvasNode[]
  edges?: CanvasEdge[]
  metadata?: Record<string, unknown>
}

export const canvasesApi = {
  getAll: () => api.get<Canvas[]>('/canvases'),
  getById: (id: string) => api.get<Canvas>(`/canvases/${id}`),
  create: (data: CreateCanvasInput) => api.post<Canvas>('/canvases', data),
  update: (id: string, updates: UpdateCanvasInput) => api.patch<Canvas>(`/canvases/${id}`, updates),
  delete: (id: string) => api.delete<void>(`/canvases/${id}`),
}
