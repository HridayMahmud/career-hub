 import locations from '../../assets/icons/location2.png'
import money from '../../assets/icons/money.png'
// import google from '../../assets/logo/google.png'
// import netflix from '../../assets/logo/netflix.png'
// import tesla from '../../assets/logo/tesla.png'
const Featuredjobs = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;

  return (
    <div className='mt-8'>
    

      <div className="featuredjobs-des ">
               <div className="border-2 p-6 ">
               <img className='w-[150px] h-[70px]' src={logo} alt="" />
               <h1 className='mb-2 font-extrabold text-[24px]'>{job_title}</h1>
               <h2 className='mb-4 font-semibold text-xl text-[#757575]'>{company_name}</h2>
               <div className='flex gap-4 mb-4'>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>{remote_or_onsite}</button>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>{job_type}</button>
               
               </div>
               
               <div className='flex  gap-6'>
               <div className='flex'>
                   <img className='w-9 h-9' src={locations} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>{location}</p>
               </div>

               <div className='flex'>
                   <img  className='w-9 h-9' src={money} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Salary : {salary}</p>
               </div>
               </div>
               <button className='px-3 mt-4 py-2 font-extrabold text-white text-xl rounded-[4px] bg-[#7E90FE] ' type="button">View Details</button>
               </div>

               {/* <div className="border-2 p-10 ">
               <img src={netflix} alt="" />
               <h1 className='mb-2 font-extrabold text-[24px]'>Senior Product Designer</h1>
               <h2 className='mb-4 font-semibold text-xl text-[#757575]'>Netflix</h2>
               <div className='flex gap-4 mb-4'>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Onsite</button>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Full Time</button>
               
               </div>
               
               <div className='flex  gap-6'>
               <div className='flex'>
                   <img src={location} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Dhaka,Bangladesh</p>
               </div>

               <div className='flex'>
                   <img src={money} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Salary : 100K - 150K</p>
               </div>
               </div>
               <button className='px-3 mt-4 py-2 font-extrabold text-white text-xl rounded-[4px] bg-[#7E90FE] ' type="button">View Details</button>
               </div>
               <div className="border-2 p-10 ">
               <img src={tesla} alt="" />
               <h1 className='mb-2 font-extrabold text-[24px]'>Software Engineer</h1>
               <h2 className='mb-4 font-semibold text-xl text-[#757575]'>Tesla</h2>
               <div className='flex gap-4 mb-4'>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Onsite</button>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Full Time</button>
               
               </div>
               
               <div className='flex  gap-6'>
               <div className='flex'>
                   <img src={location} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Dhaka, Bangladesh</p>
               </div>

               <div className='flex'>
                   <img src={money} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Salary : 100K - 150K</p>
               </div>
               </div>
               <button className='px-3 mt-4 py-2 font-extrabold text-white text-xl rounded-[4px] bg-[#7E90FE] ' type="button">View Details</button>
               </div>
               <div className="border-2 p-10 ">
               <img src={google} alt="" />
               <h1 className='mb-2 font-extrabold text-[24px]'>Technical Database Engineer</h1>
               <h2 className='mb-4 font-semibold text-xl text-[#757575]'>Google LLC</h2>
               <div className='flex gap-4 mb-4'>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Remote</button>
               <button type='button' className='px-5 border-2 rounded-[4px] py-2 font-extrabold text-[16px] text-[#7E90FE]'>Full Time</button>
               
               </div>
               
               <div className='flex gap-6'>
               <div className='flex '>
                   <img src={location} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Dhaka, Bangladesh</p>
               </div>

               <div className='flex'>
                   <img src={money} alt="" />
                   <p className='text-xl font-semibold text-[#757575]'>Salary : 100K - 150K</p>
               </div>
               </div>
               <button className='px-3  mt-4 py-2 font-extrabold text-white text-xl rounded-[4px] bg-[#7E90FE] ' type="button">View Details</button>
               </div> */}
      </div>
    </div>
  )
}

export default Featuredjobs
