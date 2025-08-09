import { AboutUs } from "@/components/About";
import { Exhibition } from "@/components/Exhibition";
import Hero from "@/components/Hero";
import { IntentionSection } from "@/components/IntentionSection";
import { NewsletterSection } from "@/components/NewsLetter";
import { Participate } from "@/components/Participate";
import { TeamSection } from "@/components/TeamSection";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <IntentionSection />
      <Exhibition />
      <Participate />
      <TeamSection />
      <NewsletterSection />
    </>
  );
}
