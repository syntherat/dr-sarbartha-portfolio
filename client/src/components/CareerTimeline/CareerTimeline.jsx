import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import doctorAvatar from "../../assets/drskp-pfp.jpg";
import "./CareerTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: 1,
    start: 2006,
    period: "2006 - 2012",
    title: "MBBS",
    institution: "Nilratan Sircar Medical College Hospital, Kolkata",
    type: "education",
    description:
      "Completed rigorous medical training, including a full-year clinical internship, with a strong focus on diagnostic precision and patient-centered care.",
  },
  {
    id: 2,
    start: 2013,
    period: "2013 - 2016",
    title: "MS in General Surgery",
    institution: "Nilratan Sircar Medical College Hospital, Kolkata",
    type: "education",
    description:
      "Secured second rank at the university level during advanced surgical training, with a focus on evidence-based care and clinical decision-making.",
  },
  {
    id: 3,
    start: 2013,
    period: "2013 - 2016",
    title: "Jr. Resident, General Surgery",
    institution: "NRSMCH, Kolkata",
    type: "career",
    description:
      "Junior residency in general surgery alongside MS training, across emergency, ward, and operative care.",
  },
  {
    id: 4,
    start: 2016,
    period: "2016 - 2017",
    title: "Sr. Resident, General Surgery",
    institution: "NRSMCH, Kolkata",
    type: "career",
    description:
      "Senior residency in general surgery with greater operative responsibility before moving into urology.",
  },
  {
    id: 5,
    start: 2017,
    period: "2017 - 2020",
    title: "M.Ch in Urology",
    institution: "Gauhati Medical College and Hospital, Assam",
    type: "education",
    description:
      "Completed super-specialty training in urology with focused expertise in advanced surgical care and patient-centered treatment.",
  },
  {
    id: 6,
    start: 2017,
    period: "2017 - 2020",
    title: "Sr. Resident, Urology and Renal Transplant",
    institution: "Gauhati Medical College Hospital, Guwahati",
    type: "career",
    description:
      "Senior residency in urology and renal transplant during M.Ch training, building the base for super-specialty practice.",
  },
  {
    id: 7,
    start: 2020,
    period: "2020",
    title: "Certified Console Surgeon, DaVinci Robotic System",
    institution: "Intuitive DaVinci Surgical System",
    type: "education",
    description:
      "Certified console surgeon in robotic-assisted urology, specializing in precision-driven, minimally invasive surgical techniques.",
  },
  {
    id: 8,
    start: 2020,
    period: "2020 - 2023",
    title: "Attending Consultant, Urooncology and Robotic Surgery",
    institution: "RGCIRC, Delhi",
    type: "career",
    description:
      "Training and practice in uro-oncology and robotic surgery at Rajiv Gandhi Cancer Institute and Research Centre.",
  },
  {
    id: 9,
    start: 2023,
    period: "2023 - Present",
    title: "Consultant, Urooncology and Robotic Surgery",
    institution: "RGCIRC, Delhi",
    type: "career",
    description:
      "Leads uro-oncology care across open, laparoscopic, and robotic-assisted surgery for cancers of the urinary and male reproductive systems.",
  },
];

// One row per start year: education on the left of the spine, career on the right.
const timelineRows = timelineData.reduce((rows, item) => {
  let row = rows.find((entry) => entry.year === item.start);

  if (!row) {
    row = { year: item.start, education: null, career: null };
    rows.push(row);
  }

  row[item.type] = item;
  return rows;
}, []);

const TimelineCard = ({ item }) => (
  <article className={`career-timeline-card career-timeline-card--${item.type}`}>
    <div className="career-timeline-card-content">
      <div className="career-timeline-card-top">
        <span className="career-timeline-type">{item.type}</span>
        <span className="career-timeline-period">{item.period}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="career-timeline-institution">{item.institution}</p>
      <p className="career-timeline-description">{item.description}</p>
    </div>
  </article>
);

