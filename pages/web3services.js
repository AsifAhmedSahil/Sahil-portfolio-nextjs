import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/laptops.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import Web3details from './Web3details';

const web3services = () => {
  return (
    <>
      <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-gray-300/80 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-black z-10 p-2'>
          <h2 className='py-2'>Web 3.0 - Services </h2>
          <h3>React JS / Tailwind / Firebase / MongoDB / JavaScript / Express JS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup & signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.


          </p>
          {/* href="https://final-assignment-53beb.web.app/"  */}
          <a href="https://web3-services.web.app/"><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
          <a href="https://github.com/AsifAhmedSahil/web3.0-services-client"><button className='px-8 py-2 mt-4 mr-8'>client</button></a>
          <a href="https://github.com/AsifAhmedSahil/web3.0-services-server"><button className='px-8 py-2 mt-4'>server</button></a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express JS
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <div className=" grid grid-cols-1 md:grid-cols-2 mb-10 gap-10  max-w-[1240px] mx-auto">
        <Web3details/>
        
        

        
      </div>

      <Link href="/#project" >
            <p className="underline cursor-pointer max-w-[1240px] mx-auto text-red-500 animate-bounce text-2xl">Back</p>
          </Link>
      
    </>
  );
};

export default web3services;