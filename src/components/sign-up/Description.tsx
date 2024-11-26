import React from 'react';
import Link from 'next/link';
import TournamentSection from './TournamentSection';

const Description = () => {
  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
      <h3 className='text-md font-HelveticaNeueMedium mt-4'>Summer Select 2025 Details:</h3>
      <ul className='list-none pl-4 opacity-80 text-primary'>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Who:</span> 👥 Boys & girls, ages U9 - U15 (2010 - 2017 birth years)</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">What:</span> 🏋️‍♂️ Comprehensive summer program including:</li>
        <ul className='list-none pl-6 mt-1'>
          <li>• Intensive training sessions (12 total sessions)</li>
          <li>• Tournament participation</li>
          <li>• Performance tracking via AthletiFi Dashboard</li>
          <li>• Digital player cards for highlights and stats</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">When:</span> 🗓️ June 10 - July 27, 2025</li>
        <ul className='list-none pl-6 mt-1'>
          <li>• Training: Tuesdays and Thursdays, 6:00 PM - 7:30 PM</li>
          <li>• Break week: July 1-5 (Independence Day)</li>
          <li>• Six weeks total (two sessions per week)</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Where:</span></li>
        <ul className='list-none pl-6 mt-1'>
          <li>📍 All training sessions: Arcadia University</li>
          <li className='pl-4'>Jean Lenox West Field</li>
          <li className='pl-4'>450 South Easton Road, Glenside, PA 19038</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Tournaments:</span> 🏆</li>
        <div className='pl-6 mt-2 mb-4'>
          <TournamentSection />
        </div>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Program Highlights:</span> ⭐</li>
        <ul className='list-none pl-6 mt-1'>
          <li>• Elite coaching from Eastern PA's top coaches</li>
          <li>• Individual skill development focus</li>
          <li>• Real game experience through tournaments</li>
          <li>• Performance tracking via AthletiFi platform</li>
          <li>• Digital player cards with stats and highlights</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Price and Discounts:</span> 💰</li>
        <ul className='list-none pl-6 mt-1'>
          <li>💸 Regular Registration: $500</li>
          <li>🐦 Early Bird Discount: Save $50 (Ends February 1st)</li>
          <li>👨‍👩‍👧‍👦 Family Discount: extra 10% off for siblings</li>
        </ul>
      </ul>
      <p className='font-Segoe font-normal text-md text-primary opacity-80 text-left mt-4'>
      ⚠️ To claim the family discount, email us at{' '}
        <Link href="mailto:welcome@athletifiselect.com?subject=Just signed up! I'd like the sibling discount please">
          welcome@athletifiselect.com
        </Link>
        {' '} after signing up and list the names of each child.
      </p>

      <div className='bg-darkgray p-4 rounded-lg mt-6'>
        <p className='text-md font-bold text-skyblue'>🌟 Program Success</p>
        <p className='mt-2'>Building on our incredible 2024 season where AthletiFi Select teams achieved remarkable success, including multiple tournament championships!</p>
      </div>

    </div>
  );
};

export default Description;