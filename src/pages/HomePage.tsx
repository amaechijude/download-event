import { AboutUs } from "../components/About";
import { IntentionSection } from "../components/IntentionSection";
import { Participants } from "../components/Paticipants";
import { VisibilitySection } from "../components/VisibilitySection";
import { DesktopHero } from "..";

export default function HomePage() {
    return (
        <>
        <DesktopHero />
        <AboutUs />
        <IntentionSection />
        <Participants />
        <VisibilitySection />
        </>
    );
}