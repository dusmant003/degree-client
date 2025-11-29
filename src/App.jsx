import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/layOut/LayOut'
import Home from './pages/Home/Home'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Gallery from './pages/Gallery/Gallery'
import Events from './pages/Events/Events'
import AdminLayout from './components/AdminLayout/AdminLayOut'
import DashBoard from './pages/Admin/DashBoard/DashBoard'
import ManageStaff from './pages/Admin/Staff/ManageStaff'
import ManageEvents from './pages/Admin/Event/ManageEvents'
import ManageGallery from './pages/Admin/Gallery/ManageGallery'
import ManageNotifications from './pages/Admin/Notification/ManageNotifications'
import Profile from './pages/Admin/Setting/Profile'
import ManageMessages from './pages/Admin/Messages/ManageMessages'
import NewsAndNotification from './pages/NewsAndNotifications/NewsAndNotification'
import FresherDay from './pages/Fresher/FresherDay'
import WelComeDay from './pages/Welcome/WelComeDay'
import AnnualDay from './pages/Annual/AnnualDay'


const App = () => {
  return (
    <>
      <Routes>
        {/* Main User Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Events' element={<Events />} />
          <Route path='/notifications' element={<NewsAndNotification />} />
          <Route path='/fresherday' element={<FresherDay />} />
          <Route path='/welcomeday' element={<WelComeDay />} />
          <Route path='/annualday' element={<AnnualDay />} />

        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        <Route path="/adminportal" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="manage/staff" element={<ManageStaff />} />
          <Route path='manage/events' element={<ManageEvents />} />
          <Route path='manage/gallery' element={<ManageGallery />} />
          <Route path='manage/notifications' element={<ManageNotifications />} />
          <Route path='manage/messages' element={<ManageMessages />} />
          <Route path='settings/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App