import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './components/layOut/LayOut'
import Home from './pages/Home'


const App = () => {
  return (
    <>
      <Routes>
        {/* Main User Layout */}
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
        </Route>

        {/* Admin Panel Routes under AdminLayout */}
        {/* <Route path="/adminportal" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="menu/add" element={<AddMenu />} />
          <Route path="menu/list" element={<MenuuList />} />
          <Route path="menu/category" element={<Categories />} />
          <Route path='gallery/manage' element={<ManageGallery />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App