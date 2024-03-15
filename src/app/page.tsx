import Image from 'next/image'
import HeroSection from './components/hero'
import Navbar from './components/navbar'
import { PencilRuler, Trophy, Award } from 'lucide-react'

export default function Home() {
  return (
    <main className='bg-white text-black'>
      <Navbar />
      <HeroSection />
      <div className='space-y-24 px-24 py-32'>
        <div className='flex flex-col items-center gap-12 text-black'>
          <p className='text-5xl font-bold'>Super Easy Way To Find A Tutor</p>
          <p className='w-1/2 text-center '>
            Build high self-esteem Believe in yourself, have confidence, like
            and feel good about yourself, take pride in what you do. Focus with
            a positive attitude Always expect the best possible outcome for what
            you doi
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='flex h-fit w-96 flex-col gap-6 rounded-3xl bg-white p-8 text-black shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            <div className='w-fit rounded-xl bg-cyan-200 p-5'>
              <PencilRuler size={24} />
            </div>
            <div className='text-xl'>Learn The Latest Skills</div>
            <div className=' text-gray-400'>
              One or tne most emective ways to develop your new skillset is to
              constantly practice and evaluate wnat you have learned
            </div>
          </div>
          <div className='flex h-fit w-96 flex-col gap-6 rounded-3xl bg-white p-8 text-black shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            <div className='w-fit rounded-xl bg-blue-200 p-5'>
              <Trophy size={24} />
            </div>
            <div className='text-xl'>Get Ready for Career</div>
            <div className=' text-gray-400'>
              One or tne most emective ways to develop your new skillset is to
              constantly practice and evaluate wnat you have learned
            </div>
          </div>
          <div className='flex h-fit w-96 flex-col gap-6 rounded-3xl bg-white p-8 text-black shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]'>
            <div className='w-fit rounded-xl bg-red-200 p-5'>
              <Award size={24} />
            </div>
            <div className='text-xl'>Earn Certificate</div>
            <div className=' text-gray-400'>
              One or tne most emective ways to develop your new skillset is to
              constantly practice and evaluate wnat you have learned
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between bg-orange-400 p-24'>
        <div className='flex flex-col items-center font-bold'>
          <p className='text-5xl'>A+</p>
          <p>Highly Rated Tutors</p>
        </div>
        <div className='flex flex-col items-center font-bold'>
          <p className='text-5xl'>100%</p>
          <p>Satisfaction Guarantee</p>
        </div>
        <div className='flex flex-col items-center font-bold'>
          <p className='text-5xl'>24/7</p>
          <p>Support</p>
        </div>
        <div className='flex flex-col items-center font-bold'>
          <p className='text-5xl'>24/7</p>
          <p>Support</p>
        </div>
      </div>
      <div className='flex items-center p-24'>
        <div className='flex-1'>
          <Image
            src='/assets/unsplash-college.jpg'
            width={500}
            height={600}
            alt=''
            className='h-[35rem] rounded-xl border-4 border-white'
          />
        </div>
        <div className='flex-1 space-y-8 px-32'>
          <p className='text-5xl font-bold'>Covering all the major subjects</p>
          <p>
            We have a team of highly experienced tutors who are experts in their
            respective fields. We cover all the major subjects including
          </p>
          <ul className='list-disc px-12'>
            <li>Mathematics</li>
            <li>Science</li>
            <li>English</li>
            <li>Bangla</li>
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Biology</li>
            <li>Accounting</li>
            <li>Economics</li>
            <li>Business Studies</li>
            <li>ICT</li>
          </ul>
        </div>
      </div>
      <div className='p-24'>
        <div className='flex justify-between gap-24 rounded-xl bg-[#307B74] p-12 text-white'>
          <div className='px flex-1 space-y-12 px-24'>
            <p className='text-5xl font-bold'>
              Lets Find You The Perfect Tutor
            </p>
            <p>
              Signup now and get access to our highly experienced tutors who are
              experts in their respective fields.
            </p>
          </div>
          <div className='flex-1'>
            <div className='w-fit cursor-pointer rounded-full bg-orange-500 px-8 py-2 text-white transition-all duration-300 hover:bg-orange-300'>
              Get Started
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-between border border-r-2 p-24'>
        <div className='space-y-4'>
          <p className='text-3xl font-bold'>PeerConnect</p>
          <p className='w-2/3 text-sm'>
            PeerConnect is a platform that connects students with highly
            experienced tutors who are experts in their respective fields.
          </p>
        </div>
        <div className='flex-1 space-y-4'>
          <p className='text-xl font-semibold'>Quick Links</p>
          <ul className='space-y-4 text-gray-500'>
            <li>Find Tutors</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className='flex-1 space-y-4'>
          <p className='text-xl font-semibold'>Contact Us</p>
          <ul className='space-y-4 text-gray-500'>
            <li>Phone: 017XXXXXXXX</li>
            <li>
              Email:
              <a href='mailto:'> contact@peerconnect.com</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
