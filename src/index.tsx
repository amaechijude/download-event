import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopHero } from "./screens/DesktopHero";
import { AboutUs } from "./components/About/About";
import { VisibilitySection } from "./components/VisibilitySection/VisibilitySection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopHero />
    <AboutUs />
    <VisibilitySection />
  </StrictMode>,
);
