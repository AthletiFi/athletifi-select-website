import React from 'react';


const Description = () => {
  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity=80'>
      <h3 className='text-md font-bold mt-4'>Details:</h3>
      <ul className='list-disc list-inside block pb-2 pl-4'>
        <li>
          Who: Boys & girls, ages U9 - U15 (2009 - 2015 birth years)
        </li>
        <li>
          What: Intensive Training - Two sessions per week for five weeks, totaling 10 skill-enhancing sessions.
        </li>
        <li>
          When: Weeks of 6/10, 6/17, 6/24, 7/8, & 7/15 (Note: off for
          July 4 week)
        </li>
        <li>Where: Conshohocken, PA</li>
        <li>
          Tournaments: Hershey Summer Classic, Lititz Summer
          Showcase, EDP Summer Sizzler
        </li>
        <li>Early bird pricing: $450.00</li>
      </ul>
      <p className='mt-4'>
        <strong>Early bird pricing ends on January 28</strong> (-10%
        discount, a $50 savings). Spots are limited, so sign up today
        below!
      </p>
    </div>
  );
};

export default Description;
