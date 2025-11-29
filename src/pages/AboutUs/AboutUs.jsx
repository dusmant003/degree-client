import React from 'react'
import Banner from './Banner'
import Faculty from './Faculty'
import GallerySection from '../../components/layOut/Gallery'
import AboutUsSection from './AboutUsSection'

const AboutUs = () => {
    return (
        <>
            <Banner />
            <AboutUsSection />
            <Faculty />
            <GallerySection />
        </>
    )
}

export default AboutUs