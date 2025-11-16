import React from 'react'
import Banner from './Banner'
import AboutSection from '../../components/layOut/About'
import Faculty from './Faculty'
import GallerySection from '../../components/layOut/Gallery'

const AboutUs = () => {
    return (
        <>
            <Banner />
            <AboutSection />
            <Faculty />
            <GallerySection />
        </>
    )
}

export default AboutUs