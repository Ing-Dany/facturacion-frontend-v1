import { useEffect, useState } from 'react'
import type { StatusResponse } from './types'
import './App.css'

const BACKEND_URL = 'https://facturacion-backend-v1-qnz3.onrender.com'

type FetchState =
  | { phase: 'idle' }
  | { phase: 'loading' }
  | { phase: 'success'; data: StatusResponse }
  | { phase: 'error'; message: string }

export default function App() {
  const [state, setState] = useState<FetchState>({ phase: 'idle' })

  const fetchStatus = async () => {
    setState({ phase: 'loading' })
    try {
      const res = await fetch(`${BACKEND_URL}/status`)
      const data: StatusResponse = await res.json()
      setState({ phase: 'success', data })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error desconocido'
      setState({ phase: 'error', message })
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  return (
    <main className="card">
      <h1>Estado del servidor</h1>
      <p className="endpoint">
        <code>GET {BACKEND_URL}/status</code>
      </p>

      {state.phase === 'loading' && (
        <div className="status loading" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          Consultando...
        </div>
      )}

      {state.phase === 'error' && (
        <div className="status error" role="alert">
          <strong>Error de red:</strong> {state.message}
        </div>
      )}

      {state.phase === 'success' && (
        <div className={`status ${state.data.status}`} role="status" aria-live="polite">
          <div className="badge">{state.data.status.toUpperCase()}</div>
          <p>{state.data.message}</p>
          {state.data.timestamp && (
            <p className="meta">
              Timestamp:{' '}
              <time dateTime={state.data.timestamp}>
                {new Date(state.data.timestamp).toLocaleString('es-AR')}
              </time>
            </p>
          )}
          {state.data.supabase_url && (
            <p className="meta">Supabase URL: {state.data.supabase_url}</p>
          )}
          {state.data.detail && (
            <p className="meta error-detail">Detalle: {state.data.detail}</p>
          )}
        </div>
      )}

      <button
        onClick={fetchStatus}
        disabled={state.phase === 'loading'}
        aria-busy={state.phase === 'loading'}
      >
        {state.phase === 'loading' ? 'Consultando...' : 'Actualizar'}
      </button>
    </main>
  )
}
