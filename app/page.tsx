import AboutSection from "./(components)/AboutSection";
import Career from "./(components)/Career";
import Contact from "./(components)/Contact";
import FAQ from "./(components)/FAQ";
import HeroSection from "./(components)/HeroSection";
import Registration from "./(components)/Registration";
import Testimonials from "./(components)/Testimonials";
import WhatYouWillLearn from "./(components)/WhatYouWillLearn";
import WhyChooseUs from "./(components)/WhyChooseUs";

// app/page.tsx
export default function Home() {
  return (
    <main className="scroll-smooth">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about" className=" bg-blue-50">
        <AboutSection />
      </section>
      <section id="learn" className=" bg-blue-50">
        <WhatYouWillLearn />
      </section>
      <section id="career" className=" bg-blue-50">
        <Career />
      </section>
      <section id="whyus" className=" bg-blue-50">
        <WhyChooseUs />
      </section>
      <section id="pricing" className=" bg-blue-50">
        <Registration />
      </section>
      <section id="testimonials" className=" bg-blue-50">
        <Testimonials />
      </section>
      <section id="faq" className=" bg-blue-50">
        <FAQ />
      </section>
      <section id="contact" className=" bg-blue-50">
        <Contact />
      </section>
    </main>
  );
}
// bJQJZMS6cRQMkOjK