import React from 'react'
import Homepage from '../Homepage/Homepage'
import Jobcategory from '../JobCategory/Jobcategory'
import Featuredjobs from '../Featuredjobs/Featuredjobs'
import Featurejobsdata from '../Featurejobsdata/Featurejobsdata'

const Statistics = () => {
  return (
    <div className='px-[120px] '>
     <Homepage></Homepage>
     <Jobcategory></Jobcategory>
     <Featurejobsdata></Featurejobsdata>
    </div>
  )
}

export default Statistics
