import React from 'react'

const ForgetPassword = () => {
   return (
      <div className="w-screen h-screen bg-[#55D6C2] flex items-center justify-center">
         <div className="bg-[#EFEDED80] rounded-lg shadow-md p-8 px-10 w-[500px]">
            <div className='flex flex-col justify-center items-center gap-6 p-8'>
               <p className="text-center mb-4">
                  Password reset functionality is not available in this demo.
               </p>
               <div className='mb-3'>
                  <input className='w-[320px] h-10 p-2 border border-black' placeholder='Email' />
               </div>
               <button className='py-2 px-6 min-w-[160px] text-white bg-[#03CC17] rounded-lg'>
                  Submit
               </button>
               <button className='py-2 px-6 min-w-[160px] text-white bg-[#296EF2] rounded-lg'>
                  Sign In
               </button>
            </div>
         </div>
      </div>
   )
}

export default ForgetPassword