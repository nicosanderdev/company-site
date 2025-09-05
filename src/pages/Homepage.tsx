import CallToAction from "./home_sections/CallToAction";
import ContactForm from "./home_sections/ContactForm";
import FaQ from "./home_sections/FaQ";
import FeatureSection from "./home_sections/FeatureSection";
import Hero from "./home_sections/Hero";
import MyServices from "./home_sections/MyServices";
import Pricing from "./home_sections/Pricing";
import StartingSteps from "./home_sections/StartingSteps";

export function Homepage() {
  return (
    <>
      <Hero />
      <MyServices />
      <StartingSteps />
      <FeatureSection />
      <FaQ />
      <Pricing />
      <CallToAction />
      <ContactForm />
    </>
  )
}