const CareerTimeline = () => {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 761px) and (prefers-reduced-motion: no-preference)",
        isMobile: "(max-width: 760px) and (prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { isDesktop } = context.conditions;
        const yearLabel = root.querySelector(".career-timeline-avatar-year");

        root.classList.add("is-animated");

        const ctx = gsap.context(() => {
          // Light flowing down inside the spine.
          gsap.to(".career-timeline-spine-flow", {
            backgroundPositionY: "+=64px",
            duration: 1.2,
            ease: "none",
            repeat: -1,
          });

          gsap.utils.toArray(".career-timeline-spine-spark").forEach((spark, index) => {
            gsap.fromTo(
              spark,
              { top: "-8%" },
              { top: "100%", duration: 3.2, ease: "none", repeat: -1, delay: index * 1.05 }
            );
          });

          gsap.to(".career-timeline-avatar-ring", {
            rotate: 360,
            duration: 14,
            ease: "none",
            repeat: -1,
          });

          // Fill and avatar both follow the viewport center through the list.
          const travelTl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: ".career-timeline-rows",
              start: "top center",
              end: "bottom center",
              scrub: 0.6,
            },
          });

          travelTl
            .fromTo(
              ".career-timeline-spine-fill",
              { clipPath: "inset(0% 0% 100% 0%)" },
              { clipPath: "inset(0% 0% 0% 0%)" },
              0
            )
            .fromTo(".career-timeline-avatar", { top: "0%" }, { top: "100%" }, 0);

          gsap.utils.toArray(".career-timeline-row").forEach((row, index) => {
            const marker = row.querySelector(".career-timeline-marker");

            ScrollTrigger.create({
              trigger: marker,
              start: "center center",
              onEnter: () => {
                row.classList.add("is-reached");
                yearLabel.textContent = timelineRows[index].year;
                gsap.fromTo(
                  marker.querySelector(".career-timeline-marker-ring"),
                  { scale: 1, opacity: 0.9 },
                  { scale: 3.2, opacity: 0, duration: 0.9, ease: "power2.out" }
                );
                gsap.fromTo(
                  ".career-timeline-avatar-photo",
                  { scale: 1.15 },
                  { scale: 1, duration: 0.8, ease: "elastic.out(1, 0.45)" }
                );
              },
              onLeaveBack: () => {
                row.classList.remove("is-reached");
                yearLabel.textContent = timelineRows[Math.max(0, index - 1)].year;
              },
            });

            row.querySelectorAll(".career-timeline-card").forEach((card) => {
              // Education cards sit left of the spine on desktop only; on mobile everything enters from the right.
              const fromLeft = isDesktop && card.classList.contains("career-timeline-card--education");

              gsap
                .timeline({
                  scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                })
                .fromTo(
                  card,
                  {
                    opacity: 0,
                    x: fromLeft ? -70 : 70,
                    rotationY: fromLeft ? 20 : -20,
                    transformPerspective: 1000,
                    transformOrigin: fromLeft ? "right center" : "left center",
                  },
                  { opacity: 1, x: 0, rotationY: 0, duration: 1, ease: "power3.out" }
                )
                .from(
                  card.querySelectorAll(".career-timeline-card-content > *"),
                  { y: 16, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.07 },
                  "<0.3"
                );
            });
          });
        }, root);

        return () => {
          ctx.revert();
          root.classList.remove("is-animated");
          root.querySelectorAll(".career-timeline-row").forEach((row) => row.classList.remove("is-reached"));
        };
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div className="career-timeline" ref={rootRef}>
      <div className="career-timeline-legend" aria-hidden="true">
        <span className="career-timeline-legend-item career-timeline-legend-item--education">
          Education
        </span>
        <span className="career-timeline-legend-item career-timeline-legend-item--career">
          Career
        </span>
      </div>

      <div className="career-timeline-body">
        <div className="career-timeline-spine" aria-hidden="true">
          <span className="career-timeline-spine-fill">
            <span className="career-timeline-spine-flow" />
            <span className="career-timeline-spine-spark" />
            <span className="career-timeline-spine-spark" />
            <span className="career-timeline-spine-spark" />
          </span>

          <span className="career-timeline-avatar">
            <span className="career-timeline-avatar-ring" />
            <img
              className="career-timeline-avatar-photo"
              src={doctorAvatar}
              alt=""
              loading="lazy"
            />
            <span className="career-timeline-avatar-year">{timelineRows[0].year}</span>
          </span>
        </div>

        <ol className="career-timeline-rows">
          {timelineRows.map((row) => (
            <li className="career-timeline-row" key={row.year}>
              <div className="career-timeline-side career-timeline-side--education">
                {row.education && <TimelineCard item={row.education} />}
              </div>

              <div className="career-timeline-marker">
                <span className="career-timeline-marker-dot">
                  <span className="career-timeline-marker-ring" />
                </span>
                <span className="career-timeline-marker-year">{row.year}</span>
              </div>

              <div className="career-timeline-side career-timeline-side--career">
                {row.career && <TimelineCard item={row.career} />}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CareerTimeline;
