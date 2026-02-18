import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { dropsApi, type CreateDropInput, type UpdateDropInput } from '@/api/drops'
import { toast } from 'sonner'

export const dropKeys = {
  all: ['drops'] as const,
  lists: () => [...dropKeys.all, 'list'] as const,
  details: () => [...dropKeys.all, 'detail'] as const,
  detail: (id: string) => [...dropKeys.details(), id] as const,
}

export function useDrops() {
  return useQuery({
    queryKey: dropKeys.lists(),
    queryFn: dropsApi.getAll,
    staleTime: 1000 * 60 * 5,
  })
}

export function useDrop(id: string) {
  return useQuery({
    queryKey: dropKeys.detail(id),
    queryFn: () => dropsApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateDrop() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateDropInput) => dropsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dropKeys.lists() })
      toast.success('Drop created')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useUpdateDrop() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: UpdateDropInput }) =>
      dropsApi.update(id, updates),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: dropKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: dropKeys.lists() })
      toast.success('Drop updated')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useDeleteDrop() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: dropsApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dropKeys.lists() })
      toast.success('Drop deleted')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}
