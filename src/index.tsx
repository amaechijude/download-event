import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NotFound } from "./screens/Notfound";
import Sponsor from "./pages/Sponsor";
import { Navbar } from "./components/Navbar/Navbar";
import Test from "./pages/Test";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
    <div className="relative w-full min-h-screen bg-[#031632] overflow-x-hidden">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    </BrowserRouter>
  </StrictMode>
);
