import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <div className="error-page absolute top-1/3 left-1/3 text-white bg-sky-600 font-bold w-96 rounded-3xl shadow-2xl shadow-blue-400 p-20 mx-auto">
               <h2 className="text-center">Oops! 404 NOT FOUND</h2><br></br>
               <Link to='/'> <button className='rounded-[8px] text-[#FFFFFF] w-[250px] font-extrabold text-[16px] px-6 py-2 bg-red-600' type="button">Back to Homepage</button></Link>
      </div>
    </div>
  )
}

export default Error
