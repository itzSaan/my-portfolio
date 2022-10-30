import { useState } from 'react'
import MainNav from './sections/MainNav'
import SocialNav from './sections/SocialNav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Works from './sections/Works'
import Contact from './sections/Contact'
import './App.css'

function App() {
 
  return (
    <main>
      <MainNav />
      <SocialNav />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </main>
  )
}

export default App
