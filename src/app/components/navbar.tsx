import React from 'react'
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='fixed top-0 z-50 flex h-fit w-full px-12 py-6 text-black'>
      <div className='flex w-full items-center justify-between rounded-full bg-white px-3 py-2 shadow-sm'>
        <div className='flex items-center gap-8 px-2'>
          <div className='text-2xl font-bold'>PeerConnect</div>
          <p>Find Tutors</p>
          <p>Pricing</p>
          <p>Resources</p>
        </div>
        <div className='flex gap-4'>
          <Link href='http://localhost:3000/login'>
            <div className='rounded-full px-6 py-2'>SignIn</div>
          </Link>
          <Link href='http://localhost:3000/signup'>
            <div className='rounded-full bg-orange-500 px-6 py-2'>Become a Tutor</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
