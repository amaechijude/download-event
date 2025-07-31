import { AboutUs } from "../components/About/About";
import { Participants } from "../components/Participants/Paticipants";
import { VisibilitySection } from "../components/VisibilitySection/VisibilitySection";
import { DesktopHero } from "../screens/DesktopHero";

export default function HomePage() {
    return (
        <>
        <DesktopHero />
        <AboutUs />
        <Participants />
        <VisibilitySection />
        </>
    );
}