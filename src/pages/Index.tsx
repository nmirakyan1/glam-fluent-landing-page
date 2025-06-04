
import Hero from "@/components/Hero";
import About from "@/components/About";
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
      <WhoItsFor />
      <WhatYouGet />
      <Investment />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
