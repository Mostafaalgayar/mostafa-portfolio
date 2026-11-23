import { portrait, adasaPreview } from "./assets";
import { ArrowDown, ArrowUpRight, Code2, MessageCircle, Github, Layers, Linkedin, Mail, MapPin, Palette, Wrench } from "lucide-react";
import type { ReactElement } from "react";
import { profile, projects, skills } from "./data/portfolio";
import type { Project } from "./data/portfolio";

const categoryIcon: Record<string, ReactElement> = {
  Core: <Code2 size={19} />,
  Frameworks: <Layers size={19} />,
  Styling: <Palette size={19} />,
  Tools: <Wrench size={19} />,
};

function Nav() {
  return (
    <header className="dx-nav">
      <div className="dx-nav-inner">
        <a className="dx-logo" href="#top">MA<span>.</span></a>
        <nav className="dx-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="dx-status" href="#contact"><i />Open to opportunities</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="dx-hero" id="top">
      <div className="dx-hero-grid">
        <div className="dx-hero-copy">
          <span className="dx-dash" />
          <p className="dx-eyebrow">{profile.role} · {profile.location}</p>
          <h1 className="dx-title">I'm Mostafa,<br />a <em>Front-End</em><br />Developer</h1>
        </div>
        <div className="dx-hero-side">
          <div className="dx-side-block">
            <span>About me</span>
            <p>A 2024 graduate building his career in front-end development.</p>
            <a href="#about">Learn more <ArrowUpRight size={13} /></a>
          </div>
          <div className="dx-side-block">
            <span>My work</span>
            <p>Selected projects built with React, TypeScript and Tailwind.</p>
            <a href="#work">Browse projects <ArrowUpRight size={13} /></a>
          </div>
          <div className="dx-side-block">
            <span>Follow me</span>
            <div className="dx-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
        </div>
        <img className="dx-portrait" src={portrait} alt="Portrait of Mostafa Algayar" />
        <a className="dx-scroll" href="#skills" aria-label="Scroll to skills"><ArrowDown size={20} /></a>
      </div>
    </section>
  );
}

function SectionHead({ label, title, center }: { label: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "dx-head center" : "dx-head"}>
      <span className="dx-label">/ {label}</span>
      <h2>{title}</h2>
    </div>
  );
}

function Skills() {
  return (
    <section className="dx-section" id="skills">
      <SectionHead label="My skills" title="What I work with" />
      <div className="dx-skill-grid">
        {skills.map((s) => (
          <article className="dx-skill" key={s.name}>
            <span className="dx-chip">{categoryIcon[s.category] ?? <Code2 size={19} />}</span>
            <h3>{s.name}</h3>
            <p>{s.category}</p>
            <i />
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="dx-card">
      <div className="dx-card-preview">
        {p.name === "Adasa"
          ? <img src={adasaPreview} alt="Screenshot of the Adasa photography blog" />
          : <span className="dx-card-num" aria-hidden="true">{p.number}</span>}
      </div>
      <div className="dx-card-body">
        <div className="dx-pills">
          <span className="dx-pill">{p.type}</span>
          {p.stack.slice(0, 2).map((t) => <span className="dx-pill" key={t}>{t}</span>)}
        </div>
        <h3>{p.name}</h3>
        <p className="dx-card-desc">{p.description}</p>
        <div className="dx-card-foot">
          <span className="dx-statusline"><i className={p.status === "Live project" ? "on" : ""} />{p.status}</span>
          {(p.link || p.github) && (
            <span className="dx-card-links">
              {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live <ArrowUpRight size={13} /></a>}
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="dx-section" id="work">
      <SectionHead label="My portfolio" title="Take a look at my latest projects" />
      <div className="dx-works">
        {projects.map((p) => <ProjectCard p={p} key={p.name} />)}
      </div>
    </section>
  );
}

const principles = [
  { title: "Clean development", text: "I care about readable, maintainable code and building interfaces that work smoothly across screen sizes." },
  { title: "Problem solving", text: "I enjoy understanding the problem first, then turning it into a practical and intuitive user experience." },
  { title: "Continuous growth", text: "I'm always improving my fundamentals, learning modern tools, and applying what I learn in real projects." },
];

function About() {
  return (
    <section className="dx-section" id="about">
      <SectionHead label="About me" title="More than just writing code." center />
      <div className="dx-about">
        <p className="dx-about-lead">I'm a 2024 graduate building my career in front-end development.</p>
        <p className="dx-about-text">My interest in web development started during college, where I explored front-end courses and discovered how much I enjoy bringing ideas to life on the web. Since then, I've been strengthening my skills through hands-on projects and consistent practice.</p>
        <p className="dx-about-text">I'm especially interested in building responsive applications, working with APIs, and creating interfaces that make everyday tasks easier.</p>
      </div>
      <ul className="dx-principles">
        {principles.map((p, i) => (
          <li key={p.title}>
            <span>0{i + 1}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="dx-section dx-contact" id="contact">
      <span className="dx-dash center" />
      <h2 className="dx-contact-title">Let's work together</h2>
      <p className="dx-contact-lead">I'm currently open to junior front-end roles, internships, and opportunities to grow with a collaborative team.</p>
      <div className="dx-socials big">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
      </div>
      <div className="dx-whatsapp"><a href={profile.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19} /> Chat on WhatsApp <ArrowUpRight size={15} /></a></div>
      <div className="dx-contact-cards">
        <a href={`mailto:${profile.email}`}><span>Email</span><strong>{profile.email}</strong></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect with me</strong></a>
        <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>Explore my repositories</strong></a>
      </div>
      <p className="dx-location"><MapPin size={14} /> {profile.location}</p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="dx-footer">
        <span>{profile.name}</span>
        <span>{profile.role} · {profile.location}</span>
      </footer>
    </>
  );
}
