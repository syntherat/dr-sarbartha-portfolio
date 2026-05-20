import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorPlaceholder from "../../assets/drskp-pfp.jpg";
import doctorCutout from "../../assets/drskp-pfp.jpg";
import heroPortrait from "../../assets/drskp-pfp.jpg";
import "./Timeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    year: "2006 - 2012",
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    institution: "Nilratan Sircar Medical College Hospital, Kolkata",
    type: "education",
    image: doctorCutout,
    description:
      "Completed rigorous medical training, including a full-year clinical internship, with a strong focus on diagnostic precision and patient-centered care.",
  },
  {
    id: 2,
    year: "2013 - 2016",
    title: "MS in General Surgery",
    institution: "Nilratan Sircar Medical College Hospital, Kolkata",
    type: "education",
    image: doctorPlaceholder,
    description:
      "Secured second rank at the university level during advanced surgical training, with a focus on evidence-based care and clinical decision-making.",
  },
  {
    id: 3,
    year: "2017 - 2020",
    title: "M.Ch in Urology",
    institution: "Gauhati Medical College and Hospital, Assam",
    type: "education",
    image: heroPortrait,
    description:
      "Completed super-specialty training in urology with focused expertise in advanced surgical care and patient-centered treatment.",
  },
  {
    id: 4,
    year: "2020",
    title: "Certified Console Surgeon in DaVinci Surgical Robotic System",
    type: "education",
    image: doctorCutout,
    description:
      "Certified console surgeon in robotic-assisted urology, specializing in precision-driven, minimally invasive surgical techniques.",
  },
  {
    id: 5,
    year: "2013 - 2016",
    title: "Jr. Resident, General Surgery",
    institution: "NRSMCH, Kolkata",
    type: "career",
    image: doctorPlaceholder,
    description:
      "Lorem Ipsum dolor sit amet",
  },
  {
    id: 6,
    year: "2016 - 2017",
    title: "Sr. Resident, General Surgery",
    institution: "NRSMCH, Kolkata",
    type: "career",
    image: heroPortrait,
    description:
      "Lorem Ipsum dolor sit amet",
  },
  {
    id: 7,
    year: "2017 - 2020",
    title: "Sr. Resident, Urology and Renal Transplant",
    institution: "Gauhati Medical College Hospital, Guwahati",
    type: "career",
    image: heroPortrait,
    description:
      "Lorem Ipsum dolor sit amet",
  },
  {
    id: 8,
    year: "2020 - 2023",
    title: "Attending Consultant, Urooncology and Robotic Surgery",
    institution: "RGCIRC, Delhi",
    type: "career",
    image: heroPortrait,
    description:
      "Lorem Ipsum dolor sit amet",
  },
  {
    id: 9,
    year: "2023 - Present",
    title: "Consultant, Urooncology and Robotic Surgery",
    institution: "RGCIRC, Delhi",
    type: "career",
    image: heroPortrait,
    description:
      "Lorem Ipsum dolor sit amet",
  },
];

const Timeline = () => {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !stage || !track || !progress) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const triggers = [];

      const ctx = gsap.context(() => {
        const panels = gsap.utils.toArray(section.querySelectorAll(".timeline-panel"));
        const cards = gsap.utils.toArray(section.querySelectorAll(".timeline-card-shell"));
        const nodes = gsap.utils.toArray(section.querySelectorAll(".timeline-big-node"));

        if (!panels.length || !cards.length || !nodes.length) {
          return;
        }

        gsap.set(progress, { transformOrigin: "left center", scaleX: 0 });
        gsap.set(cards, { opacity: 0.62, y: 20, scale: 0.97 });
        gsap.set(nodes, { opacity: 0.72, scale: 0.95 });
        gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 });
        gsap.set(nodes[0], { opacity: 1, scale: 1 });

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

        if (mainTl.scrollTrigger) {
          triggers.push(mainTl.scrollTrigger);
        }

        mainTl.to(track, { x: -horizontalTravelPx }, 0);
        mainTl.to(progress, { scaleX: 1 }, 0);

        const activatePanel = (activeIndex) => {
          panels.forEach((_, index) => {
            const isActive = index === activeIndex;
            gsap.to(cards[index], {
              opacity: isActive ? 1 : 0.62,
              y: isActive ? 0 : 20,
              scale: isActive ? 1 : 0.97,
              duration: 0.35,
              overwrite: true,
            });
            gsap.to(nodes[index], {
              opacity: isActive ? 1 : 0.72,
              scale: isActive ? 1 : 0.95,
              duration: 0.35,
              overwrite: true,
            });
          });
        };

        panels.forEach((panel, index) => {
          const trigger = ScrollTrigger.create({
            trigger: panel,
            containerAnimation: mainTl,
            start: "left center",
            end: "right center",
            onEnter: () => activatePanel(index),
            onEnterBack: () => activatePanel(index),
          });

          triggers.push(trigger);
        });

      }, section);

      return () => {
        triggers.forEach((trigger) => trigger.kill(true));
        ctx.revert();
      };
    });

    mm.add("(max-width: 900px)", () => {
      const triggers = [];

      const ctx = gsap.context(() => {
        gsap.utils.toArray(section.querySelectorAll(".timeline-panel")).forEach((panel) => {
          const node = panel.querySelector(".timeline-big-node");
          const card = panel.querySelector(".timeline-card-shell");

          const animation = gsap.fromTo(
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

          if (animation.scrollTrigger) {
            triggers.push(animation.scrollTrigger);
          }
        });
      }, section);

      return () => {
        triggers.forEach((trigger) => trigger.kill(true));
        ctx.revert();
      };
    });

    return () => {
      mm.revert();
      gsap.killTweensOf([section, stage, track, progress]);
      gsap.set([section, stage, track, progress], { clearProps: "all" });
      ScrollTrigger.clearScrollMemory("manual");
      ScrollTrigger.refresh();
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
