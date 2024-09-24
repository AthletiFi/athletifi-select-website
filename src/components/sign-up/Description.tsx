import React from 'react';
import Link from 'next/link';

const Description = () => {
  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
      <h3 className='text-md font-HelveticaNeueMedium mt-4'>Winter Select Details:</h3>
      <ul className='list-none pl-4 opacity-80 text-primary'>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Who:</span> 👥 Boys & girls, ages U9 - U16 (2009 - 2016 birth years)</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">What:</span> 🏋️‍♂️ Intensive Training (1 session/week) + Competitive Play (7-game league + playoffs)</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">When:</span> 🗓️ November 13, 2024 - January 2025
          <ul className='list-none pl-6 mt-1'>
            <li>Training: Wednesdays, 6:00 PM to 7:30 PM</li>
            <li>Games: Schedule varies by age group (see below)</li>
          </ul>
        </li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Where:</span> </li>
        <ul className='list-none pl-6 mt-1'>
            <li>📍 Training sessions: Arcadia University, Glenside, PA</li>
            <li>📍 Games: YSC Sports, Wayne, PA</li>
          </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">League:</span> 🏆 YSC Winter League</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Price:</span> 💰 $400.00</li>
      </ul>

      <h3 className='text-md font-HelveticaNeueMedium mt-4'>Game Schedule at YSC:</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4 opacity-80 text-primary'>
        <div>
          <p className='mb-1'>- Boys U8-U11: Saturdays</p>
          <p className='mb-1'>- Boys U12-U13: Fridays</p>
          <p className='mb-1'>- Boys U14 and above: Saturdays</p>
        </div>
        <div>
          <p className='mb-1'>- Girls U8-U10: Mondays</p>
          <p className='mb-1'>- Girls U11: Tuesdays</p>
          <p className='mb-1'>- Girls U12-U13: Fridays</p>
          <p className='mb-1'>- Girls U14 and above: Sundays</p>
        </div>
      </div>

      <p className='text-md font-HelveticaNeueMedium mt-4 text-primary'>
        👨‍👩‍👧‍👦 Signing up more than one player? Siblings get a 20% off discount!
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