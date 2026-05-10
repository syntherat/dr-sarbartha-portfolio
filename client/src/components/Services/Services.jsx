import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Services.css";

const services = [
  {
    id: "01",
    title: "Facial Aesthetics",
    category: "Precision",
    description:
      "Expert Rhinoplasty and Facelifts designed to enhance your natural harmony.",
    image:
      "https://images.unsplash.com/photo-1598440441113-149959616335?q=80&w=800&auto=format&fit=crop",
    size: "large",
  },
  {
    id: "02",
    title: "Body Sculpting",
    category: "Contour",
    description: "Advanced Liposuction and Tummy Tuck procedures.",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "03",
    title: "Breast Surgery",
    category: "Form",
    description:
      "Augmentation and reduction with a focus on natural proportions.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    id: "04",
    title: "Non-Surgical",
    category: "Refresh",
    description: "Premium Fillers and Botox for a rejuvenated appearance.",
    image:
      "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
  {
    id: "05",
    title: "Reconstructive",
    category: "Restoration",
    description: "Restoring form and function with surgical excellence.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
    size: "medium",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;

    if (!section || !cursor) return;

    const moveCursor = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(cursor, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(cursor, {
        x: x,
        y: y,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0,
      });

      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    section.addEventListener("mousemove", moveCursor);
    section.addEventListener("mouseenter", handleMouseEnter);
    section.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      section.removeEventListener("mousemove", moveCursor);
      section.removeEventListener("mouseenter", handleMouseEnter);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const onTitleEnter = () => {
    gsap.to(cursorRef.current, { scale: 4, duration: 0.4, ease: "power2.out" });
  };

  const onTitleLeave = () => {
    gsap.to(cursorRef.current, { scale: 1, duration: 0.4, ease: "power2.out" });
  };

  return (
    <section className="services-section" id="services" ref={sectionRef}>
      <div className="brush-divider top">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,120 C100,100 200,110 300,80 C400,50 500,70 600,40 C700,10 800,30 900,10 C1000,-10 1100,20 1200,0 L1200,120 L0,120 Z" />
          <path d="M0,110 C150,90 300,120 450,85 C600,50 750,90 900,45 C1050,0 1200,60 1200,60 L1200,120 L0,120 Z" opacity="0.4" />
          <path d="M0,100 C120,115 240,85 360,105 C480,125 600,95 720,115 C840,135 960,105 1080,125 C1200,145 1200,120 1200,120 L1200,120 L0,120 Z" opacity="0.2" />
        </svg>
      </div>

      <div className="custom-cursor" ref={cursorRef}></div>
      <div className="services-container">
        <div className="services-header">
          <div className="header-left">
            <span className="tag">Expertise</span>
            <h2
              className="section-title"
              onMouseEnter={onTitleEnter}
              onMouseLeave={onTitleLeave}
            >
              Aesthetic <br /> & Reconstructive
            </h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              Dedicated to the art of surgical precision. We combine years of
              experience with a modern aesthetic eye to provide results that are
              both transformative and timeless.
            </p>
          </div>
        </div>

        <div className="bento-grid">
          {services.map((service) => (
            <div key={service.id} className={`bento-item ${service.size}`}>
              <div className="item-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="item-image"
                />
                <div className="item-overlay"></div>
              </div>
              <div className="item-content">
                <div className="item-top">
                  <span className="item-category">{service.category}</span>
                  <span className="item-id">{service.id}</span>
                </div>
                <div className="item-bottom">
                  <h3
                    className="item-title"
                    onMouseEnter={onTitleEnter}
                    onMouseLeave={onTitleLeave}
                  >
                    {service.title}
                  </h3>
                  <p className="item-description">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="brush-divider bottom">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,120 C100,100 200,110 300,80 C400,50 500,70 600,40 C700,10 800,30 900,10 C1000,-10 1100,20 1200,0 L1200,120 L0,120 Z" />
          <path d="M0,110 C150,90 300,120 450,85 C600,50 750,90 900,45 C1050,0 1200,60 1200,60 L1200,120 L0,120 Z" opacity="0.4" />
          <path d="M0,100 C120,115 240,85 360,105 C480,125 600,95 720,115 C840,135 960,105 1080,125 C1200,145 1200,120 1200,120 L1200,120 L0,120 Z" opacity="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default Services;
