import React from 'react';
import './App.scss'

import { About, Footer, Header, Skills, Testimonials, Works } from './containers'
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Works />
        <Skills />
        <Testimonials />
        <Footer />

    </div>
  )
}

export default App;