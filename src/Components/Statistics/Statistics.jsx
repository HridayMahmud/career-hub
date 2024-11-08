import React from 'react'
import Homepage from '../Homepage/Homepage'

import Featurejobsdata from '../Featurejobsdata/Featurejobsdata'
import Jobcategories from '../Jobcategories/Jobcategories'

const Statistics = () => {
  return (
    <div className='px-[120px] '>
     <Homepage></Homepage>
     <Jobcategories></Jobcategories>
     <Featurejobsdata></Featurejobsdata>
    </div>
  )
}

export default Statistics
