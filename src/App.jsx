const services = [
  {
    title: "Business Website Design",
    description:
      "Clear, modern websites built to help small businesses present their services professionally and convert more visitors into enquiries.",
  },
  {
    title: "Website Redesign",
    description:
      "Refresh outdated websites with better structure, cleaner visuals, and a stronger message so your business feels more credible online.",
  },
  {
    title: "Google Business Profile Optimization",
    description:
      "Improve how your business appears locally with a better-optimized profile that supports visibility, trust, and customer actions.",
  },
];

const projects = [
  {
    name: "Aurum - Premium Restaurant Website",
    category: "Website Design",
    liveUrl: "https://restaurant-vcxv.vercel.app/",
    problem:
      "The restaurant needed a modern digital presence that could showcase its dining experience, menu offerings, and brand identity while encouraging more customer visits and reservations.",
    solution:
      "Designed and developed a visually rich restaurant website with immersive animations, elegant layouts, featured menu sections, customer testimonials, and clear call-to-action areas.",
    outcome:
      "Created a premium online experience that strengthened the restaurant's brand image, improved customer engagement, and made the business more appealing to potential diners.",
  },
  {
    name: "Swara - Music Academy Website",
    category: "Website Design",
    liveUrl: "https://music-sepia-theta.vercel.app/",
    problem:
      "The music academy needed a creative and professional online presence to showcase its classes, instructors, and artistic identity while attracting new students.",
    solution:
      "Designed and developed a highly interactive and animated website with a cinematic visual style, program highlights, instructor showcases, gallery sections, and social media integration.",
    outcome:
      "Created a memorable digital identity that elevated the academy's brand perception and provided an engaging experience for prospective students and parents.",
  },
  {
    name: "City Care - Multispeciality Hospital Website",
    category: "Website Design",
    liveUrl: "https://city-care-bice.vercel.app/",
    problem:
      "The hospital needed a clearer online presence so patients could quickly understand services and feel confident contacting the team.",
    solution:
      "Designed a clean, structured website with better content flow, stronger calls to action, and a professional visual tone.",
    outcome:
      "Created a more trustworthy digital presence that made the hospital easier to understand and simpler to contact.",
  },
  {
    name: "Velora Arts Academy - Multi-Speciality Creative Institute Website",
    category: "Website Design",
    liveUrl: "https://class-two-theta.vercel.app/",
    problem:
      "The academy needed a premium online presence that could professionally showcase its dance, zumba, music, and sketch classes while making it easier for students and parents to explore programs and connect.",
    solution:
      "Designed and developed a modern cinematic website with a luxury visual style, structured program sections, gallery showcases, class schedules, testimonials, and clear inquiry flows.",
    outcome:
      "Created a stronger digital identity for the academy, making the brand feel more professional, trustworthy, and visually memorable for new student inquiries.",
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
            <h1>Helping businesses grow online with clear, focused websites.</h1>
            <p className="hero-text">
              I design professional websites and improve local presence so
              businesses can build trust, communicate value clearly, and turn
              more visitors into enquiries.
            </p>

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
                    rel="noreferrer"
                  >
                    View Live Site
                  </a>
                </div>

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
