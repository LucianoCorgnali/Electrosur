import { useRef } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { HeroSection } from "../sections/HeroSection";
import { SolutionsSection } from "../sections/SolutionsSection";
import { CatalogSection } from "../sections/CatalogSection";
import { CompanySection } from "../sections/CompanySection";
import { ContactSection } from "../sections/ContactSection";
import { LocationSection } from "../sections/LocationSection";
import { IgnitionPage } from "../pages/IgnitionPage";
import { ServicePage } from "../pages/ServicePage";
import { CoolingPage } from "../pages/CoolingPage";

export function App() {
  const glowRef = useRef(null);
  const currentPath = window.location.pathname.replace(/\/+$/, "");
  const isIgnitionPage = currentPath === "/encendido-electricidad";
  const isServicePage = currentPath === "/service-mantenimiento";
  const isCoolingPage = currentPath === "/refrigeracion";
  const isInnerPage = isIgnitionPage || isServicePage || isCoolingPage;

  const moveGlow = (event) => {
    if (!glowRef.current) return;
    glowRef.current.style.left = `${event.clientX}px`;
    glowRef.current.style.top = `${event.clientY}px`;
    glowRef.current.style.opacity = "1";
  };

  const hideGlow = () => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div onPointerMove={moveGlow} onPointerLeave={hideGlow}>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <Header
        innerPage={isInnerPage}
        pageType={isServicePage ? "service" : isCoolingPage ? "cooling" : undefined}
      />
      {isIgnitionPage ? (
        <IgnitionPage />
      ) : isServicePage ? (
        <ServicePage />
      ) : isCoolingPage ? (
        <CoolingPage />
      ) : (
        <main>
          <HeroSection />
          <SolutionsSection />
          <CatalogSection />
          <CompanySection />
          <LocationSection />
          <ContactSection />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
