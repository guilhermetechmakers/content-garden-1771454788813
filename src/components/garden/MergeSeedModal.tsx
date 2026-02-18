import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import type { Seed } from '@/types'

interface MergeSeedModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  seeds: Seed[]
  onConfirm: (payload: { title: string; tags: string[] }) => void
  isLoading?: boolean
}

export function MergeSeedModal({
  open,
  onOpenChange,
  seeds,
  onConfirm,
  isLoading = false,
}: MergeSeedModalProps) {
  const [title, setTitle] = useState('')
  const [tagsText, setTagsText] = useState('')

  const handleSubmit = () => {
    const tags = tagsText
      ? tagsText.split(/[\s,]+/).map((t) => t.trim()).filter(Boolean)
      : []
    onConfirm({ title: title || 'Merged seed', tags })
    setTitle('')
    setTagsText('')
    onOpenChange(false)
  }

  const combinedSnippet = seeds
    .map((s) => s.content || s.title)
    .filter(Boolean)
    .slice(0, 3)
    .join(' … ')

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" showClose>
        <DialogHeader>
          <DialogTitle>Merge seeds</DialogTitle>
          <DialogDescription>
            Combine {seeds.length} seeds into one. Edit title and tags below.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="merge-title">Title</Label>
            <Input
              id="merge-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Merged seed title"
              className="bg-workspace-elevated border-border"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="merge-tags">Tags (comma or space separated)</Label>
            <Input
              id="merge-tags"
              value={tagsText}
              onChange={(e) => setTagsText(e.target.value)}
              placeholder="tag1, tag2"
              className="bg-workspace-elevated border-border"
            />
          </div>
          {combinedSnippet && (
            <div className="space-y-2">
              <Label>Preview</Label>
              <ScrollArea className="h-24 rounded-lg border border-border bg-workspace-elevated p-3 text-sm text-muted-foreground">
                {combinedSnippet}
              </ScrollArea>
            </div>
          )}
          <div className="text-xs text-muted-foreground">
            Provenance: {seeds.map((s) => s.title || s.id).join(', ')}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? 'Merging…' : 'Merge'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
