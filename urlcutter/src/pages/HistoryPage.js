import React from 'react'
import HistoricTable from '../components/HistoricTable'

export default function HistoryPage() {

  const isThereLocalData = () => {
    return localStorage.getItem("urlCutter") !== null
  }
  return (
    <div>
      <h1>View your previously created shortcuts here!</h1>
      {isThereLocalData() ? <HistoricTable></HistoricTable> : <p>There is no history of shortcuts. Create one now!</p>}
    </div>
  )
}
