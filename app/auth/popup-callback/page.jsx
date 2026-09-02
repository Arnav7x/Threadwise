'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../../lib/supabase'

export default function PopupCallback() {
  const [message, setMessage] = useState('Finishing your sign-in…')

  useEffect(() => {
    const finish = async () => {
      if (!supabase) return setMessage('Supabase is not configured.')
      const code = new URLSearchParams(window.location.search).get('code')
      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (error) return setMessage(error.message)
      }
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return setMessage('No session was created. Please try again.')
      window.opener?.postMessage({ type: 'threadwise-google-complete' }, window.location.origin)
      window.close()
    }
    finish()
  }, [])

  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', fontFamily: 'sans-serif', color: '#1b1b19', background: '#f7f6f2' }}>{message}</main>
}
