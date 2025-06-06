import React from 'react'
import Search from '../components/Search'
import MainBanner from '../components/MainBanner'
import Feature from '../components/Feature'
import Categories from '../components/Categories'
import Services from '../components/Services'
import How from '../components/How'

const Home = () => {
  return (
    <div>
      <MainBanner/>
      <Feature/>
      <Categories/>
      <Services/>
      <How/>
      
    </div>
  )
}

export default Home
