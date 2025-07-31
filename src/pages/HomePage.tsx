import { AboutUs } from "../components/About";
import { IntentionSection } from "../components/IntentionSection";
import { DesktopHero } from "..";
import { Exhibition } from "../components/Exhibition";
import { Participants } from "../components/Participants";
import { TeamSection } from "../components/TeamSection";
export default function HomePage() {
    return (
        <>
        <DesktopHero />
        <AboutUs />
        <IntentionSection />
        <Exhibition />
        <Participants />
        <TeamSection />
        </>
    );
}