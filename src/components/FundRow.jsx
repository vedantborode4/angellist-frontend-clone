import React from 'react';

const FundCard = ({ fund }) => {
  const {
    name,
    avatar_url,
    gp_name,
    min_subscription,
    min_period,
    base_carry,
    max_carry,
    management_fee_percentage,
  } = fund;

  const formattedSubscription = (min_subscription / 100000) + 'K';
  const formattedPeriod = `${min_period} ${min_period === 1 ? 'quarter' : 'quarters'}`;
  let formattedCarry;
  if (base_carry === max_carry) {
    formattedCarry = `${base_carry}%`;
  } else {
    formattedCarry = `${base_carry}% - ${max_carry}%`;
  }

  return (
    <div className="grid text-sm min-h-24 cursor-pointer scroll-mt-[116px]  border-b grid-cols-[1fr_90px_90px] sm:grid-cols-[2fr_repeat(3,1fr)] md:grid-cols-[2fr_repeat(4,1fr)] lg:grid-cols-[2fr_1.5fr_repeat(4,1fr)] xl:grid-cols-[2fr_1.5fr_repeat(5,1fr)] items-stretch hover:bg-surface5">
      <div className="flex items-center py-6 pr-4 text-body-200 sm:text-body-300">
        <div className="flex items-center gap-3 font-550">
          <figure className="relative isolate size-12 shrink-0 overflow-hidden rounded-full bg-surface10 sm:size-14 xl:size-16">
            <img
              src={avatar_url}
              alt={name}
              className="absolute inset-0 size-full object-cover object-center"
            />
          </figure>
          {name}
        </div>
      </div>



      <div className="flex items-center py-6 pr-4 text-body-200 sm:text-body-300">
        <span className="line-clamp-2">{gp_name}</span>
      </div>

      <div className="flex items-center py-6 pr-4 text-body-200 sm:text-body-300">
        ${formattedSubscription}&nbsp;/&nbsp;<span className="hidden sm:inline">quarter</span>
        <span className="sm:hidden">qtr</span>        
      </div>

      <div className=" items-center py-6 pr-4 text-body-200 sm:text-body-300 hidden md:flex">
        {formattedPeriod}
      </div>

      <div className=" items-center py-6 pr-4 text-body-200 sm:text-body-300 hidden lg:flex">
        {formattedCarry}
      </div>

      <div className=" items-center py-6 pr-4 text-body-200 sm:text-body-300 hidden xl:flex">
        {management_fee_percentage}%
      </div>

      <div className=" items-center py-6 pr-4 text-body-200 sm:text-body-300 hidden xl:flex">
        {fund.tags && fund.tags.length > 0 ? (
          fund.tags.map((tag, index) => (
            <div className="">
              <div className='items-centercentre '>
                <span key={index} className="tag bg-gray-100 rounded-sm p-1 px-2 gap-2 text-xs  ">{tag}</span>
              </div>
            </div>
          ))
        ) : (
          <span></span> 
        )}
      </div>
    </div>
  );
};

export default FundCard;
