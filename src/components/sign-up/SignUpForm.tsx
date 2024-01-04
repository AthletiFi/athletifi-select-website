import Image from 'next/image';
import React, { useState } from 'react';
import { ButtonWhiteArrow, UnderLIneText } from '../common/Icon';
import { PostRequestHandler } from '../common/api/Api';
import { PostSummerSelectData } from '../common/api/ApiUrls';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    parentFirstName: '',
    playerFirstName: '',
    currentTeam: '',
    playerLastName: '',
    parentLastName: '',
    playerDOB: '',
    playerGender: '',
    phoneNumber: '',
    streetAddress: '',
    city: '',
    zipCode : '',	
    state: '',
  };
  const [data, setData] = useState(initialState);

  console.log(data)

  const formHandler = async (e: any) => {
    e.preventDefault();
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
      const { response, data } = await PostRequestHandler(PostSummerSelectData(), formDetails);
  
      if (data) {
        toast('✅ Thanks for registering! You will receive an email with next steps soon.', {
          position: 'bottom-left',
        });
        setData(initialState);
      } else if (response.status === 400) {
        // Handling 400 status for unique constraint violation
        toast.error('The email address you entered is already in use. Please use a different email.', {
          position: 'bottom-left',
        });
      } else {
        // Handle other no-data response scenarios
        toast.error('Form submitted, but no response received. Please check your input.', {
          position: 'bottom-left',
        });
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
    <section className="py-8 sm:py-[64px] lg:pt-[100px] xl:pt-[145px] lg:pb-[100px] xl:pb-[139px] relative z-20 before:content-[''] before:absolute before:w-[457px] before:h-[457px] before:top-2 before:-left-40 before:bg-shadow_blue before:blur-[111px] before:opacity-25 before:-z-10 before:rounded-full overflow-hidden">
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
                  Registration Form
                  <span className='absolute -bottom-3 left-0'>
                    <UnderLIneText />
                  </span>
                </span>
              </h2>
              <p className='font-Segoe font-normal text-md md:max-w-[365px] text-center lg:text-start text-[#FDFEFF] mx-auto lg:ms-0 leading-[27px] sm:pt-4 md:pt-3'>
                The <span className='font-bold'>Summer Select '24</span> is our inaugural program for the AthletiFi
                Select series. It will be the first of many seasonal and
                specialized training opportunities that focus on individual
                growth, team dynamics, and strategic understanding of the game.
              </p>
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
                  <label
                    className={formLabel}
                    htmlFor='playerFirstName'
                  >
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
                  {/* DOB INPUT*/}
                  <label
                    className={formLabel}
                    htmlFor='DOB'
                  >
                    Player Date of Birth (DOB)
                  </label>
                  <input
                    required
                    value={data.playerDOB}
                    type='date'
                    placeholder='Date of Birth'
                    className={formInput}
                    id='DOB'
                    onChange={(e) =>
                      setData({
                        ...data,
                        playerDOB: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='flex flex-col mt-6'>
                  {/* GENDER INPUT */}
                  <label
                    className={formLabel}
                    htmlFor='gender'
                  >
                    Gender
                  </label>
                  <select
                    required
                    value={data.playerGender}
                    className={formInput}
                    id='playerGender'
                    onChange={(e) =>
                      setData({
                        ...data,
                        playerGender: e.target.value,
                      })
                    }
                  >
                    <option value=''>Select Gender</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Prefer not to say'>Prefer not to say</option>
                  </select>
                </div>
                <div className='flex flex-col mt-6'>
                  {/* CURRENT TEAM INPUT */}
                  <label
                    className={formLabel}
                    htmlFor='currentTeam'
                  >
                    Current Team (If Any)
                  </label>
                  <input
                    value={data.currentTeam}
                    type='text'
                    placeholder='Team (optional)'
                    className={formInput}
                    id='currentTeam'
                    onChange={(e) =>
                      setData({
                        ...data,
                        currentTeam: e.target.value,
                      })
                    }
                  />
                </div>
                {/* Your Information Sub-header */}
                <h3 className='font-HelveticaNeueMedium text-2xl text-[#FDFEFF] mt-10'>
                  Parent Information
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
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className={formInput}
                  />
                </div>
                <div className='flex flex-col mt-6'>
                  {/* PARENT NAME INPUT */}
                  <label
                    className={formLabel}
                    htmlFor='parentFirstName'
                  >
                    Your Name
                  </label>
                  <div className='flex flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                      <input
                        required
                        value={data.parentFirstName}
                        type='text'
                        placeholder='First Name'
                        className={formInput}
                        id='parentFirstname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            parentFirstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                      <input
                        required
                        value={data.parentLastName}
                        type='text'
                        placeholder='Last Name'
                        className={formInput}
                        id='parentLastname'
                        onChange={(e) =>
                          setData({
                            ...data,
                            parentLastName: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Phone Number */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='phoneNumber' className={formLabel}>
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    value={data.phoneNumber}
                    onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                    className={formInput}
                  />
                </div>

                {/* Street Address */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='streetAddress' className={formLabel}>
                    Street Address
                  </label>
                  <input
                    required
                    type='text'
                    id='streetAddress'
                    placeholder='Street Address'
                    value={data.streetAddress}
                    onChange={(e) => setData({ ...data, streetAddress: e.target.value })}
                    className={formInput}
                  />
                </div>

                {/* City */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='city' className={formLabel}>
                    City
                  </label>
                  <input
                    required
                    type='text'
                    id='city'
                    placeholder='City'
                    value={data.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    className={formInput}
                  />
                </div>

                {/* Zip Code */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='zipCode' className={formLabel}>
                    Zip Code
                  </label>
                  <input
                    required
                    type='text'
                    id='zipCode'
                    placeholder='Zip Code'
                    value={data.zipCode}
                    onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                    className={formInput}
                  />
                </div>

                {/* State Dropdown */}
                <div className='flex flex-col mt-6'>
                  <label htmlFor='state' className={formLabel}>
                    State
                  </label>
                  <select
                    required
                    id='state'
                    value={data.state}
                    onChange={(e) => setData({ ...data, state: e.target.value })}
                    className={formInput}
                  >
                    <option value=''>Select State</option>
                    <option value='Pennsylvania'>Pennsylvania</option>
                    <option value='New Jersey'>New Jersey</option>
                    <option value='Delaware'>Delaware</option>
                    <option value='New York'>New York</option>
                    <option value='Alabama'>Alabama</option>
                    <option value='Alaska'>Alaska</option>
                    <option value='Arizona'>Arizona</option>
                    <option value='Arkansas'>Arkansas</option>
                    <option value='California'>California</option>
                    <option value='Colorado'>Colorado</option>
                    <option value='Connecticut'>Connecticut</option>
                    <option value='Delaware'>Delaware</option>
                    <option value='Florida'>Florida</option>
                    <option value='Georgia'>Georgia</option>
                    <option value='Hawaii'>Hawaii</option>
                    <option value='Idaho'>Idaho</option>
                    <option value='Illinois'>Illinois</option>
                    <option value='Indiana'>Indiana</option>
                    <option value='Iowa'>Iowa</option>
                    <option value='Kansas'>Kansas</option>
                    <option value='Kentucky'>Kentucky</option>
                    <option value='Louisiana'>Louisiana</option>
                    <option value='Maine'>Maine</option>
                    <option value='Maryland'>Maryland</option>
                    <option value='Massachusetts'>Massachusetts</option>
                    <option value='Michigan'>Michigan</option>
                    <option value='Minnesota'>Minnesota</option>
                    <option value='Mississippi'>Mississippi</option>
                    <option value='Missouri'>Missouri</option>
                    <option value='Montana'>Montana</option>
                    <option value='Nebraska'>Nebraska</option>
                    <option value='Nevada'>Nevada</option>
                    <option value='New Hampshire'>New Hampshire</option>
                    <option value='New Jersey'>New Jersey</option>
                    <option value='New Mexico'>New Mexico</option>
                    <option value='New York'>New York</option>
                    <option value='North Carolina'>North Carolina</option>
                    <option value='North Dakota'>North Dakota</option>
                    <option value='Ohio'>Ohio</option>
                    <option value='Oklahoma'>Oklahoma</option>
                    <option value='Oregon'>Oregon</option>
                    <option value='Pennsylvania'>Pennsylvania</option>
                    <option value='Rhode Island'>Rhode Island</option>
                    <option value='South Carolina'>South Carolina</option>
                    <option value='South Dakota'>South Dakota</option>
                    <option value='Tennessee'>Tennessee</option>
                    <option value='Texas'>Texas</option>
                    <option value='Utah'>Utah</option>
                    <option value='Vermont'>Vermont</option>
                    <option value='Virginia'>Virginia</option>
                    <option value='Washington'>Washington</option>
                    <option value='West Virginia'>West Virginia</option>
                    <option value='Wisconsin'>Wisconsin</option>
                    <option value='Wyoming'>Wyoming</option>
                  </select>
                </div>
                {/* CHECKBOX */}
                <div className='flex items-center gap-2 mt-4 sign_up_checkbox'>
                  <input
                    type='checkbox'
                    id='Privacy-Policy'
                    onChange={(event) => setChecked(event.target.checked)}
                  />
                  <label
                    htmlFor='Privacy-Policy'
                    className='font-Segoe font-normal text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px] '
                  >
                    I agree to all Terms and Privacy Policy
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
                    {loading ? 'Loading...' : ' Sign Up'}

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
              src='/assets/img/webp/signup-img.webp'
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


const formLabel = 'font-Segoe font-normal group text-md md:max-w-[365px] text-[#FDFEFF] opacity-80 leading-[27px]';
const formInput = 'font-Sugoe font-normal input:-webkit-autofill focus:border-[white] autofill:none text-base text-[#FDFEFF] leading-6 py-5 px-4 bg-transparent w-full lg:max-w-[400px] mt-[5px] border border-1 border-[#FFFFFF40] outline-none';