import { AboutUs } from "../components/About";
import { IntentionSection } from "../components/IntentionSection";
import { Exhibition } from "../components/Exhibition";
import { Participate } from "../components/Participate";
import { TeamSection } from "../components/TeamSection";
import { NewsletterSection } from "../components/NewsLetter";
import Hero from "../components/Hero";


export default function HomePage() {
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