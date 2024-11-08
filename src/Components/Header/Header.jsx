import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
    
      <header className='px-[120px] pt-6'>
               <nav className='flex justify-between items-center'>
                <div className="div1 font-extrabold text-[32px]">
               <h1>CareerHub</h1>
                </div>

               <div className="div2 flex justify-center gap-11 font-bold text-[16px]">
               <NavLink to='/statistics'>Statistics</NavLink>
               <Link to='/appliedjobs'>Appliedjobs</Link>
               <Link to='/blog'>Blog</Link>
               </div>

               <div className="div3">
               <button className='rounded-[8px] text-[#FFFFFF] font-extrabold text-xl px-8 py-4 bg-[#7E90FE]' type="button">Start Applying</button>
               </div>
               </nav>

              
      </header>

    </div>
  )
}

export default Header
