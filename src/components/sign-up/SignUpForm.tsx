import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { ButtonWhiteArrow, UnderLIneText } from '../common/Icon';
import { PostRequestHandler } from '../common/api/Api';
import { PostSummerSelectData } from '../common/api/ApiUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { phone } from 'phone';

// Interface to describe the structure of an API error
interface ApiError extends Error {
  // The response property is specific to HTTP request errors
  response?: {
    status: number; // The HTTP status code
    data?: any; // The response data (structure depends on the API)
  };
}

const SignUpForm = () => {
  // CUSTOM INPUT-CHECK
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialState = {
    email: '',
    parentName: '',
    playerFirstName: '',
    playerLastName: '',
    playerAgeGroup: '',
    phoneNumber: '',
  };
  const [data, setData] = useState(initialState);

  const formHandler = async (e: any) => {
    e.preventDefault();
    const phoneNumber = phone(data.phoneNumber);
    if (!phoneNumber.isValid) {
      toast.error('Please enter a valid phone number.', {
        position: 'bottom-left',
      });
      return;
    }
    const formDetails = { data };
    setLoading(true);

    if (!checked) {
      toast.error('Please agree to the terms and privacy policy to proceed.', {
        position: 'bottom-left',
      });
      setLoading(false);
      return;
    }

    try {
      const { response, data } = await PostRequestHandler(
        PostSummerSelectData(),
        formDetails
      );

      if (data) {
        toast.success(
          'Thanks for your interest! One of our coaches will reach out shortly with tryout details.',
          {
            position: 'bottom-left',
          }
        );
        setData(initialState);
        setChecked(false);
      } else if (response.status === 400) {
        // Handling 400 status for unique constraint violation
        toast.error(
          'There was an error submitting your application. If this persists please email us at welcome@athletifiselect.com',
          {
            position: 'bottom-left',
          }
        );
      } else {
        // Handle other no-data response scenarios
        toast.error(
          'Form submitted, but no response received. Please check your input.',
          {
            position: 'bottom-left',
          }
        );
      }
    } catch (error: unknown) {
      // Handling other types of errors
      toast.error('An unexpected error occurred. Please try again.', {
        position: 'bottom-left',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-8 sm:pb-[64px] sm:pt-[32px] lg:pt-[0px] xl:pt-[50px] lg:pb-[100px] xl:pb-[139px] relative z-20 overflow-hidden">
      {/* GRID-LINE IMG */}
      <Image
        className='lg:w-[462px] lg:h-[452px] w-40 h-40 lg:top-10 lg:-left-10 absolute -z-20 opacity-40'
        src='/assets/img/svg/news-grid-line.svg'
        width={400}
        height={448}
        alt='grid-line'
      />
      <div className='container md:max-w-full xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto px-3 relative z-10'>
        <div className='flex justify-between flex-wrap grid-cols-2 w-full'>
          <div className='lg:w-1/2 w-full'>
            <div className='flex flex-col items-center lg:items-start'>
              <h2 className='font-HelveticaNeueMedium font-medium text-[24px] md:text-5xl sm:text-4xl leading-[60px] text-[#FDFEFF] md:mb-3'>
                <span className='relative'>
                  Request Tryout Information
                  <span className='absolute -bottom-3 left-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <form
                action='submit'
                onSubmit={(e) => formHandler(e)}
                className='w-full sm:w-3/4'
              >
                {/* Your Information Sub-header */}
                <h3 className='font-HelveticaNeueMedium text-2xl text-[#FDFEFF] mt-10'>
                  Player Information
                </h3>
                <div className='flex flex-col mt-6'>
                  {/* PLAYER NAME INPUT */}
                  <label className={formLabel} htmlFor='playerFirstName'>
                    Player Name
                  </label>
                  <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <input
                        required
                        value={data.playerFirstName}
                        type='text'
                        placeholder='First Name'
                        className={formInput}
                        id='playerFirstname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            playerFirstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <input
                        required
                        value={data.playerLastName}
                        type='text'
                        placeholder='Last Name'
                        className={formInput}
                        id='playerLastname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            playerLastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col mt-6'>
                  {/* AGE GROUP INPUT */}
                  <label className={formLabel} htmlFor='playerAgeGroup'>
                    Player Age Group
                  </label>
                  <select
                    required
                    value={data.playerAgeGroup}
                    className={`${formInput} bg-darkBackGround`}
                    id='playerAgeGroup'
                    onChange={(e) =>
                      setData({
                        ...data,
                        playerAgeGroup: e.target.value,
                      })
                    }
                  >
                    <option value=''>Select Age Group</option>
                    <option value='U10'>U10</option>
                    <option value='U11'>U11</option>
                    <option value='U12'>U12</option>
                    <option value='U13'>U13</option>
                    <option value='U14'>U14</option>
                    <option value='U15'>U15</option>
                    <option value='U16'>U16</option>
                  </select>
                </div>
                {/* Your Information Sub-header */}
                <h3 className='font-HelveticaNeueMedium text-2xl text-[#FDFEFF] mt-10'>
                  Parent/Guardian Information
                </h3>
                {/* Parent Information Form Fields */}
                <div className='flex flex-col mt-6'>
                  {/* Email Input */}
                  <label htmlFor='email' className={formLabel}>
                    Email
                  </label>
                  <input
                    required
                    type='email'
                    id='email'
                    placeholder='Email'
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    className={formInput}
                  />
                </div>
                <div className='flex flex-col mt-6'>
                  {/* PARENT NAME INPUT */}
                  <label className={formLabel} htmlFor='parentName'>
                    Parent/Guardian Name
                  </label>
                  <input
                    required
                    value={data.parentName}
                    type='text'
                    placeholder='Parent/Guardian Name'
                    className={formInput}
                    id='parentName'
                    onChange={(e) =>
                      setData({
                        ...data,
                        parentName: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Phone Number */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='phoneNumber' className={formLabel}>
                    Phone Number
                  </label>
                  <input
                    required
                    type='tel'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    value={data.phoneNumber}
                    onChange={(e) =>
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                    className={formInput}
                  />
                </div>

                {/* CHECKBOX */}
                <div className="flex items-center gap-2 mt-4 sign_up_checkbox">
                  <input
                    type="checkbox"
                    id="Privacy-Policy"
                    checked={checked}
                    onChange={event => setChecked(event.target.checked)}
                  />
                  <label
                    htmlFor="Privacy-Policy"
                    className="font-Segoe font-normal text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px] "
                  >
                    I agree to the{' '}
                    <Link
                      href="/terms-of-use"
                      className="sign-up__legal-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Terms of Use
                    </Link>{' '}
                    and{' '}
                    <Link
                      href="/privacy-policy"
                      className="sign-up__legal-link"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {/* SIGN UP BUTTON */}
                <div className='flex mt-6 md:mt-8 lg:max-w-[400px]'>
                  <button
                    type='submit'
                    className={`sm:w-full justify-center text-center sm:px-[24px] px-4 sm:py-[14.5px] py-2 flex bg-skyblue text-base font-semibold text-white font-Segoe leading-6 gap-[6px] group border border-skyblue hover:bg-black  join_now_btn transition duration-300 ease-in-out ${
                      checked ? ' bg-skyblue' : ''
                    }`}
                  >
                    {loading ? 'Loading...' : 'Request Tryout Information'}

                    <span className='group-hover:translate-x-3 transition duration-300 ease-out'>
                      <ButtonWhiteArrow />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-3/5 mx-auto w-full relative flex justify-center items-center z-20 before:content-[''] before:absolute before:w-[457px] before:h-[457px] before:-bottom-28 before:-right-40 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-z-10 before:rounded-full">
            {/* FOOTBALL PLAYER IMAGE */}
            <Image
              className='xl:max-w-[658px] xl:h-[610px] lg:absolute lg:right-0 mt-10 lg:mt-0'
              src='/assets/img/webp/signup-biting-medal.webp'
              width={658}
              height={598}
              alt='signUp-image'
            />
          </div>
        </div>
      </div>
      <ToastContainer theme='dark' />
    </section>
  );
};

export default SignUpForm;

// Helper CSS classes
// const formLabel = {formLabel};
// const formInput = {formInput};

const formLabel =
  'font-Segoe font-normal group text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px]';
const formInput =
  'font-Sugoe font-normal input:-webkit-autofill focus:border-[white] autofill:none text-base text-[#FDFEFF] leading-6 py-5 px-4 bg-transparent w-full lg:max-w-[400px] mt-[5px] border border-1 border-[#FFFFFF40] outline-none';
