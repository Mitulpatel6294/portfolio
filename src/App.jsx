const services = [
  {
    title: "Business Website Design",
    subtitle: "For businesses ready to invest in growth",
    description:
      "Clear, modern websites built to help businesses present their services professionally and convert more visitors into enquiries.",
  },
  {
    title: "Website Redesign",
    subtitle: "For businesses ready to invest in growth",
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
    name: "Aurum - Premium Restaurant Website",
    category: "Website Design",
    liveUrl: "https://restaurant-vcxv.vercel.app/",
    image: "/images/project-aurum.webp",
    problem:
      "The restaurant struggled to show its high-end ambiance online, causing potential guests to choose competitors for special occasions.",
    solution:
      "Built a custom web platform featuring an interactive visual menu, high-resolution photo galleries, and integrated table booking functionality.",
    outcome:
      "Gained a steady increase in weekend table reservations booked directly through the site.",
  },
  {
    name: "Swara - Music Academy Website",
    category: "Website Design",
    liveUrl: "https://music-sepia-theta.vercel.app/",
    image: "/images/project-swara.webp",
    problem:
      "Prospective students had difficulty finding class schedules and faculty details, leading to high drop-off rates on the previous site.",
    solution:
      "Developed a structured curriculum portal with filtered class browsing and direct trial booking forms.",
    outcome:
      "Received twice as many trial class requests compared to the old website.",
  },
  {
    name: "Shringar Studio - Luxury Beauty Salon Website",
    category: "Website Design",
    liveUrl: "https://shringar-two.vercel.app/",
    image: "/images/project-shringar.webp",
    problem:
      "The salon relied entirely on social media for bookings and lacked a centralized portfolio to display bridal makeup work to high-ticket clients.",
    solution:
      "Created a categorized gallery site showcasing distinct beauty services alongside a prominent WhatsApp consultation link.",
    outcome:
      "Secured more high-value bridal makeup bookings from local search traffic.",
  },
  {
    name: "City Care - Multispeciality Hospital Website",
    category: "Website Design",
    liveUrl: "https://city-care-surat.vercel.app/",
    image: "/images/project-city-care.webp",
    problem:
      "Patients were confused by disorganized medical department lists and could not easily find emergency contact numbers on mobile devices.",
    solution:
      "Implemented a clear navigation system with dedicated department pages and a sticky emergency contact banner.",
    outcome:
      "Helped patients find the right doctors faster, reducing front-desk calls about basic facility details.",
  },

  {
    name: "Velora Arts Academy - Multi-Speciality Creative Institute Website",
    category: "Website Design",
    liveUrl: "https://class-two-theta.vercel.app/",
    image: "/images/project-velora.webp",
    problem:
      "The institute's diverse programs like dance, music, and fine arts were tangled together on a single page, confusing parents trying to register their kids.",
    solution:
      "Designed segmented program landing pages with individual faculty profiles and targeted registration funnels for each discipline.",
    outcome:
      "Filled all available slots for the upcoming summer batch entirely through online registrations.",
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
        <section className="hero" id="hero">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Freelance Web Designer in Surat</span>
            <h1>Websites for business owners who want to grow, not just have a website.</h1>
            <p className="hero-text">
              I design professional websites and improve local presence so
              businesses can build trust, communicate value clearly, and turn
              more visitors into enquiries.
            </p>

            <div className="hero-cta-context" style={{ marginBottom: '12px', fontSize: '0.9rem', color: '#666' }}>
              <strong>Free Google Business Profile audit &middot; Websites from ₹2,999</strong>
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
                <a href={contactLinks.email}>mitul4733@gmail.com</a>
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
        </section>

        <section className="section" id="work">
          <SectionHeading
            eyebrow="Selected Work"
            title="A small set of focused projects."
            description="A simple portfolio that highlights the problem, approach, and result without unnecessary noise."
          />

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card fade-up" key={project.name}>
                <div className="project-header">
                  <span className="project-tag">{project.category}</span>
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
              title="A direct and business-focused approach."
              description=""
            />
          </div>

          <div className="about-copy fade-up-delayed">
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
              <a className="button button-secondary" href={contactLinks.email}>
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
