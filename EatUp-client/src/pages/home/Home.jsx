import React from 'react'
import Banner from './components/Banner'
import Categories from './components/Categories'
import SpecialDishes from './components/SpecialDishes'
import Testimonials from './components/Testimonials'
import OurServices from './components/OurServices'

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <OurServices />
    </>
  )
}
