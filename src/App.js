import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutLayout from './components/AboutLayout'
import FrontEndPageLayout from './components/FrontEndPageLayout'
import ContactUs from './components/ContactUsPages/ContactUs'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Aboutus" element={<AboutLayout />} />
        <Route path="/Frontend_AI" element={<FrontEndPageLayout />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App