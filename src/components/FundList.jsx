import React from 'react';
import FundCard from './FundRow.jsx';


const FundsList = ({ funds }) => {
  return (
    <div>
      {funds.map((fund) => (
        <FundCard key={fund.id} fund={fund} />
      ))}
    </div>
  );
};

export default FundsList;

