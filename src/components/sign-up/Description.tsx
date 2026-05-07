import React from 'react';
import Link from 'next/link';
import TournamentSection from './TournamentSection';

const Description = () => {
  // Get the current date
  const currentDate = new Date();
  // Define the target date
  const targetDate = new Date('August 1, 2026');

  // Determine whether to show the early bird discount
  const showEarlyBirdDiscount = currentDate < targetDate;

  return (
    <div className='font-Segoe font-normal text-md leading-7 text-left pb-0.5 text-[#FDFEFF] m-0 sm:pt-4 lg:max-w-[769px] mx-auto sm:px-6 px-3 xl:px-0 relative z-20 opacity-80'>
      <h3 className='text-md font-HelveticaNeueMedium mt-4'>Fall 2026 Program Details:</h3>
      <ul className='list-none pl-4 opacity-80 text-primary'>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Who:</span> 👥 Boys & girls, ages U10 - U16</li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">What:</span> 🏋️‍♂️ Competitive fall program including:</li>
        <ul className='list-none pl-6 mt-1'>
          <li>⚽︎ Structured training sessions</li>
          <li>⚽︎ Tournament participation</li>
          <li>⚽︎ Video review and individual skill development</li>
          <li>⚽︎ Competitive match preparation</li>
        </ul>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">When:</span> 🗓️ Fall 2026 season kicks off the last week of August 2026</li>
        <ul className='list-none pl-6 mt-1'>
          {/* UNCOMMENT BELOW */}
          <li>⚽︎ Tryout schedules and training times are shared directly with interested families</li>
          {/* <li>• Break week: July 1-5 (Independence Day)</li> */}
          <li>⚽︎ Limited roster spots are available by age group</li>
        </ul>
        <li className='bg-darkgray p-5 rounded-[20px] mt-4 mb-4 border border-[#ffffff10]'>
          <p className="font-HelveticaNeueMedium text-skyblue">📍 Location for Tryouts & Training</p>
          <p className='mt-2 text-primary'>
            Arcadia University, 450 South Easton Road, Glenside, PA 19038
          </p>
          <p className='mt-2 text-sm opacity-80'>
            Both tryouts and regular training sessions are held at this location.
          </p>
        </li>
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Tournaments:</span> 🏆</li>
        <li className='pl-6 mt-2 mb-4'>
          <TournamentSection />
        </li>
        {/* <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Program Highlights:</span> ⭐</li>
        <ul className='list-none pl-6 mt-1'>
          <li>• Elite coaching from Eastern PA's top coaches</li>
          <li>• Individual skill development focus</li>
          <li>• Real game experience through tournaments</li>
          <li>• Video review and tactical feedback</li>
          <li>• Year-round training resources</li>
        </ul> */}
        <li className='mb-2'>- <span className="font-HelveticaNeueMedium">Tryout Inquiries:</span> 💬</li>
        <ul className='list-none pl-6 mt-1'>
          <li>💸 Reach out for roster availability and next steps</li>
          {showEarlyBirdDiscount && (
            <li>🐦 Early inquiries are encouraged while age-group spots remain open</li>
          )}
          <li>👨‍👩‍👧‍👦 Families with multiple players are welcome to inquire together</li>
          <li>
            <p className='font-Segoe font-normal text-sm text-primary opacity-80 text-left mt-4'>
              For tryout questions, email us at{' '}
              <Link href="mailto:welcome@athletifiselect.com?subject=Fall 2026 Tryout Inquiry">
                welcome@athletifiselect.com
              </Link>
              .
            </p>
          </li>
        </ul>
      </ul>
      {/* <div className='bg-darkgray p-4 rounded-lg mt-6'>
        <p className='text-md font-bold text-skyblue'>🏆 Program Success 🏆</p>
        <p className='mt-2'>Building on our incredible 2024 season where AthletiFi Select teams achieved remarkable success, with all teams winning a tournament championship!</p>
      </div> */}
    </div>
  );
};

export default Description;
