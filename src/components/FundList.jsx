import React from 'react'
import FundCard from './FundRow.jsx'

const FundsList = ({ funds, onFundClick }) => {
  return (
    <div>
      {funds.map((fund, index) => (
        <div key={fund.id} onClick={() => onFundClick(index)}>
          <FundCard fund={fund} />
        </div>
      ))}
    </div>
  );
};

export default FundsList