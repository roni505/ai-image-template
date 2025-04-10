import Customer from "@/ui/customer";
import FAQ from "@/ui/faq";
import Features from "@/ui/features";
import FinalCTA from "@/ui/final-cta";
import Footer from "@/ui/footer";
import Hero from "@/ui/hero";
import Pricing from "@/ui/pricing";

export default function Home() {
  return (
    <>
      <header>
        <Hero />
      </header>
      <main>
        <section>
          <Customer />
        </section>
        <section>
          <Features />
        </section>
        <section>
          <Pricing />
        </section>
        <section>
          <FAQ />
        </section>
        <section>
          <FinalCTA />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
