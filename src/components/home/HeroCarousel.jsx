import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/fleet-hero.png",
    position: "center",
    fit: "cover",
  },
  {
    src: "/assets/hero/alternators-starters-wide.png",
    position: "center",
    fit: "cover",
  },
  {
    src: "/assets/hero/ignition-components-wide.png",
    position: "center",
    fit: "cover",
  },
  {
    src: "/assets/hero/lighting-components-wide.png",
    position: "center",
    fit: "cover",
  },
];

const AUTOPLAY_DELAY = 4000;

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Soluciones y repuestos ElectroSur"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="hero-slides" aria-live="off">
        {slides.map((slide, index) => (
          <div
            className={`hero-slide hero-slide-${slide.fit} ${index === activeSlide ? "is-active" : ""}`}
            aria-hidden={index !== activeSlide}
            key={slide.src}
            style={{ "--hero-slide-image": `url("${slide.src}")` }}
          >
            <img
              src={slide.src}
              alt=""
              style={{ objectPosition: slide.position, objectFit: slide.fit }}
              loading="eager"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-carousel-controls">
        <button type="button" onClick={showPrevious} aria-label="Imagen anterior">←</button>
        <div className="hero-carousel-dots" aria-label="Elegir imagen">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              onClick={() => setActiveSlide(index)}
              aria-label={`Ver imagen ${index + 1} de ${slides.length}`}
              aria-current={index === activeSlide ? "true" : undefined}
              key={slide.src}
            />
          ))}
        </div>
        <button type="button" onClick={showNext} aria-label="Imagen siguiente">→</button>
      </div>
    </div>
  );
}
