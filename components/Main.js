
import {AiOutlineClose,AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import{BsFillPersonFill} from 'react-icons/bs'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'


const Main = () => {
    
  return (
    <div className='w-full h-screen text-center'>
         
        <div className='max-w-[1240px] w-full h-full justify-center items-center mx-auto p-2 flex'>
            <div>
                <p className='text-gray-700 uppercase tracking-widest text-sm'>lets build something together</p>
          
                <h1 className='py-4 text-gray-700'>
                    Hi I am <span className='text-red-500'>Sahil</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    {/* A Front-End Web Developer */}
                    <span style={{ color: 'black', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['A Full-stack Web Developer 👨‍💻', 'SEO Expert 🌍', 'Blockchain Enthusiast 🔐']}
            loop={5}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
                </h1>
                
                <p className='py-4 text-gray-600'>I am passionate about all things <strong>JavaScript</strong> & <strong>react</strong>.</p>
                <p className='text-gray-600 m-auto max-w-[70%]'> I work hard. I care about written clean code and I genuinely love to. I simply enjoy working on the code, developing beautiful websites.
</p>

                <div className='flex items-center justify-between m-auto py-4 max-w-[360px]'>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <a href="https://www.linkedin.com/in/asif-ahmed-sahil-8365861a0/"><FaLinkedinIn/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <a href="https://github.com/AsifAhmedSahil?tab=repositories"><FaGithub/></a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         <Link href="/#contact"><AiOutlineMail/></Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                         {/* <Link href="/#about"><BsFillPersonFill/></Link> */}
                         <Link href="/#about"><BsFillPersonFill/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main