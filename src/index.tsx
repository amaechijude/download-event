import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NotFound } from "./components/Notfound";
import { Navbar } from "./components/Navbar";
import Sponsor from "./pages/Sponsor";
import { Footer2 } from "./components/Footer";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer2 />
    </BrowserRouter>
  </StrictMode>
);
