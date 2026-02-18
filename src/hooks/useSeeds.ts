import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { seedsApi, type CreateSeedInput, type UpdateSeedInput } from '@/api/seeds'
import { toast } from 'sonner'

export const seedKeys = {
  all: ['seeds'] as const,
  lists: () => [...seedKeys.all, 'list'] as const,
  list: (filter: string) => [...seedKeys.lists(), filter] as const,
  details: () => [...seedKeys.all, 'detail'] as const,
  detail: (id: string) => [...seedKeys.details(), id] as const,
}

export function useSeeds() {
  return useQuery({
    queryKey: seedKeys.lists(),
    queryFn: seedsApi.getAll,
    staleTime: 1000 * 60 * 5,
  })
}

export function useSeed(id: string) {
  return useQuery({
    queryKey: seedKeys.detail(id),
    queryFn: () => seedsApi.getById(id),
    enabled: !!id,
  })
}

export function useCreateSeed() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateSeedInput) => seedsApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: seedKeys.lists() })
      toast.success('Seed created')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useUpdateSeed() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: UpdateSeedInput }) =>
      seedsApi.update(id, updates),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: seedKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: seedKeys.lists() })
      toast.success('Seed updated')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}

export function useDeleteSeed() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: seedsApi.delete,
    onSuccess: (_, id) => {
      queryClient.removeQueries({ queryKey: seedKeys.detail(id) })
      queryClient.invalidateQueries({ queryKey: seedKeys.lists() })
      toast.success('Seed removed')
    },
    onError: (e: Error) => toast.error(e.message),
  })
}
