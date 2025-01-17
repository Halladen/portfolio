import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import { ScrollProvider } from "./contexts/ScrollContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <ThemeProvider>
          <main>
            <Navbar />
            <div className="container mt-16 px-5 md:px-10 ">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;
