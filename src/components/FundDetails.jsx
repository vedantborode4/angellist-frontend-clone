import React, { useState } from 'react';

const FundDetails = ({ funds, currentIndex, setCurrentIndex }) => {
  const handleNext = () => {
    if (currentIndex < funds.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentFund = funds[currentIndex];
  const nextFund =funds[currentIndex + 1]
  let minInvestment = currentFund.min_period * currentFund.min_subscription;

  return (
    <div className="fixed inset-y-0 right-0 z-40 flex w-full flex-col border-lg bg-white sm:w-[600px] lg:w-[720px]">
      <div className="flex-1 overflow-scroll p-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="flex items-center justify-between">
          <button
            className="inline-flex justify-center items-center bg-gray-200 gap-3 font-medium rounded-md transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed no-underline hover:no-underline hover:opacity-100 leading-normal h-8 w-8 sm:h-10 sm:w-10 p-0 next-button-secondary"
            aria-label="Close menu"
          >
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              shapeRendering="geometricPrecision"
              viewBox="0 0 20 20"
              className="isrg1b0"
            >
              <path
                d="m6 6 4 4m0 0 4 4m-4-4 4-4m-4 4-4 4"
                stroke="currentColor"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </button>
          {currentFund.fund_page_link && (
            <a
              className="inline-flex justify-center bg-blue-900 text-white items-center gap-3 font-medium rounded-md transition-colors duration-200 no-underline hover:no-underline hover:opacity-100 leading-normal h-11 text-[0.875rem] tracking-[-0.005em] px-4 next-button-primary"
              target="_blank"
              rel="noopener noreferrer"
              href={currentFund.fund_page_link}
            >
              Invest now
            </a>
          )}
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-6 border-b border-border10 pb-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              <figure className="relative isolate size-16 shrink-0 overflow-hidden rounded-full bg-surface10">
                <img
                  src={currentFund.avatar_url}
                  alt={currentFund.name}
                  className="absolute inset-0 size-full object-cover object-center"
                />
              </figure>
              <div className="w-full">
                <h2 className="w-full text-4xl">{currentFund.name}</h2>
                <p className="mt-2 text-sm sm:mt-0">GP: {currentFund.gp_name}</p>
              </div>
            </div>
            <p>{currentFund.thesis}</p>
          </div>

          <div className="pt-6">
            <h3 className="mb-4 font-semibold text-lg sm:mb-0">Investment details</h3>
            <div className="grid w-full sm:grid-cols-2 md:grid-cols-3">
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">MIN. SUBSCRIPTION</h4>
                <p className="font-semibold">${(currentFund.min_subscription / 1000000).toFixed(1)}M</p>
              </div>
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">MIN. PERIOD</h4>
                <p className="font-semibold">{currentFund.min_period} quarters</p>
              </div>
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">TOTAL INVESMENT AMOUNT</h4>
                <p className="font-semibold">{minInvestment}</p>
              </div>
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">CARRY</h4>
                <p className="font-semibold">{currentFund.base_carry}%</p>
              </div>
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">MGMT. FEE</h4>
                <p className="font-semibold">{currentFund.management_fee_percentage}%</p>
              </div>
              <div className="py-2 sm:border-md sm:py-6">
                <h4 className="text-xs text-slate-600">ADMIN FEE</h4>
                <p className="font-semibold">{currentFund.admin_fees}%</p>
              </div>

            </div>
              <hr className="w-full"/>
          </div>

          <div>
            {currentFund.tagline && (
              <div className="pt-6">
                <h3 className="mb-4 font-semibold text-lg ">Fund overview</h3>
                <p className="">{currentFund.tagline}</p>
              </div>
            )}  
          </div>

          <div className="my-6">
            <h3 className="mb-4 font-semibold text-lg sm:mb-0">Select Track Record</h3>
            {currentFund.past_investments.length > 0 ? (
              <ul className="list-disc py-4 grid grid-cols-2">
                {currentFund.past_investments.map((investment, index) => (
                  <div key={index}>
                    <ul className="py-2">{investment}</ul>
                    <hr className="w-4/5" />
                  </div>
                ))}
              </ul>
            ) : (
              <p className="py-4">No past investments listed.</p>
            )}
          </div>


          <div className="flex  mt-4 fixed bottom-0 gap-4 py-4 bg-white w-full">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="bg-gray-200 text-black p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 15l-7-7-7 7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex == (funds.length -1)}
              className="bg-gray-200 text-black p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 9l7 7 7-7"
                />
              </svg>
            </button>
            <div>
              {(currentIndex < funds.length - 1 ) && (
                <div>
                  <p className="font-medium text-sm">Next fund</p>
                  <p className="text-sm">{nextFund.name}</p>
                </div>
              )}  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FundDetailsList = ({ funds }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <FundDetails
      funds={funds}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
    />
  );
};

export default FundDetailsList;
