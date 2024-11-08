import React from 'react'
import userimage from '../../assets/images/user.png'
const Homepage = () => {
  return (
    <div className=''>
       <div className="header-body mt-[148px] flex justify-center items-center gap-20 ">
               <div className="text-container py-12  w-[580px]">
               <h1 className='font-bold text-[60px] text-[#1A1919]'>One Step Closer To Your </h1>
               <h2 className='font-bold mb-6 text-[60px] text-[#7E90FE]'>Dream Job</h2>
               <p className='mb-8 text-[18px] font-medium'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='rounded-[8px] text-[#FFFFFF] font-extrabold text-xl px-8 py-4 bg-[#7E90FE]' type="button">Get Started</button>
               </div>

               <div className="user-image">
               <img className='w-[800px] h-[650px]' src={userimage} alt="user-image" />
               </div>
               </div>
    </div>
  )
}

export default Homepage
