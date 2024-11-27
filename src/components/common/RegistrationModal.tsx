import React from 'react';

const RegistrationModal = ({
  setShowModal
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div className="bg-darkBackGround shadow-lg w-[550px] h-72 flex rounded-[30px] opacity-95 relative">
        <button 
          onClick={() => setShowModal(false)}
          className="text-offwhite z-20 absolute top-0 right-0 mr-6 mt-4 cursor-pointer text-xl"
        >
          ✕
        </button>
        <div className="relative flex items-center justify-center w-1/4">
          <span className="text-skyblue z-20 absolute text-4xl">✓</span>
          <div className="bg-skyblue opacity-30 w-full h-full rounded-l-[30px]"></div>
        </div>
        <div className="flex flex-col justify-around p-4 w-full">
          <h2 className="text-lg text-[#FDFEFF] mt-4">Registration Successful!</h2>
          <p className="text-md font-extralight text-[#FDFEFF] -mt-4">
            Thanks for registering for AthletiFi Select! You will receive an email with next steps soon.
          </p>
          <div className="flex justify-end mt-4">
            <button
              className="text-basemd text-primary font-extralight py-px mr-6 border-b border-skyblue hover:text-skyblue"
              onClick={() => setShowModal(false)}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;