import React from 'react'
import Banner from './components/Banner'
import Categories from './components/Categories'
import SpecialDishes from './components/SpecialDishes'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
    </>
  )
}
