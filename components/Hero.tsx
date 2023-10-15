import React, { Component } from 'react'
import CustumeButton from './CustumeButton'
import HeroPic from "@/public/hero.png"
import Image from 'next/image'

export const Hero = () => {
    return (
        <div className="hero">
            <div className='flex-1 pt-36 padding-x flex-column'>
                <h1 className='hero__title'>Find, book, rent a car—quick and super easy!</h1>
                <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process.</p>
                <CustumeButton
                    title={"Explore cars"}
                    containerStyles='bg-primary-blue rounded-full p-4 mt-10'
                    textStyles='text-white'
                />
            </div>
            <div className='hero__image-container items-center justify-center'>
                <Image
                    src={HeroPic}
                    alt='car'
                    className='my-auto'
                />
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero
