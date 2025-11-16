import React from 'react'
import Hero from '../../components/layOut/Hero'
import AboutSection from '../../components/layOut/About'
import Courses from '../../components/layOut/Courses'
import GallerySection from '../../components/layOut/Gallery'
import EventsSection from '../../components/layOut/Event'
import NewsNotification from '../../components/layOut/NewsAndNotification'
import WhyChooseUs from '../../components/layOut/WhyChooseUs'


const Home = () => {
  return (
    <>
      {/* ye sab layout ke liye h */}
      {/* components k ander layout he */}
      <Hero />
      <AboutSection />
      <Courses />
      <GallerySection />
      <EventsSection />
      <NewsNotification />
      <WhyChooseUs />
    </>
  )
}

export default Home