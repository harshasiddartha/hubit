import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Steps from "../components/Steps";
import DashboardSection from "../components/DashboardSection";
import Features from "../components/Features";
import ProgressTracking from "../components/ProgressTracking";
import TaskTracking from "../components/TaskTracking";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CustomerDiversity from "../components/CustomerDiversity";
import Footer from "../components/Footer";
import DarkHero from "../components/DarkHero";
import FAQ from "../components/FAQSection";
import UseCases from "../components/UseCasesSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Steps />
      <DashboardSection />
      <Features />
      <ProgressTracking />
      <TaskTracking />
      <CustomerDiversity />
      <Pricing />
      <FAQ />
      <UseCases />
      <Testimonials />
      <DarkHero />
      <Footer />
    </div>
  );
}
