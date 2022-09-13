import { Link } from '@mui/material'
import React from 'react'

export default function ErrorPage() {

  const styling = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    height: "90vh"
  }

  return (
    <div style={styling}>
      <h1>This shortcut is not valid! Create one <Link href={window.location.origin}>here</Link></h1>
    </div>
  )
}
