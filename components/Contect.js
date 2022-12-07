import React from 'react'
import Image from 'next/image'
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail,AiFillFacebook} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import{BsFillPersonFill} from 'react-icons/bs'
import Link from 'next/link'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import img from "../public/assets/contact.jpg"



const Contect = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>

        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-purple-500'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left section */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                        <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={img} height='300' width='400' alt=''/>
                        </div>

                        <div>
                             <h2 className='py-2'>Asif Ahmed Sahil</h2>
                             <p>Full - Stack Developer</p>
                             <p className='py-4'>I am available for freelance or full time position. contact me and lets talk</p>
                        </div>
                        <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                        <div className='flex items-center justify-between m-auto py-4 max-w-[360px]'>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <a href="https://www.linkedin.com/in/asif-ahmed-sahil-8365861a0/"><FaLinkedinIn/></a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://github.com/AsifAhmedSahil"><FaGithub/></a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://www.facebook.com/sksahil.asif/"><AiFillFacebook/></a>
                                    </div>
                                   
                        </div>
                    </div>
                    </div>
                </div>


{/* right side */}
            <div className='col-span-3 w-full h-full shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                <div className='p-4'>

                    <form >
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>name</label>
                                <input type="text" className='p-3  border-gray-400 rounded-lg border-2'/>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Number</label>
                                <input type="text" className='p-3  border-gray-400 rounded-lg border-2'/>
                            </div>
                          
                        </div>
                        <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input type="email" className='p-3  border-gray-400 rounded-lg border-2'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input type="text" className='p-3  border-gray-400 rounded-lg border-2'/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='p-3  border-gray-400  rounded-lg border-2' rows="10"></textarea>
                            </div>

                            <button className='w-full p-4 text-gray-100 mt-2'>Send message</button>
                        
                    </form>
                </div>
            </div>
        </div>
        <div className='flex justify-center p-12'>
            <Link href="/">
                <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer animate-bounce hover:scale-110 ease-in duration-300 '>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Contect