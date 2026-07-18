import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: "Website Design",
    subtitle: "For businesses that don't have a website yet",
    description:
      "Clear, modern websites built to help businesses present their services professionally and convert more visitors into enquiries.",
  },
  {
    title: "Website Redesign",
    subtitle: "For businesses whose current website isn't working for them",
    description:
      "Refresh outdated websites with better structure, cleaner visuals, and a stronger message so your business feels more credible online.",
  },
  {
    title: "Google Business Profile Optimization",
    subtitle: "For businesses who want visibility without a full website",
    description:
      "Improve how your business appears locally with a better-optimized profile that supports visibility, trust, and customer actions.",
  },
];

const projects = [
  {
    name: "Rooh - Premium Restaurant Website",
    category: "Food & Hospitality",
    liveUrl: "https://cafe.mitul-patel.in/",
    image: "/images/project-aurum.webp",
    problem:
      "The restaurant struggled to show its high-end ambiance online, causing potential guests to choose competitors for special occasions.",
    solution:
      "Built a custom web platform featuring an interactive visual menu, high-resolution photo galleries, and integrated table booking functionality.",
    outcome:
      "Designed for premium visual appeal and intuitive table reservations.",
  },
  {
    name: "Swara - Music Academy Website",
    category: "Education",
    liveUrl: "https://music.mitul-patel.in/",
    image: "/images/project-swara.webp",
    problem:
      "Prospective students had difficulty finding class schedules and faculty details, leading to high drop-off rates on the previous site.",
    solution:
      "Developed a structured curriculum portal with filtered class browsing and direct trial booking forms.",
    outcome:
      "Built to eliminate confusion and drive easy trial class bookings.",
  },
  {
    name: "City Care - Multispeciality Hospital Website",
    category: "Healthcare",
    liveUrl: "https://citycare.mitul-patel.in/",
    image: "/images/project-city-care.webp",
    problem:
      "Patients were confused by disorganized medical department lists and could not easily find emergency contact numbers on mobile devices.",
    solution:
      "Implemented a clear navigation system with dedicated department pages and a sticky emergency contact banner.",
    outcome:
      "Optimized for rapid patient navigation and emergency contact visibility.",
  },

  {
    name: "Velora Arts Academy - Multi-Speciality Creative Institute Website",
    category: "Education",
    liveUrl: "https://class-two-theta.vercel.app/",
    image: "/images/project-velora.webp",
    problem:
      "The institute's diverse programs like dance, music, and fine arts were tangled together on a single page, confusing parents trying to register their kids.",
    solution:
      "Designed segmented program landing pages with individual faculty profiles and targeted registration funnels for each discipline.",
    outcome:
      "Created segmented funnels for clear, overwhelm-free program browsing.",
  },
];

