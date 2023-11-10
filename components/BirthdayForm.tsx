import React from 'react';

const BirthdayForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-5">
      <h2 className="text-2xl font-semibold text-center text-gray-700 mb-5">Enter Your Birthday</h2>
      <form className="w-full">
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2 md:w-1/2">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
              First Name
            </label>
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-gray-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="firstName" type="text" placeholder="John" />
          </div>
          <div className="w-full px-2 mt-4 md:mt-0 md:w-1/2">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
              Last Name
            </label>
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-gray-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="lastName" type="text" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full px-2">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="birthday">
              Birthday
            </label>
            <input className="w-full px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-gray-200 rounded shadow appearance-none focus:outline-none focus:bg-white focus:border-purple-500" id="birthday" type="date" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BirthdayForm;