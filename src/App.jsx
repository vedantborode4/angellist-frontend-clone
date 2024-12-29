import React, { useState } from 'react'
import HeaderButtons from './components/HeaderButtons'
import FundsList from './components/FundList.jsx'
import FundDetails from './components/FundDetails.jsx'
import { funds } from './data/fund.js'

function App() {
  const [selectedFundIndex, setSelectedFundIndex] = useState(null);

  const handleFundClick = (index) => {
    setSelectedFundIndex(index)
  }

  const handleCloseDetails = () => {
    setSelectedFundIndex(null)
  }

  return (
    <>
      <div className="container mx-auto relative">
        <HeaderButtons />
        <FundsList funds={funds} onFundClick={handleFundClick} />
        {selectedFundIndex !== null && (
          <FundDetails
            funds={funds}
            currentIndex={selectedFundIndex}
            setCurrentIndex={setSelectedFundIndex}
            onClose={handleCloseDetails}
          />
        )}
      </div>
    </>
  );
}

export default App
