import React, { useEffect, useState } from 'react'
import Featuredjobs from '../Featuredjobs/Featuredjobs';

const Featurejobsdata = () => {
     const [jobs,setjobs] = useState([]);
     const jobsdata = async()=>{
     const res = await fetch('data/jobs.json');
     const data = await res.json();
     console.log(data.job_title);
     setjobs(data);
     console.log(jobs)
     }
   useEffect(()=>{
     jobsdata();
     },[]);

  return (
    <div className='px-[120px] '>
      <div className="featuredjobs-title  mb-8 mt-8 text-center ">
               <h1 className='font-extrabold text-xl'>Featured Jobs</h1>
               <p className='font-medium text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
       <div className="featuredjobs-data   gap-4 grid md:grid-cols-2 grid-cols-1">
       
        {
        jobs.map(job=><Featuredjobs key={job.id} job ={job} ></Featuredjobs>)
        }
       </div>
    </div>
  )
}

export default Featurejobsdata
