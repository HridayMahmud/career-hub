import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import social from '../../assets/icons/social.png'
const Footer = () => {
  return (
               <footer class=" bg-black  text-white footer flex justify-between items-center bg-base-200 text-base-content p-10">
               <div className="space-y-7">
                <h1 className='font-extrabold text-[32px]'>CareerHub</h1>
                <p className='text-[16px] font-normal'>There are many variations of passages<br></br> of Lorem Ipsum , but the majority have<br></br> suffered alteration in some form.
                </p>
               <div className="anchor flex gap-6">
                {/* <a className='text-xl' href=""><FaFacebook/></a>
                <a className='text-xl' href=""><AiFillTwitterCircle/></a>
                <a className='text-xl' href=""><FaInstagram/></a> */}
                <img src={social} alt="" />
               </div>

               </div>
               <nav className='flex flex-col'>
                 <h6 class="footer-title font-semibold text-xl">Services</h6>
                 <a class="link link-hover font-normal text-[16px]">Branding</a>
                 <a class="link link-hover font-normal text-[16px]">Design</a>
                 <a class="link link-hover font-normal text-[16px]">Marketing</a>
                 <a class="link link-hover font-normal text-[16px]">Advertisement</a>
               </nav>
               <nav className='flex flex-col'>
                 <h6 class="footer-title font-semibold text-xl">Company</h6>
                 <a class="link link-hover text-[16px]">About us</a>
                 <a class="link link-hover text-[16px]">Contact</a>
                 <a class="link link-hover text-[16px]">Jobs</a>
                 <a class="link link-hover text-[16px]">Press kit</a>
               </nav>
               <nav className='flex flex-col'>
                 <h6 class="footer-title font-semibold text-xl">Legal</h6>
                 <a class="link link-hover text-[16px]">Terms of use</a>
                 <a class="link link-hover text-[16px]">Privacy policy</a>
                 <a class="link link-hover text-[16px]">Cookie policy</a>
               </nav>
             </footer>
  )
}

export default Footer
