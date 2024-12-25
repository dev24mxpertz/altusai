import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutLayout from './components/AboutLayout'
import FrontEndPageLayout from './components/FrontEndPageLayout'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/Aboutus" element={<AboutLayout />} />
        <Route path="/Frontend_AI" element={<FrontEndPageLayout />} />
      </Routes>
    </>
  );
}

export default App