import React from 'react'
import About from '../components/About/About'
import Navbar from '../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-gray-600 to-black h-screen'>
      <Navbar/>
      <section className='container-lg w-full h-3/5'>
        <h1>Home</h1>
      </section>
      <section id='#about'>
      <About/>
      </section>
      
      
    </div>
  )
}

export default Home
