import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import api from "../utils/api";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AudioGuide from "../components/AudioGuide";
import AudioPlayer from '../components/AudioPlayer';
import Artisan from '../components/Artisan';
import HeritageGallery from '../components/HeritageGallery';
import HiddenStory from '../components/HiddenStory';
import Badge from '../components/Badge';
import WhyChooseUs from '../components/WhyChoose';
import Footer from '../components/Footer';

const Home = () => {
  const { slug } = useParams();

  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchSite = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await api.get(`/sites/${slug}`);

        if (!cancelled) {
          setSite(response.data.site);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err.response?.data?.message ||
              "Could not load this heritage site."
          );
        }
      } finally {
        if (!cancelled) {
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F4EE]">
        <p className="text-[#7B1E23] font-semibold">
          Loading heritage site...
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
        <p className="text-[#8B7355] mt-2 text-sm">
          Check that "{slug}" has been seeded into the database.
        </p>
      </div>
    );
  }

  return (
    <>
    <Navbar site={site} />
    <Hero site={site} />
    <AudioGuide site={site}/>
    <AudioPlayer site={site} />
    <Artisan site={site} />
    <HeritageGallery site={site} />
    <HiddenStory site={site} />
    <Badge site={site} />
    <WhyChooseUs />
    <Footer />

    </>
  );
}

export default Home