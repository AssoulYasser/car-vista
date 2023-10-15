import React from 'react'
import CustumeButton from './CustumeButton'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

const NavBar = () => {
  return (
    <header className='w-full absolute z-10 py-5'>
      <div className='max-width flex flex-row'>
        <Image src={Logo} alt='Logo' height={20} className='mr-auto'/>
        <CustumeButton title={"Sign in"} containerStyles='ml-auto px-8 py-3 text-primary-blue bg-white rounded-full'/>
      </div>
    </header>
  )
}

export default NavBar
