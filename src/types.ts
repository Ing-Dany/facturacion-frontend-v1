export interface StatusResponse {
  status: 'ok' | 'error'
  message: string
  supabase_url?: string
  timestamp?: string
  http_status?: number
  detail?: string
}
