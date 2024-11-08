import React from 'react'
import accounts from '../../assets/icons/accounts.png'
import design from '../../assets/icons/creative.png'
import marketing from '../../assets/icons/marketing.png'
import engineering from '../../assets/icons/chip.png'
const Jobcategory = () => {

  return (
    <div>
      <div className="job-category-list mt-32">
         <div className="category-title text-center">
               <h1 className='font-extrabold text-xl'>Job Category List</h1>
               <p className='font-medium text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
         <div className="category-des flex justify-between mt-8">
               <div className="bg-gray-200 p-10">
               <img src={accounts} alt="" />
               <h1 className='font-extrabold text-xl mt-8'>Account & Finance</h1>
               <p className='font-medium text-[16px]'>300 Jobs Available</p>
               </div>
               <div className="bg-gray-200 p-10">
               <img src={design} alt="" />
               <h1 className='font-extrabold text-xl mt-8'>Creative Design</h1>
               <p className='font-medium text-[16px]'>100+ Jobs Available</p>
               </div>
               <div className="bg-gray-200 p-10">
               <img src={marketing} alt="" />
               <h1 className='font-extrabold text-xl mt-8'>Marketing & Sales</h1>
               <p className='font-medium text-[16px]'>150 Jobs Available</p>
               </div>
               <div className="bg-gray-200 p-10">
               <img src={engineering} alt="" />
               <h1 className='font-extrabold text-xl mt-8'>Engineering Job</h1>
               <p className='font-medium text-[16px]'>224 Jobs Available</p>
               </div>
         </div>
      </div>
    </div>
  )
}

export default Jobcategory