const contactLinks = {
  whatsapp: "https://wa.me/919879363270",
  email: "mailto:mitul4733@gmail.com",
};

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading fade-up">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [emailCopied, setEmailCopied] = useState(false);
  const heroRef = useRef(null);

  const categories = ['All', 'Food & Hospitality', 'Education', 'Healthcare'];
  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">
          Mitul Patel
        </a>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero" ref={heroRef}>
          <div className="hero-copy fade-up">
            <span className="eyebrow">Freelance Web Designer in Surat</span>
            <h1>Websites for business owners who want to grow, not just have a website.</h1>
            <p className="hero-text">
              Most businesses in Surat lose customers to competitors with better Google reviews and a real website, not because they're worse, but because they're harder to find.
            </p>

            <div className="hero-cta-context" style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>
              <strong>Free Google Maps ranking check &middot; Websites from ₹2,999</strong>
            </div>

            <div className="hero-actions">
              <a className="button button-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <a className="button button-secondary" href="#work">
                View Work
              </a>
            </div>

            <ul className="hero-meta" aria-label="Contact details">
              <li>Surat, Gujarat, India</li>
              <li>
                <a href="tel:+919879363270">+91 9879363270</a>
              </li>
              <li>
                <a href={contactLinks.email} target="_blank" rel="noreferrer">mitul4733@gmail.com</a>
              </li>
            </ul>
          </div>

          <div className="hero-card fade-up-delayed">
            <div className="hero-card-inner">
              <span className="mini-label">What I focus on</span>
              <h2>Clean websites that make your business look credible and easy to choose.</h2>
              <p>
                Website design, redesign, and Google Business Profile support for
                businesses that want a stronger online presence without
                unnecessary complexity.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <SectionHeading
            eyebrow="Services"
            title="Practical design services for businesses that want clarity and trust."
            description="Each service is focused so your website and online presence support real business goals."
          />

          <div className="service-grid">
            {services.map((service) => (
              <article className="card fade-up" key={service.title}>
                <h3>{service.title}</h3>
                <p className="service-subtitle" style={{ fontSize: '0.9rem', fontWeight: 500, margin: '8px 0 12px', color: '#555' }}>
                  {service.subtitle}
                </p>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="fade-up" style={{ textAlign: "center", marginTop: "40px" }}>
            <a className="button button-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
              Discuss your project on WhatsApp
            </a>
          </div>
        </section>

        <section className="section" id="work">
          <p style={{ maxWidth: "720px", margin: "0 0 16px", fontSize: "0.95rem", color: "#666" }} className="fade-up">Concept projects designed to demonstrate real-world problem solving — available for live viewing.</p>
          <SectionHeading
            eyebrow="Selected Work"
            title="A small set of focused projects."
            description="A simple portfolio that highlights the problem, approach, and result without unnecessary noise."
          />

          <div className="filter-tabs fade-up">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="project-list">
            {filteredProjects.map((project) => (
              <article className="project-card fade-up" key={project.name}>
                <div className="project-header">
                  <span className="project-tag">CONCEPT PROJECT</span>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-actions">
                  <a
                    className="button button-secondary"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Site
                  </a>
                </div>

                {project.image && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-image-container"
                    onTouchStart={() => { }}
                  >
                    <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" width="800" height="450" className="project-image" />
                  </a>
                )}

                <div className="project-content">
                  <div>
                    <span className="project-label">Problem</span>
                    <p>{project.problem}</p>
                  </div>
                  <div>
                    <span className="project-label">Solution</span>
                    <p>{project.solution}</p>
                  </div>
                  <div>
                    <span className="project-label">Outcome</span>
                    <p>{project.outcome}</p>
                    <a
                      href={contactLinks.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block", marginTop: "14px", fontSize: "0.92rem", color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}
                    >
                      Want a website like this? &rarr; Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-split" id="about">
          <div className="fade-up">
            <SectionHeading
              eyebrow="About"
              title="No fluff, just websites that work for your business."
              description=""
            />
          </div>

          <div className="about-copy fade-up-delayed">
            <div className="about-content-wrapper">
              <img
                src="/images/profile-photo.webp"
                alt="Mitul Patel"
                className="profile-photo"
                loading="lazy"
                width="160"
                height="192"
              />
              <div className="about-text">
                <p>
                  I am Mitul Patel, a freelance web designer focused on helping
                  businesses grow online with a clean and professional digital
                  presence.
                </p>
                <p>
                  My work is centered on clarity: stronger messaging, better visual
                  structure, and websites that make it easier for potential customers
                  to trust your business and take the next step.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel fade-up">
            <span className="eyebrow">Contact</span>
            <h2>Need a website that feels more professional and easier to trust?</h2>
            <p>
              If you are building a new website, redesigning an existing one, or
              improving your Google Business Profile, let&apos;s talk.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
                Message on WhatsApp
              </a>
              <button
                className="button button-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("mitul4733@gmail.com").then(() => {
                    setEmailCopied(true);
                    setTimeout(() => setEmailCopied(false), 2000);
                  });
                }}
                style={{ fontFamily: 'inherit', fontSize: 'inherit', cursor: 'pointer' }}
              >
                {emailCopied ? "Email copied!" : "Copy an Email"}
              </button>
            </div>
          </div>
        </section>
      </main>

      <div className={`sticky-cta-bar ${showSticky ? 'visible' : ''}`}>
        <div className="sticky-cta-content">
          <a className="button button-primary" href={contactLinks.whatsapp} target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
