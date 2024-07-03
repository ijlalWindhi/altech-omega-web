import Hero from "@/components/fragments/landing-page/hero";
import Statistic from "@/components/fragments/landing-page/statistic";
import About from "@/components/fragments/landing-page/about";
import Pricing from "@/components/fragments/landing-page/pricing";
import Contact from "@/components/fragments/landing-page/contact";

function index() {
  return (
    <main className="relative flex min-h-screen flex-col pt-16">
      <Hero />
      <Statistic />
      <About />
      <Pricing />
      <Contact />
    </main>
  );
}

export default index;
