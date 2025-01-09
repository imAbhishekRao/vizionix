import React from 'react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
import Roas from '../components/Roas'
import ServicesSection from '../components/services2'
import GameChanger from '../components/gamechange'
import Footer from '../components/footer'
import Features from '../components/features'
import NewsLetter from '../components/newsletter'
import Testimonials from '../components/Testimonials'
import FixedWhatsAppButton from '../components/whatsapp'







export default function HomePage() {
  return (
  

<>

<div><Navbar/></div>
<FixedWhatsAppButton/>
<LandingPage/>
<Roas/>
<Features></Features>
<ServicesSection></ServicesSection>
<GameChanger></GameChanger>
<NewsLetter></NewsLetter>
<Testimonials></Testimonials>


<Footer></Footer>





</>
  )
}
