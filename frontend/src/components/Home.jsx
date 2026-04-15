import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const bgRef = useRef(null)
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, [user, navigate]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.home-bg-circle', {
        x: (i) => (i % 2 === 0 ? '+=70' : '-=70'),
        y: (i) => (i % 2 === 0 ? '+=50' : '-=50'),
        duration: 9,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      })
    }, bgRef)

    return () => ctx.revert()
  }, [])
  return (
    <div className='relative overflow-hidden'>
      <div ref={bgRef} className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'>
        <div className='home-bg-circle absolute top-[-10%] left-[-10%] h-72 w-72 rounded-full bg-[#6A38C2]/40 blur-3xl' />
        <div className='home-bg-circle absolute top-24 right-[-10%] h-96 w-96 rounded-full bg-[#F83002]/25 blur-3xl' />
        <div className='home-bg-circle absolute bottom-[-10%] left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#14b8a6]/20 blur-3xl' />
      </div>
      <div className='max-w-7xl mx-auto p-4'>
        {user?.fullname && (
          <h2 className='text-xl font-semibold mb-4'>
            Welcome back, {user.fullname}!
          </h2>
        )}
      </div>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  )
}

export default Home