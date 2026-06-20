import { useEffect, useRef, useState } from "react";
import { Counter, Reveal } from "../components/ui/Motion";
import { stats, steps } from "../data/siteContent";

export function CompanySection() {
  const [activeStep, setActiveStep] = useState(null);
  const routeRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const updateMode = () => setIsCompact(media.matches);

    updateMode();
    media.addEventListener("change", updateMode);
    return () => media.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    if (!isCompact || !routeRef.current) return undefined;

    const nodes = [...routeRef.current.querySelectorAll(".step")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;
        setActiveStep(nodes.indexOf(visibleEntry.target));
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-18% 0px -30% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isCompact]);

  return (
    <>
      <section className="numbers section" id="empresa">
        <div className="numbers-copy">
          <Reveal as="p" className="kicker">RESPALDO ELECTROSUR</Reveal>
          <Reveal as="h2" className="display">
            EXPERIENCIA QUE<br /><span>SE NOTA EN CADA ENTREGA.</span>
          </Reveal>
          <Reveal as="p">
            Desde Berazategui acompañamos a empresas de logística, constructoras y servicios
            que necesitan respuestas concretas, sin vueltas.
          </Reveal>
        </div>

        <div className="stats">
          {stats.map(({ value, suffix, label, animated = true }, index) => (
            <Reveal className="stat" key={label} style={{ "--stat-index": index }}>
              {animated ? <Counter value={value} /> : <strong>{value}</strong>}
              <b>{suffix}</b>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="route" ref={routeRef}>
        <div className="route-content">
          <Reveal as="p" className="kicker">SIMPLE, RÁPIDO, DIRECTO</Reveal>
          <Reveal as="h2" className="display">
            PEDÍ. RECIBÍ.<br /><span>SEGUÍ EN MOVIMIENTO.</span>
          </Reveal>
          <div
            className="steps"
            style={{ "--route-progress": activeStep === null ? "0%" : `${((activeStep + 1) / steps.length) * 100}%` }}
            onMouseLeave={() => {
              if (!isCompact) setActiveStep(null);
            }}
          >
            <span className="steps-progress" aria-hidden="true"><span /></span>
            {steps.map(({ title, text }, index) => (
              <Reveal
                className={`step ${activeStep !== null && index <= activeStep ? "step-reached" : ""} ${activeStep === index ? "step-active" : ""}`}
                key={title}
                tabIndex="0"
                onMouseEnter={() => {
                  if (!isCompact) setActiveStep(index);
                }}
                onFocus={() => setActiveStep(index)}
                onBlur={() => {
                  if (!isCompact) setActiveStep(null);
                }}
              >
                <b>0{index + 1}</b>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
