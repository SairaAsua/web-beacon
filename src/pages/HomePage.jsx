
import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/sections/HeroSection';
import TheoryContentSection from '@/components/sections/TheoryContentSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import AnalysisSection from '@/components/sections/AnalysisSection';
import AppPreviewSection from '@/components/sections/AppPreviewSection';
import FooterCTA from '@/components/sections/FooterCTA';
import FloatingNav from '@/components/FloatingNav';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-[#C9B8EB]">
      <Helmet><title>Harmonic Beacon</title></Helmet>
      <FloatingNav />
      <HeroSection />
      <TheoryContentSection />
      <ExperienceSection />
      <AnalysisSection />
      <AppPreviewSection />
      <FooterCTA />
      <Footer />
      <Toaster />
    </div>
  );
};

export default HomePage;
