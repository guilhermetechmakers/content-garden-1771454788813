export type SeedType = 'link' | 'voice' | 'screenshot' | 'thought'

export interface Seed {
  id: string
  user_id: string
  type: SeedType
  title: string
  content: string
  tags: string[]
  extracted_bullets: string[]
  source_url?: string
  attachments: string[]
  created_at: string
  cluster_id?: string
}

export interface CanvasNode {
  id: string
  type: 'seed' | 'text' | 'image' | 'outline'
  position: { x: number; y: number }
  data: Record<string, unknown>
  seedId?: string
}

export interface CanvasEdge {
  id: string
  source: string
  target: string
}

export interface Canvas {
  id: string
  title: string
  nodes: CanvasNode[]
  edges: CanvasEdge[]
  metadata: Record<string, unknown>
  updated_at: string
}

export interface DropPost {
  id: string
  hook: string
  value: string
  example: string
  cta: string
  variants?: Record<string, string>
}

export interface Drop {
  id: string
  title: string
  canvas_id: string
  posts: DropPost[]
  status: 'draft' | 'ready' | 'exported'
  created_at: string
}

export interface RunwaySlot {
  id: string
  date: string
  time: string
  status: 'empty' | 'filled' | 'posted'
  post_id?: string
  checklist: string[]
}

export interface Snippet {
  id: string
  title: string
  content: string
  tags: string[]
  usage_count: number
  created_at: string
}

export interface SearchResult {
  id: string
  type: 'seed' | 'canvas' | 'drop' | 'moment'
  title: string
  snippet: string
  provenance?: string
  timecode?: string
  confidence: number
}

export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface AuthResponse {
  token: string
  user: User
}

export interface SignInInput {
  email: string
  password: string
}

export interface SignUpInput {
  email: string
  password: string
  full_name?: string
}
