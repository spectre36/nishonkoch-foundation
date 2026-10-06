import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import FeaturedProjects from "../components/FeaturedProjects";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}

export default Home;