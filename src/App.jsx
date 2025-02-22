import { useState } from 'react'

import Navbar1 from './Component/Navbar1'
import Navbar2 from './Component/Navbar2'
import Aboutme from './Component/Aboutme'
import Whatido from './Component/Whatido'
import Resume from './Component/Resume'
import Hireme from './Component/Hireme'
import Faq from './Component/Faq'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Experience from './Component/Experience'
import Home from './Component/Home'
import './App.css'
import Project from './Component/Project'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/navbar1' element={<Navbar1/>}/>
          <Route path='/navbar2' element={<Navbar2/>}/>
          <Route path='/abouteme' element={<Aboutme/>}/>
          <Route path='/whatido' element={<Whatido/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/hireme' element={<Hireme/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/footer' element={<Footer/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App
