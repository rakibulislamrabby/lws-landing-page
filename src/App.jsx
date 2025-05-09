import React from 'react'
import './App.css'
import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import TrustedSection from './components/sections/TrustedSection'
import Testimonial from './components/sections/Testimonial'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import TrialCTA from './components/sections/TrialCTA'

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <TrustedSection />
      <Testimonial />
      <Pricing />
      <FAQ />
      <TrialCTA />
    </Layout>
  )
}

export default App
