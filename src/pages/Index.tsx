
import Hero from "@/components/Hero";
import About from "@/components/About";
import FearsSection from "@/components/FearsSection";
import WhatYouGet from "@/components/WhatYouGet";
import CurriculumSection from "@/components/CurriculumSection";
import Investment from "@/components/Investment";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FearsSection />
      <WhatYouGet />
      <CurriculumSection />
      <Investment />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
