import React, { useEffect, useState } from 'react'
import Jobcategory from '../JobCategory/Jobcategory';

const Jobcategories = () => {
    const [categories,setCategories] = useState([])

    const fetchcategories = async()=>{
        const res = await fetch('data/categories.json');
        const data = await res.json();
        console.log(data);
        setCategories(data);
    }
    useEffect(()=>{
               fetchcategories();
    },[])
  return (
    <div>
      <div className="category-title text-center mt-8">
               <h1 className='font-extrabold text-xl'>Job Category List</h1>
               <p className='font-medium text-[16px]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
         </div>
       <div className=' flex md:flex-row flex-col justify-between mt-8'>
               {
                categories.map(category=><Jobcategory key={category.id} category = {category}></Jobcategory>)
               }
       </div>
    </div>
  )
}

export default Jobcategories
