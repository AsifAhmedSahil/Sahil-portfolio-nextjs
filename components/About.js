import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase tracking-widest text-xl text-purple-500'>About</p>
                <h2 className='py-4'>Who Am I</h2>
                <p className='py-2 text-gray-600 text-xl'> I am not only <strong>full-stack developer</strong> but also an <span className='font-bold text-red-600'>SEO</span> expert </p>
                <p className='py-2 text-gray-600'>I am 22 years old and I am studying computer science in East Delta University. I am looking for a job of a web developer. I decided to go with web development, since I understand that it is impossible to succeed in almost any business without some online presence. </p>
                <p className='py-2 text-gray-600'>Let me introduce myself in 7 words. Responsible, creative, open-minded, friendly and ambitious web developer. This is how I see myself, and hope you will give me a chance to prove my words in the job, or at least in this interview.</p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
            </div>
            <div className='w-full h-full m-auto shadow-xl shadow-gray-700 rounded-2xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl'  src="/../public/about.jpg" height='500' width='500' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About