import React from 'react';
import './App.scss'

import { About, Footer, Header, Skills, Testimonials, Works } from './containers'
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <About />
        <Footer />
        <Header />
        <Skills />
        <Testimonials />
        <Works />

    </div>
  )
}

export default App;