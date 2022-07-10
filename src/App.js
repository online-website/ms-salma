import React, { Fragment } from 'react'

import Nav from './components/NAV/Nav'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Dates from './components/Dates/Dates'
import Footer from './components/Footer/Footer'
import Book from './components/Book/Book'



const App = () => {
  return (
    <Fragment >
      <Nav />
      <Hero  />
      <Services />
      <Book />
      <Dates />
      <Footer />
    </Fragment>
  )
}

export default App