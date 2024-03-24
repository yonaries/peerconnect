import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function HeroSection({}: Props) {
  return (
    <div className='flex h-screen'>
      <div className='flex h-full w-3/5 items-center justify-between p-24 text-black'>
        <div className='flex w-full flex-col gap-12 pr-24'>
          <p className='text-5xl font-bold leading-tight'>
            Powerup your study with{' '}
            <span className='text-orange-500'>PeerConnect</span> Tutors
          </p>
          <p className='text-lg'>
            Online tutoring in Ethiopia Best and Largest Plattorm The most
            comprehensive online learning platform
          </p>
          <Link href='http://localhost:3000/signup'>
          <div className='w-fit cursor-pointer rounded-full bg-orange-500 px-8 py-2 text-white transition-all duration-300 hover:bg-[#307B74]'>
            Get Started
            </div>
          </Link>
        </div>
      </div>
      <div className='hero-pattern w-2/5 bg-orange-300'>
        <Image
          className='absolute right-36 top-32 z-10 rounded-xl border-4 border-white'
          src='/assets/hero-image.jpg'
          width={500}
          height={600}
          alt={''}
        />
        <Image
          className='absolute bottom-6 right-96 rounded-xl border-4 border-white'
          src='/assets/unsplash-college.jpg'
          width={350}
          height={600}
          alt={''}
        />
      </div>
    </div>
  )
}

export default HeroSection
