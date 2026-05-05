import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorPlaceholder from "../../assets/doctor_placeholder.png";
import doctorCutout from "../../assets/doc-placeholder-nobg.png";
import heroPortrait from "../../assets/hero.png";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    year: "2010",
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    institution: "Maulana Azad Medical College, Delhi",
    type: "education",
    image: doctorCutout,
    description:
      "Graduated with distinction while building strong foundations in clinical diagnosis and patient-first care.",
  },
  {
    id: 2,
    year: "2013",
    title: "MD Urology",
    institution: "University of Delhi",
    type: "education",
    image: doctorPlaceholder,
    description:
      "Focused on reconstructive urology and oncological pathways with a research-driven approach to treatment planning.",
  },
  {
    id: 3,
    year: "2015",
    title: "Senior Residency",
    institution: "AIIMS, New Delhi",
    type: "career",
    image: heroPortrait,
    description:
      "Handled high-volume tertiary-care cases and sharpened decision making for complex surgical interventions.",
  },
  {
    id: 4,
    year: "2018",
    title: "Fellowship in Uro-Oncology",
    institution: "Max Healthcare, Delhi",
    type: "education",
    image: doctorCutout,
    description:
      "Advanced training in precision cancer surgery, multidisciplinary collaboration, and evidence-based outcomes.",
  },
  {
    id: 5,
    year: "2020",
    title: "Consultant Uro-Oncologist",
    institution: "Leading Multi-speciality Hospital",
    type: "career",
    image: doctorPlaceholder,
    description:
      "Developed a signature treatment model that balances modern technology with deeply personalized counselling.",
  },
  {
    id: 6,
    year: "2023",
    title: "Director, Urology & Uro-Oncology",
    institution: "Modern Urology Practice",
    type: "career",
    image: heroPortrait,
    description:
      "Leading advanced cancer programs, mentoring younger surgeons, and shaping long-term clinical excellence.",
  },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !stage || !track || !progress) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(".timeline-panel");
        const cards = gsap.utils.toArray(".timeline-card-shell");
        const nodes = gsap.utils.toArray(".timeline-big-node");

        gsap.set(progress, { transformOrigin: "left center", scaleX: 0 });
        gsap.set(cards, { opacity: 0.45, y: 40, rotateX: -8, scale: 0.92 });
        gsap.set(nodes, { opacity: 0.55, scale: 0.88, rotate: -6 });
        gsap.set(cards[0], { opacity: 1, y: 0, rotateX: 0, scale: 1 });
        gsap.set(nodes[0], { opacity: 1, scale: 1, rotate: 0 });

        const viewportWidth = stage.clientWidth || window.innerWidth;
        const horizontalTravelPx = Math.max(0, track.scrollWidth - viewportWidth);
        const scrollDistance = Math.max(1400, horizontalTravelPx * 0.45);

        const mainTl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        mainTl.to(track, { x: -horizontalTravelPx }, 0);
        mainTl.to(progress, { scaleX: 1 }, 0);

        const activatePanel = (activeIndex) => {
          panels.forEach((_, index) => {
            const isActive = index === activeIndex;
            gsap.to(cards[index], {
              opacity: isActive ? 1 : 0.45,
              y: isActive ? 0 : 40,
              rotateX: isActive ? 0 : -8,
              scale: isActive ? 1 : 0.92,
              duration: 0.35,
              overwrite: true,
            });
            gsap.to(nodes[index], {
              opacity: isActive ? 1 : 0.55,
              scale: isActive ? 1 : 0.88,
              rotate: isActive ? 0 : -6,
              duration: 0.35,
              overwrite: true,
            });
          });
        };

        panels.forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            containerAnimation: mainTl,
            start: "left center",
            end: "right center",
            onEnter: () => activatePanel(index),
            onEnterBack: () => activatePanel(index),
          });
        });

        gsap.to(".timeline-big-node img", {
          y: -18,
          duration: 3.2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
        });
      }, section);

      return () => ctx.revert();
    });

    mm.add("(max-width: 900px)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray(".timeline-panel").forEach((panel) => {
          const node = panel.querySelector(".timeline-big-node");
          const card = panel.querySelector(".timeline-card-shell");

          gsap.fromTo(
            [node, card],
            { opacity: 0, y: 45 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: panel,
                start: "top 84%",
                end: "top 50%",
                scrub: 0.5,
              },
            }
          );
        });
      }, section);

      return () => ctx.revert();
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="timeline-section" ref={sectionRef}>
      <div className="timeline-header">
        <span className="timeline-tagline">Origins to Leadership</span>
        <h2 className="timeline-title">Education & Career Atlas</h2>
        <p className="timeline-subtitle">
          Scroll through an immersive horizontal journey with milestone portraits,
          precision timelines, and evolving depth.
        </p>
      </div>

      <div className="timeline-stage" ref={stageRef}>
        <div className="timeline-progress-rail">
          <span className="timeline-progress-fill" ref={progressRef} />
        </div>

        <div className="timeline-track" ref={trackRef}>
          {timelineData.map((item) => (
            <article className="timeline-panel" key={item.id}>
              <div className="timeline-big-node">
                <span className="timeline-node-ring" />
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="timeline-year-chip">{item.year}</span>
              </div>

              <div className="timeline-card-shell">
                <p className="timeline-meta-row">
                  <span className="timeline-meta-type">{item.type}</span>
                  <span className="timeline-meta-dot" />
                  <span>{item.institution}</span>
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
