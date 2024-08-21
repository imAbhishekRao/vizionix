import React from 'react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Roas from '../components/Roas'
import ServicesSection from '../components/services'
import GameChanger from '../components/gamechange'
import Contact from '../components/contactus'


export default function HomePage() {
  return (

<>
<div><Navbar></Navbar></div>
<LandingPage/>
<Roas/>
<ServicesSection></ServicesSection>
<GameChanger></GameChanger>
<Contact></Contact>

</>
  )
}
