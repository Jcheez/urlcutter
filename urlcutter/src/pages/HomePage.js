import React from 'react'
import UrlShortcutForm from '../components/UrlShortcutForm'

export default function HomePage() {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Welcome! Shorten your URL here :)</h1>
        <UrlShortcutForm></UrlShortcutForm>
    </div>
  )
}
