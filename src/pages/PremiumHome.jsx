import React from 'react'
import PremiumNavbar from '../components/premium/PremiumNavbar'
import PremiumHero from '../components/premium/PremiumHero'
import AnimatedStory from '../components/premium/AnimatedStory'
import Artisan from '../components/premium/Atrisan'
import PremiumHistory from '../components/premium/PremiumHistory'
import PremiumGallery from '../components/premium/PremiumGallery'
import PremiumBadge from '../components/premium/PremiumBadge'
import PremiumFooter from '../components/premium/PremiumFooter'

const PremiumHome = () => {
  return (
    <>
    <PremiumNavbar />
    <PremiumHero />
    <AnimatedStory />
    <Artisan />
    <PremiumHistory />
    <PremiumGallery />
    <PremiumBadge />
    <PremiumFooter />
    </>
  )
}

export default PremiumHome