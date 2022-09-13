import { Link } from '@mui/material'
import React from 'react'
import HistoricTable from '../components/HistoricTable'

export default function HistoryPage() {

  const isThereLocalData = () => {
    return localStorage.getItem("urlCutter") !== null
  }

  const styling = {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    height: "90vh"
  }

  return (
    <div>
      {isThereLocalData() ? <HistoricTable></HistoricTable> : <div style={styling}>
        <div style={{textAlign: 'center'}}>
          <h1>View your previously created shortcuts here!</h1>
          <p>There is no history of shortcuts. Create one <Link href={window.location.origin}>here</Link>!</p>
        </div>
      </div>}
    </div>
  )
}
