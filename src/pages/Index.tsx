
import Hero from "@/components/Hero";
import About from "@/components/About";
import FearsSection from "@/components/FearsSection";
import WhoItsFor from "@/components/WhoItsFor";
import WhatYouGet from "@/components/WhatYouGet";
import Investment from "@/components/Investment";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <FearsSection />
      <WhoItsFor />
      <WhatYouGet />
      <Investment />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
