import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutLayout from './components/AboutLayout'



const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}  />
          <Route path='/Aboutus' element={<AboutLayout/>} />
      </Routes>
    </>
  )
}

export default App