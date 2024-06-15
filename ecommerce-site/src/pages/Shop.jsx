import React from 'react'
import HeroBanner from '../components/HeroBanner/HeroBanner'
import Popular from '../components/Popular/Popular'
import Offer from '../components/Offer/Offer'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'

const Shop = () => {
  return (
    <>
      <HeroBanner />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Shop