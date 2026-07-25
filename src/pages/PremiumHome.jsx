import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from "../utils/api";
import PremiumNavbar from '../components/premium/PremiumNavbar'
import PremiumHero from '../components/premium/PremiumHero'
import AnimatedStory from '../components/premium/AnimatedStory'
import Artisan from '../components/premium/Atrisan'
import PremiumHistory from '../components/premium/PremiumHistory'
import PremiumGallery from '../components/premium/PremiumGallery'
import PremiumBadge from '../components/premium/PremiumBadge'
import PremiumFooter from '../components/premium/PremiumFooter'

const PremiumHome = () => {
  const { slug } = useParams();

  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  useEffect (() => {
    let cancelled = false;

    const fetchSite = async () => {
      setLoading(true);
      setError("");

      try{
        const response = await api.get(`/sites/${slug}`);

        if (!cancelled) {
          setSite(response.data.site);
        }
      } catch (err){
        if(!cancelled) {
          setError(
            err.response?.data?.message ||
            "Could not load this heritage site."
          );
        }
      } finally{
        if(!cancelled) {
          setLoading(false);
        }
      }
    };
    fetchSite();

    return () => {
      cancelled = true;
    };
  }, [slug]);
  if (loading) {
    return(
      <div className='min-h-screen flex items-center justify-center bg-[#f8f4ee]'>
        <p className='text-[#7B1E23] font-semibold'>
          Loading your premium experience...
        </p>
      </div>
    );
  }

  if (error || !site) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F4EE] px-6 text-center">
        <p className="text-[#7B1E23] font-semibold text-lg">
          {error || "Heritage site not found."}
        </p>
      </div>
    );
  }
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