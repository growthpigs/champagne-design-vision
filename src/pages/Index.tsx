
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import DearHomeonwerLetter from '@/components/sections/DearHomeonwerLetter';
import EpicProjectsGrid from '@/components/sections/EpicProjectsGrid';
import ProjectGallery from '@/components/sections/ProjectGallery';
import TimeIsMoneyOffer from '@/components/sections/TimeIsMoneyOffer';
import ThreeWayComparison from '@/components/sections/ThreeWayComparison';
import DeliveryExperience from '@/components/sections/DeliveryExperience';
import TeamProfiles from '@/components/sections/TeamProfiles';
import TestimonialVideos from '@/components/sections/TestimonialVideos';
import FAQAccordion from '@/components/sections/FAQAccordion';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary font-poppins">
      <Header />
      <HeroSection />
      <DearHomeonwerLetter />
      <EpicProjectsGrid />
      <ProjectGallery />
      <TimeIsMoneyOffer />
      <ThreeWayComparison />
      <DeliveryExperience />
      <TeamProfiles />
      <TestimonialVideos />
      <FAQAccordion />
      <Footer />
    </div>
  );
};

export default Index;
