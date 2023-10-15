import React from 'react'
import Logo from '@/public/logo.svg'
import Image from 'next/image'
import {footerLinks} from './Constants'

const Footer = () => {
  return (
    <footer className='border-t border-t-gray-200 w-full py-12 flex flex-col gap-20'>
      <div className='flex md:flex-row flex-col gap-5 w-full max-width'>

        <div className='flex md:ml-0 ml-5 flex-col gap-5'>
          <Image src={Logo} alt='Logo' width={120} className='flex gap-2'/>
          <div className='flex-col gap-0'>
            <h1 className='text-gray-500'>Carhub 2023</h1>
            <h1 className='text-gray-500'>All Rights Reserved &copy;</h1>
          </div>
        </div>

        <div className='md:ml-auto ml-5 flex md:flex-row flex-col gap-28'>
          {footerLinks.map(
            (item) => (
              <div key={item.title} className='flex flex-col gap-8'>
                <h3 className='font-bold text-[18px]'>{item.title}</h3>
                {
                  item.links.map(
                    (link) => (
                      <h4 key={link.title} className='text-gray-500 text-[16px]'>{link.title}</h4>
                    )
                  )
                }
              </div>
            )
          )}
        </div>

      </div>

      <div className='flex md:flex-row flex-col md:gap-0 gap-5 w-full max-width justify-between'>
        <h2>@2023 CarHub. All rights reserved</h2>
        <div className='flex md:flex-row flex-col md:gap-14 text-gray-500'>
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
