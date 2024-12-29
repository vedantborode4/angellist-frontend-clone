import React from 'react'
import HeaderButtons from './components/HeaderButtons'
import FundsList from './components/FundList.jsx'
import { funds } from './data/fund.js'
import FundDetailsList from './components/FundDetails.jsx'

function App() {
  return (
    <>
      <div className="container mx-auto">
        <HeaderButtons />              
        <FundsList funds={funds} />
        <FundDetailsList funds={funds} />
      </div>
    </>
  )
}

export default App
