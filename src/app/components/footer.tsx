import React from 'react'
import { IoMail, IoCall } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin ,FaGithub} from "react-icons/fa";

const Footer = () => {
  return (
        <footer className='container px-[20px] py-[50px] ' id='contact'>

            <h2 className='text-[50px] uppercase text-center split'>Let's Connect</h2>
            <div className='grid grid-cols-12 gap-[20px] min-h-[50vh] mb-[50px] h-full relative'>
                <div className='col-span-4 gap-[10px]  flex items-center justify-center'>
                    <div>
                <p className='flex items-center gap-2'><IoMail/>  <a href="mailto:youremail@example.com">joharidagar53@gmail.com</a></p>
                <p className='flex items-center gap-2'><FaGithub/>  <a href="mailto:youremail@example.com">github.com/sagar-johari</a></p>
                <p className='flex items-center gap-2'><FaLinkedin/>  <a href="mailto:youremail@example.com">www.linkedin.com/in/sagarjohari</a></p>
                <p className='flex items-center gap-2'><SiLeetcode/>  <a href="mailto:youremail@example.com">leetcode.com/u/codewith_sagar</a></p>
                <p className='flex items-center gap-2'><IoCall/>  <a href="mailto:youremail@example.com">+91 8824725618</a></p>
                    </div>
                </div>
                <div className='col-span-4 gap-[10px] '>
                    <div className='footer-logo flex gap-2 items-center justify-center h-full'>
                        
                        <img src="../../images/sjicon.png" alt="" className='h-[50px] w-[50px] ratio-[1/1] rounded-full' />
                        
                        <div className='relative'>
                        <h2 className='text-[42px] leading-[1]'>Sagar Johari.</h2>
                        <span className='font-antarctica uppercase text-[14px] absolute bottom-0 left-[50%] translate-x-[-35%] translate-y-[80%] whitespace-nowrap'>Mern Stack Developer</span>
                        </div>
                        
                    </div>
                </div>
                <div className='col-span-4 gap-[10px]  resume_block flex items-center justify-center'>
                    <span className='h-[20px] w-[20px]'></span>
                </div>
                    <span className='text-[8px] h-fit absolute -bottom-[25px] left-[50%] -translate-x-[50%] translate-y-[50%] uppercase'>© 2025 All rights reserved.</span>
            </div>
        </footer>
  )
}

export default Footer