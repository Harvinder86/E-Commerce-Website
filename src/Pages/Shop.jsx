import React from 'react'
import Hero from '../Components/Navbar/Hero/Hero'
import Popular from '../Components/Navbar/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/Newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop
