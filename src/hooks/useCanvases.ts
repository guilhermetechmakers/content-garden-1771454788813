import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { canvasesApi, type CreateCanvasInput, type UpdateCanvasInput } from '@/api/canvases'
import { toast } from 'sonner'

export const canvasKeys = {
  all: ['canvases'] as const,
  lists: () => [...canvasKeys.all, 'list'] as const,
  details: () => [...canvasKeys.all, 'detail'] as const,
  detail: (id: string) => [...canvasKeys.details(), id] as const,
}

export function useCanvases() {
  return useQuery({
    queryKey: canvasKeys.lists(),
    queryFn: canvasesApi.getAll,
    staleTime: 1000 * 60 * 5,
  })
}

export function useCanvas(id: string) {
  return useQuery({
    queryKey: canvasKeys.detail(id),
    queryFn: () => canvasesApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateCanvas() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateCanvasInput) => canvasesApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: canvasKeys.lists() })
      toast.success('Canvas created')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useUpdateCanvas() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: UpdateCanvasInput }) =>
      canvasesApi.update(id, updates),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: canvasKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: canvasKeys.lists() })
      toast.success('Canvas saved')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useDeleteCanvas() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: canvasesApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: canvasKeys.lists() })
      toast.success('Canvas deleted')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}
