import React from 'react'
import Banner from './Banner'
import EventsSection from '../../components/layOut/Event'
import GallerySection from '../../components/layOut/Gallery'
import EventsSpecialFunctions from './EventFunctions'

const Events = () => {
    return (
        <>
            <Banner />
            <EventsSection />
            <EventsSpecialFunctions/>
            <GallerySection/>
        </>
    )
}

export default Events