import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowDownToLine,
  ArrowRight,
  ArrowUp,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from "lucide-react";

const PROFILE = {
  // Replace these empty values with verified profile details before publishing.
  email: "murali91603@gmail.com",
  linkedin: "https://www.linkedin.com/in/murali-krishna-ponnaganti-8b970439b/",
  github: "https://github.com/murali91603/",
  resumePath: "/Murali_Cv.docx",
  resumeAvailable: true,
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Certifications", "certifications"],
  ["Education", "education"],
  ["Contact", "contact"],
];

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Data & analytics",
    icon: BarChart3,
    skills: ["SQL", "Microsoft Excel", "Power BI", "Data cleaning", "Exploratory data analysis", "Data visualization"],
  },
  {
    title: "AI & machine learning",
    icon: BrainCircuit,
    skills: ["Machine learning", "Deep learning", "Computer vision", "CNN", "ResNet", "U-Net"],
  },
  {
    title: "Web technologies",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools",
    icon: Code2,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
];

const projects = [
  {
    number: "01",
    title: "AI-Based Brain Tumor Diagnosis, Treatment Recommendation & Clinical Decision Support System",
    subtitle: "Clinical decision support · Medical imaging",
    description:
      "An AI-powered medical imaging system designed to assist authorized doctors in analyzing MRI scans. It brings together tumor analysis and explainable decision support in one workflow.",
    category: "AI & ML",
    githubUrl: "",
    tech: ["Python", "Deep learning", "CNN", "ResNet", "U-Net", "Computer vision"],
    features: [
      "MRI upload, tumor detection & segmentation",
      "Classification, grade prediction & risk assessment",
      "Treatment recommendation support",
      "Grad-CAM explainability & PDF reports",
    ],
    visual: "brain",
  },
  {
    number: "02",
    title: "Fake Job Detection Application",
    subtitle: "Text analysis · Applied machine learning",
    description:
      "A web application that analyzes job descriptions to identify potentially fraudulent postings, pairing machine-learning predictions with clear, useful results.",
    category: "AI & ML",
    githubUrl: "https://github.com/murali91603/fake-job-detector/",
    tech: ["Python", "Machine learning", "NLP", "HTML", "CSS", "JavaScript"],
    features: [
      "Job description analysis",
      "Fraud probability prediction",
      "Suspicious keyword detection",
      "Result visualization & friendly interface",
    ],
    visual: "jobs",
  },
  {
    number: "03",
    title: "Data Processing & Analytics Pipeline",
    subtitle: "Data preparation · Insight generation",
    description:
      "A practical data workflow demonstrating how raw information can be cleaned, transformed, analyzed, and visualized using Python and common data tools.",
    category: "Data",
    githubUrl: "https://github.com/murali91603/data-processing-pipeline/",
    tech: ["Python", "Pandas", "NumPy", "SQL", "Data visualization"],
    features: [
      "Data cleaning and transformation",
      "Structured analysis workflow",
      "Exploratory analysis with Python",
      "Clear, decision-ready visualizations",
    ],
    visual: "analytics",
  },
];

const internships = [
  {
    role: "AI Intern",
    organization: "Codetech IT Solutions",
    duration: "8 weeks",
    skills: ["AI fundamentals", "Machine learning", "Python", "Data preprocessing", "Model development", "AI problem solving"],
  },
  {
    role: "Full Stack Development Intern",
    organization: "Codetech IT Solutions",
    duration: "4 weeks",
    skills: ["HTML", "CSS", "JavaScript", "Front-end development", "Web applications", "Git & GitHub"],
  },
];

