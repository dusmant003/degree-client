import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/layOut/LayOut'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import EventsSection from './components/layOut/Event'
import Events from './pages/Events/Events'
import AdminLayout from './components/AdminLayout/AdminLayOut'
import DashBoard from './pages/Admin/DashBoard/DashBoard'


const App = () => {
  return (
    <>
      <Routes>
        {/* Main User Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contsctus' element={<ContactUs />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Events' element={<Events />} />
        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          {/* <Route path="menu/add" element={<AddMenu />} />
          <Route path="menu/list" element={<MenuuList />} />
          <Route path="menu/category" element={<Categories />} />
          <Route path='gallery/manage' element={<ManageGallery />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App