import React from 'react'
import styles from"./App.module.css"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
