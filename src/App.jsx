import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Carousel from './Carousel'
import Nav from './Nav'
import AroundtheGlobe from './AroundTheGlobe'
import HorizontalScroll from './horizontalscroll'
import Species from './Species'
import Breakthrough from './breakthrough'
import Movie from './movie'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Species />
      <HorizontalScroll />
      <AroundtheGlobe />
      <Breakthrough />
      <Carousel />
      <Movie />
    </>
  )
}

export default App
