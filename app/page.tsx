import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Steps from "../components/Steps";
import DashboardSection from "../components/DashboardSection";
import Features from "../components/Features";
import OutcomesSection from "../components/OutcomesSection";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CustomerDiversity from "../components/CustomerDiversity";
import Footer from "../components/Footer";
// import DarkHero from "../components/DarkHero";
import FAQ from "../components/FAQSection";
import UseCases from "../components/UseCasesSection";
import MapSection from "../components/MapSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      
      <section id="partners">
        <Marquee />
      </section>
      
      <section id="personas">
        <CustomerDiversity />
      </section>
      
      <section id="why-leadsprint">
        <DashboardSection />
      </section>
      
      <section id="how-it-works">
        <Steps />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="outcomes">
        <OutcomesSection />
      </section>
      
      <section id="use-cases">
        <UseCases />
      </section>
      
      <section id="customers">
        <MapSection />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="pricing">
        <Pricing />
      </section>
      
      <section id="faq">
        <FAQ />
      </section>
      
      <Footer />
    </div>
  );
}
