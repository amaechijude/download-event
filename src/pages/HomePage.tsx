import { AboutUs } from "../components/About";
import { IntentionSection } from "../components/IntentionSection";
import { DesktopHero } from "..";
import { Exhibition } from "../components/Exhibition";
import { Participate } from "../components/Participate";
import { TeamSection } from "../components/TeamSection";
import { NewsletterSection } from "../components/NewsLetter";
import Hero from "../components/dumps/Hero";


export default function HomePage() {
    return (
      <>
        <Hero />
        <DesktopHero />
        <AboutUs />
        <IntentionSection />
        <Exhibition />
        <Participate />
        <TeamSection />
        <NewsletterSection />
      </>
    );
}