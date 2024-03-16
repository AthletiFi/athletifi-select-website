import React from 'react';
import Link from 'next/link';


const Description = () => {
  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity=80'>
      <h3 className='text-md font-bold mt-4'>Details:</h3>
      <ul className='list-disc list-inside block pb-2 pl-4'>
        <li>
          Who: Boys & girls, ages U9 - U15 (2009 - 2015 birth years)
        </li>
        <li>
          What: Intensive Training - Two sessions per week for six weeks, totaling 12 sessions.
        </li>
        <li>
          When: 5:30 PM to 7:00 PM on Tuesdays and Thursdays June 11th—July 25th (Note: off for
          July 4 week)
        </li>
        <li>Where: Arcadia University, Jean Lenox West Field, 450 South Easton Road, Glenside, PA</li>
        <li>
          Tournaments: Hershey Summer Classic, EDP Summer Sizzler
        </li>
        {/* <li>Early bird pricing: $450.00</li> */}
        <li>Price: $500.00</li>
      </ul>
      {/* <p className='mt-4'>
        <strong>Early bird pricing ends on January 28</strong> (-10%
        discount, a $50 savings). Spots are limited, so sign up today
        below!
      </p> */}
      <p className='text-md font-bold mt-4 text-primary'>
        Signing up more than one player? Siblings get a 20% off discount!
        </p>
        <p className='font-Segoe font-normal text-md text-primary opacity-80 text-center lg:text-start mt-4'>
          Send us an email at 
          <Link href="mailto:welcome@athletifiselect.com?subject=Just signed up! I'd like the sibling discount please"> welcome@athletifiselect.com </Link>
          after signing up both siblings and let us know you'd like the discount.
              </p>
    </div>
  );
};

export default Description;
