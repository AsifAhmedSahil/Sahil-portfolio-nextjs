import React from 'react'
import Image from 'next/image'
import css from "../public/assets/skills/css.png"
import html from "../public/assets/skills/html.png"
import bootrstrap from "../public/assets/skills/bootrstrap.jpg"
import express from "../public/assets/skills/expressjs.jpg"
import firebase from "../public/assets/skills/firebase.png"
import github from "../public/assets/skills/github1.png"
import javascript from "../public/assets/skills/javascript.png"
import mongodb from "../public/assets/skills/mongo.png"
import next from "../public/assets/skills/next.jpg"
import node from "../public/assets/skills/node.png"
import react from "../public/assets/skills/react.png"
import tailwind from "../public/assets/skills/tailwind.png"

const Skills = () => {
  return (
    <div id='skill' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='text-xl tracking-widest uppercase text-purple-500'>Skills</p>
            <h2 className='py-4'>My Technological Skills</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={html} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>HTML5</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={css} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>CSS3</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={javascript} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>JavaScript</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={react} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>REACT</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={next} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>NEXT JS</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={tailwind} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>TAILWIND</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={bootrstrap} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>BOOTRSTRAP</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={firebase} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>FIREBASE</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={github} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>GITHUB</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={mongodb} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>MONGO DB</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={node} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>NODE JS</h3>
                  </div>
                </div>
              </div>

              <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={express} alt='/' width='64px' height='64px'/>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <h3>EXPRESS JS</h3>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Skills