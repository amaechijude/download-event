import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DesktopHero } from "./screens/DesktopHero";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <DesktopHero />
  </StrictMode>,
);
