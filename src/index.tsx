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
import ContactUs from "./pages/Contact";
import Sponsor from "./pages/Sponsor";
import Volunteer from "./pages/Volunteer";
import { Footer2 } from "./components/Footer";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer2 />
    </BrowserRouter>
  </StrictMode>
);