const certificates = [
  { title: "Data Science", organization: "Board Infinity", url: "/Data%20Science.pdf" },
  { title: "Cybersecurity Analyst Job Simulation", organization: "TATA", url: "/TATA%20Cyber%20Security%20Certificate.pdf" },
  { title: "GenAI Powered Data Analytics Job Simulation", organization: "TATA", url: "/TATA%20Data%20Analystics%20Certificate.pdf" },
  { title: "Introduction to Artificial Intelligence", organization: "Infosys Springboard", url: "/Springboard%20AI.pdf" },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function ResumeLink({ className = "", children, onUnavailable }) {
  return (
    <a
      className={className}
      href={PROFILE.resumePath}
      download="Murali_Cv.docx"
      title="Download resume"
      onClick={(event) => {
        if (!PROFILE.resumeAvailable) {
          event.preventDefault();
          onUnavailable();
        }
      }}
    >
      {children}
    </a>
  );
}

function ProfileLink({ href, label, children, className = "" }) {
  if (!href) {
    return (
      <span className={`${className} profile-link-disabled`} aria-label={`${label} profile link not configured`}>
        {children}
      </span>
    );
  }
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function ProjectVisual({ type }) {
  if (type === "brain") {
    return (
      <div className="project-art art-brain">
        <div className="scan-frame">
          <div className="scan-grid" />
          <div className="scan-brain"><BrainCircuit size={60} strokeWidth={1} /></div>
          <span className="scan-target" />
          <span className="scan-tag">MRI / ANALYSIS</span>
        </div>
        <span className="art-chip">SEGMENTATION · 01</span>
      </div>
    );
  }
  if (type === "jobs") {
    return (
      <div className="project-art art-jobs">
        <div className="job-window">
          <div className="window-controls"><i /><i /><i /><span>demo_only.py</span></div>
          <div className="code-line"><span>01</span><i>role</i> = <b>"Data Analyst"</b></div>
          <div className="code-line"><span>02</span><i>text</i> = <b>clean(description)</b></div>
          <div className="code-line"><span>03</span><i>risk</i> = <b>model.predict(text)</b></div>
          <div className="risk-result"><span>SAMPLE OUTPUT</span><strong>—</strong><i>DEMO ONLY</i></div>
        </div>
        <span className="art-chip">TEXT CLASSIFICATION · 02</span>
      </div>
    );
  }
  return (
    <div className="project-art art-analytics">
      <div className="analytics-window">
        <div className="analytics-heading"><span>Illustrative workflow</span><span>•••</span></div>
        <div className="analytics-metrics"><div><small>STEP 01</small><strong>Clean</strong></div><div><small>STEP 02</small><strong>Explore</strong></div></div>
        <div className="bar-visual" aria-label="Illustrative, non-real data visualization">
          {[34, 55, 43, 74, 62, 88, 67, 100, 78, 92].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
        </div>
        <div className="analytics-axis"><span>WEEK 01</span><span>WEEK 04</span><span>WEEK 08</span></div>
      </div>
      <span className="art-chip">CLEAN · TRANSFORM · INSIGHT · 03</span>
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("portfolio-theme") === "dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("All");
  const [notice, setNotice] = useState("");
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const shownProjects = projectFilter === "All" ? projects : projects.filter((project) => project.category === projectFilter);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    return () => revealObserver.disconnect();
  }, [projectFilter]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(""), 4200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const copyEmail = async () => {
    if (!PROFILE.email) {
      setNotice("Add your email address to the PROFILE settings in src/App.jsx.");
      return;
    }
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setNotice("Could not copy the email address. Please copy it manually.");
    }
  };

  const notifyResumeUnavailable = () => {
    setNotice("Resume file is unavailable. Add public/Murali_Cv.docx and set resumeAvailable to true in src/App.jsx.");
  };

  const submitContact = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!PROFILE.email) {
      setFormStatus("Contact form is ready. Add your email address in src/App.jsx to enable sending.");
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get("subject"));
    const body = encodeURIComponent(`From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormStatus("Your email app is opening with your message.");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="navbar page-width" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={() => setMobileOpen(false)}>
            <span className="brand-mark">M<span>.</span></span>
            <span className="brand-name">Murali Krishna<span>Portfolio / 2026</span></span>
          </a>
          <div className={`nav-links${mobileOpen ? " nav-links-open" : ""}`}>
            {navItems.map(([label, id]) => (
              <a
                key={id}
                className={activeSection === id ? "nav-active" : ""}
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="mobile-nav-actions">
              <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
                {dark ? <Sun size={17} /> : <Moon size={17} />}
              </button>
              <ResumeLink className="button button-primary nav-resume" onUnavailable={notifyResumeUnavailable}><ArrowDownToLine size={15} /> Resume</ResumeLink>
            </div>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <ResumeLink className="button button-primary nav-resume" onUnavailable={notifyResumeUnavailable}><ArrowDownToLine size={15} /> Download resume</ResumeLink>
            <button className="mobile-menu" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen}>
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> OPEN TO OPPORTUNITIES</div>
            <p className="hero-overline">HELLO, AND WELCOME</p>
            <h1><span className="hero-heading-line">Hi, I’m Murali Krishna</span><br /><span>Ponnaganti.</span></h1>
            <p className="hero-role">Aspiring Data Analyst <i>·</i> Python Developer <i>·</i> AI &amp; Machine Learning Enthusiast</p>
            <p className="hero-description">
              I’m a Computer Science engineering student passionate about transforming data into meaningful insights and building practical technology solutions using Python, SQL, AI, and modern web technologies.
            </p>
            <div className="hero-ctas">
              <a className="button button-primary" href="#projects">View my projects <ArrowRight size={16} /></a>
              <ResumeLink className="button button-outline" onUnavailable={notifyResumeUnavailable}><ArrowDownToLine size={16} /> Download resume</ResumeLink>
            </div>
            <div className="hero-social">
              <ProfileLink href={PROFILE.linkedin} label="LinkedIn" className="social-link"><Linkedin size={17} /> LinkedIn</ProfileLink>
              <ProfileLink href={PROFILE.github} label="GitHub" className="social-link"><Github size={17} /> GitHub</ProfileLink>
              <button className="social-link social-button" type="button" onClick={copyEmail}>{copied ? <Check size={17} /> : <Mail size={17} />} {copied ? "Copied" : "Email"}</button>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-pad" id="about">
          <div className="page-width about-layout">
            <div className="about-intro reveal">
              <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Curiosity meets<br /><span>practical thinking.</span></>} />
              <p>I am a final-year Computer Science and Engineering student with a strong interest in Data Analytics, Python development, Artificial Intelligence, and Machine Learning. I enjoy solving real-world problems through technology and continuously improving my technical and analytical skills.</p>
              <a className="text-link" href="#education">More about my journey <ArrowRight size={16} /></a>
            </div>
            <div className="about-facts">
              {[
                { icon: "01", title: "B.Tech student", detail: "Computer Science & Engineering" },
                { icon: "02", title: "Project builder", detail: "AI, data & software projects" },
                { icon: "03", title: "AI / ML experience", detail: "Learning by building and testing" },
                { icon: "04", title: "Analytics focused", detail: "Turning information into insight" },
              ].map((item) => (
                <article className="fact-card reveal" key={item.icon}>
                  <span className="fact-number">{item.icon}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUp size={16} className="fact-arrow" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="page-width">
            <SectionHeading eyebrow="THE TOOLKIT" title={<>Skills for thoughtful<br /><span>problem solving.</span></>} description="A growing toolkit across programming, analytics, AI, and the everyday tools that bring ideas to life." />
            <div className="skills-grid">
              {skillGroups.map(({ title, icon: Icon, skills }, index) => (
                <article className={`skill-card reveal${index === 1 || index === 2 ? " skill-card-wide" : ""}`} key={title}>
                  <div className="skill-card-title"><span className="skill-icon"><Icon size={18} /></span><h3>{title}</h3></div>
                  <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section-pad" id="projects">
          <div className="page-width">
            <div className="projects-header">
              <SectionHeading eyebrow="SELECTED WORK" title={<>Projects built around<br /><span>real-world questions.</span></>} description="A selection of projects exploring applied AI, data workflows, and useful software." />
              <div className="project-filters" role="group" aria-label="Filter projects">
                {["All", "AI & ML", "Data"].map((filter) => <button key={filter} type="button" className={projectFilter === filter ? "filter-active" : ""} onClick={() => setProjectFilter(filter)} aria-pressed={projectFilter === filter}>{filter}</button>)}
              </div>
            </div>
            <div className="project-grid">
              {shownProjects.map((project) => (
                <article className="project-card reveal" key={project.number}>
                  <ProjectVisual type={project.visual} />
                  <div className="project-content">
                    <div className="project-meta"><span>PROJECT {project.number}</span><span>{project.category}</span></div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <p className="project-description">{project.description}</p>
                    <ul className="project-features">{project.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul>
                    <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links">
                      {project.githubUrl
                        ? <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ExternalLink size={13} /></a>
                        : <button type="button" onClick={() => setNotice("Add this project's GitHub URL in src/App.jsx to enable the link.")}><Github size={15} /> GitHub <ExternalLink size={13} /></button>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="page-width experience-layout">
            <div className="experience-intro">
              <SectionHeading eyebrow="HANDS-ON LEARNING" title={<>Experience that<br /><span>builds momentum.</span></>} description="Internship experience focused on applying technical foundations in AI and web development." />
            </div>
            <div className="timeline">
              {internships.map((internship, index) => (
                <article className="timeline-item reveal" key={internship.role}>
                  <span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span>
                  <div className="timeline-body">
                    <div className="timeline-top"><div><h3>{internship.role}</h3><p>{internship.organization}</p></div><span className="duration">{internship.duration}</span></div>
                    <div className="skill-tags timeline-tags">{internship.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="certifications-section section-pad" id="certifications">
          <div className="page-width">
            <SectionHeading eyebrow="CONTINUOUS LEARNING" title={<>Learning with intent,<br /><span>one step at a time.</span></>} description="Courses and job simulations that complement hands-on project work." />
            <div className="cert-grid">
              {certificates.map((certificate, index) => (
                <article className="cert-card reveal" key={certificate.title}>
                  <div className="cert-top"><span className="cert-index">0{index + 1}</span><span className="cert-status"><i /> COMPLETED</span></div>
                  <div className="cert-emblem"><span>{certificate.organization.slice(0, 1)}</span></div>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.organization}</p>
                  {certificate.url
                    ? <a href={certificate.url} target="_blank" rel="noreferrer">View certificate <ExternalLink size={14} /></a>
                    : <button type="button" onClick={() => setNotice("Add a verified certificate URL in src/App.jsx to enable certificate viewing.")}>View certificate <ExternalLink size={14} /></button>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education-section section-pad" id="education">
          <div className="page-width education-layout">
            <SectionHeading eyebrow="EDUCATION" title={<>Grounded in<br /><span>computer science.</span></>} />
            <article className="education-card reveal">
              <div className="education-year">B.TECH · CSE <span>IN PROGRESS</span></div>
              <div className="education-main"><div className="education-symbol">G</div><div><span className="eyebrow">BACHELOR OF TECHNOLOGY</span><h3>Computer Science and Engineering</h3><p>Geethanjali Institute of Science and Technology</p><p className="education-university">Jawaharlal Nehru Technological University Anantapur</p></div></div>
              <div className="education-bottom"><span>Expected graduation · 2027</span><span><i /> In progress</span></div>
            </article>
          </div>
        </section>

        <section className="activities-section section-pad">
          <div className="page-width activities-layout">
            <div><span className="eyebrow">BEYOND THE CLASSROOM</span><h2>Always learning.<br /><span>Always participating.</span></h2></div>
            <div className="activity-list">
              {["Paper presentation", "C programming debugging competition", "Technical quiz participation", "AI / ML project development", "Data analytics learning"].map((activity, index) => <div className="activity-item" key={activity}><span>0{index + 1}</span><p>{activity}</p><ArrowRight size={15} /></div>)}
            </div>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width">
            <div className="contact-top">
              <div className="contact-copy"><span className="eyebrow">HAVE A GOOD OPPORTUNITY?</span><h2>Let’s build something<br /><span>meaningful.</span></h2><p>I am actively looking for opportunities to learn, contribute, and grow in Data Analytics, Software Development, AI, and related technology roles.</p>
                <div className="contact-details">
                  <button type="button" onClick={copyEmail}><span className="contact-icon"><Mail size={17} /></span><span><small>EMAIL</small><strong>{PROFILE.email || "Email address not configured"}</strong></span>{copied ? <Check size={15} /> : <Copy size={15} className="detail-action" />}</button>
                  <ProfileLink href={PROFILE.linkedin} label="LinkedIn" className="contact-detail-link"><span className="contact-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small><strong>{PROFILE.linkedin ? "View LinkedIn profile" : "Add LinkedIn profile"}</strong></span><ExternalLink size={15} className="detail-action" /></ProfileLink>
                  <ProfileLink href={PROFILE.github} label="GitHub" className="contact-detail-link"><span className="contact-icon"><Github size={17} /></span><span><small>GITHUB</small><strong>{PROFILE.github ? "View GitHub profile" : "Add GitHub profile"}</strong></span><ExternalLink size={15} className="detail-action" /></ProfileLink>
                </div>
              </div>
              <form className="contact-form" onSubmit={submitContact}>
                <div className="form-heading"><span>GET IN TOUCH</span><span>Simple, direct email contact</span></div>
                <div className="form-row"><label>Name<input name="name" type="text" placeholder="Your name" autoComplete="name" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></label></div>
                <label>Subject<input name="subject" type="text" placeholder="What would you like to discuss?" required /></label>
                <label>Message<textarea name="message" rows="4" placeholder="A little context goes a long way..." required /></label>
                <button className="button button-primary form-submit" type="submit">Send message <Send size={15} /></button>
                <p className="form-privacy">{PROFILE.email ? "This form opens your email app; your message is not stored on this website." : "Add your email in src/App.jsx to enable sending; messages are not stored on this website."}</p>
                {formStatus && <p className="form-status" role="status">{formStatus}</p>}
              </form>
            </div>
            <footer className="footer"><a className="footer-brand" href="#home">M<span>.</span></a><span>Thoughtfully built, with curiosity and code.</span><span>© {new Date().getFullYear()} Murali Krishna Ponnaganti</span><a href="#home" className="footer-top">Back to top <ArrowUp size={14} /></a></footer>
          </div>
        </section>
      </main>

      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      {notice && <div className="toast" role="status"><span>{notice}</span><button type="button" onClick={() => setNotice("")} aria-label="Dismiss notification"><X size={16} /></button></div>}
    </div>
  );
}

export default App;
