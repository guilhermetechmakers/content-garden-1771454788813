import { Calendar, Check, Circle, GripVertical, Undo2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const mockSlots = [
  { id: '1', date: 'Mon, Feb 19', time: '9:00 AM', status: 'filled' as const, title: 'Week 8 post 1' },
  { id: '2', date: 'Tue, Feb 20', time: '9:00 AM', status: 'empty' as const },
  { id: '3', date: 'Wed, Feb 21', time: '9:00 AM', status: 'posted' as const, title: 'Launch thread' },
]

export function RunwayPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <h1 className="text-title font-bold text-foreground">Runway</h1>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-sm text-muted-foreground">Next 7 posts • Drag from Drops or Library</p>
          <Button variant="outline" size="sm" className="gap-1">
            <Undo2 className="h-4 w-4" />
            Undo
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            History
          </Button>
          <Button variant="secondary" size="sm" className="gap-1">
            <Send className="h-4 w-4" />
            Quick post
          </Button>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1 space-y-4">
          <h2 className="text-section font-semibold">Slots</h2>
          <div className="space-y-2">
            {mockSlots.map((slot) => (
              <Card
                key={slot.id}
                className={cn(
                  'card-interactive',
                  slot.status === 'empty' && 'border-dashed'
                )}
              >
                <CardContent className="py-4 flex items-center gap-4">
                  <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab shrink-0" />
                  <div className="flex items-center gap-3 shrink-0">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{slot.date}</span>
                    <span className="text-sm text-muted-foreground">{slot.time}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    {slot.status === 'empty' ? (
                      <p className="text-sm text-muted-foreground">Drop a post here</p>
                    ) : (
                      <p className="text-sm font-medium truncate">{slot.title}</p>
                    )}
                  </div>
                  <div className="shrink-0">
                    {slot.status === 'posted' ? (
                      <span className="flex items-center gap-1 text-sm text-accent-green">
                        <Check className="h-4 w-4" /> Posted
                      </span>
                    ) : slot.status === 'filled' ? (
                      <Button variant="secondary" size="sm">Mark Posted</Button>
                    ) : (
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Circle className="h-2 w-2" /> Empty
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <aside className="w-80 shrink-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Slot detail</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Select a slot to preview copy, assets, and checklist.</p>
            </CardContent>
          </Card>
          <Card className="mt-4 border-dashed">
            <CardContent className="py-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Empty slot suggest</p>
              <Button variant="outline" size="sm">Suggest from Drops</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
