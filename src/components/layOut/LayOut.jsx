import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import Footer from '../common/footer'


const LayOut = () => {
    return (
        <>
            <Header />
            <main>

                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default LayOut