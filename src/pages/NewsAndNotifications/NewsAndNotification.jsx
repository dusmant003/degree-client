import React from 'react'
import NewsNotification from '../../components/layOut/NewsAndNotification'
import Banner from './Banner'
import EventsSection from '../../components/layOut/Event'

const NewsAndNotification = () => {
    return (
        <>
            <Banner />
            <NewsNotification />
            <EventsSection/>
        </>
    )
}

export default NewsAndNotification