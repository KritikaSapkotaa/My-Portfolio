import type { ReactNode } from "react";
import { ArrowDown, BarChart3, Database, Download, Github, LineChart, Mail, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Data Cleaning in SQL",
    tag: "SQL · Data Preparation",
    description:
      "Cleaned worldwide company layoffs data by removing duplicates, standardizing values, and handling missing records to prepare a reliable dataset for analysis.",
    href: "https://github.com/KritikaSapkotaa/Data-Cleaning-In-SQL",
    visual: "cleaning",
  },
  {
    title: "Exploratory Data Analysis",
    tag: "SQL · Trend Analysis",
    description:
      "Used CTEs, window functions, and rolling totals to uncover layoffs trends over time and rank the companies most affected.",
    href: "https://github.com/KritikaSapkotaa/Exploratory-Data-Analysis-In-SQL",
    visual: "analysis",
  },
  {
    title: "Data Professional Survey",
    tag: "Power BI · Dashboard",
    description:
      "Built an interactive dashboard exploring roles, programming languages, salaries, geography, work-life balance, and the journey into data careers.",
    href: "https://github.com/KritikaSapkotaa/Data-Professional-Survey-Breakdown",
    visual: "survey",
  },
  {
    title: "Airbnb Seattle Market",
    tag: "Tableau · Visualization",
    description:
      "Created an interactive workbook showing how listing prices vary by location, bedroom count, date, and neighborhood across Seattle.",
    href: "https://github.com/KritikaSapkotaa/Airbnb-Seattle-Market-Analysis",
    visual: "airbnb",
  },
  {
    title: "Bike Buyers Dashboard",
    tag: "Excel · Business Analysis",
    description:
      "Cleaned customer data and combined pivot tables, formulas, and slicers into a clear dashboard of the factors influencing bike purchases.",
    href: "https://github.com/KritikaSapkotaa/Bike-Buyers-Analysis-Dashboard",
    visual: "bikes",
  },
  {
    title: "Bookify",
    tag: "Machine Learning · Web App",
    description:
      "Designed a smart reading platform that uses book metadata and cosine similarity to deliver personalized recommendations and accessible online reading.",
    href: "#contact",
    visual: "bookify",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="site-header">
        <nav className="nav-wrap" aria-label="Main navigation">
          <a href="#home" className="logo" aria-label="Kritika Sapkota home">
            KS<span className="accent-text">.</span>
          </a>
          <div className="nav-links">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#about">About Me</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="nav-link" href="#projects">Projects</a>
          </div>
          <a className="button button-primary cv-button" href="/Kritika_Sapkota_CV.pdf" download="Kritika_Sapkota_CV.pdf"><Download /> My CV</a>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy animate-rise">
            <p className="intro">Hi, I am</p>
            <h1 className="hero-title">
              Kritika<br /><span className="accent-text">Sapkota</span>
            </h1>
            <p className="hero-role">Aspiring Data Analyst & Insight Builder</p>
            <p className="hero-description">
              I turn complex data into clear dashboards and useful insights using SQL, Python, Power BI, Tableau, and Excel.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown /></a>
              <a className="button button-outline" href="https://github.com/KritikaSapkotaa" target="_blank" rel="noreferrer"><Github /> GitHub</a>
            </div>
          </div>
          <div className="portrait-stage animate-rise-delayed" aria-label="Portrait of Kritika Sapkota">
            <div className="portrait-ring" />
            <img src="/images/kritika-home.jpg" alt="Kritika Sapkota seated outdoors" className="hero-portrait" />
            <div className="float-note note-one">SQL</div>
            <div className="float-note note-two">Power BI</div>
          </div>
        </div>
        <a href="#about" aria-label="Continue to about section" className="scroll-cue"><ArrowDown /></a>
      </section>

      <section id="about" className="section-band secondary">
        <div className="about-inner">
          <div className="about-frame">
            <img src="/images/kritika-about.jpg" alt="Illustrated portrait of Kritika" />
          </div>
          <div>
            <p className="eyebrow">Get to know me</p>
            <h2 className="section-title">Behind the data</h2>
            <p className="about-paragraph first">
              I’m an aspiring data analyst who enjoys finding the story hidden inside a dataset. My work combines careful cleaning, thoughtful exploration, and visual reporting that makes the result easy to understand.
            </p>
            <p className="about-paragraph">
              From worldwide layoffs to customer behavior and property markets, I approach each project with curiosity, structure, and a focus on decisions people can act on.
            </p>
            <div className="pill-row">
              {['Research-first', 'Detail-oriented', 'Always learning'].map((label) => <span className="soft-pill" key={label}>{label}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-band">
        <div className="section-inner">
          <div className="center">
            <p className="eyebrow">What I bring</p>
            <h2 className="section-title">My toolkit</h2>
          </div>
          <div className="skills-grid">
            <Skill icon={<Database />} title="SQL" text="Cleaning, joins, CTEs, window functions, and exploratory queries." />
            <Skill icon={<BarChart3 />} title="Power BI" text="Interactive dashboards, data models, KPIs, and visual storytelling." />
            <Skill icon={<LineChart />} title="Tableau & Excel" text="Market analysis, pivot tables, formulas, charts, and slicers." />
            <Skill icon={<Sparkles />} title="Python" text="Data preparation, analysis workflows, and growing automation skills." />
          </div>
        </div>
      </section>

      <section id="projects" className="section-band secondary">
        <div className="section-inner">
          <div className="center">
            <p className="eyebrow">Selected case studies</p>
            <h2 className="section-title">My projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${project.visual}`}>
                  <ProjectGraphic type={project.visual} />
                </div>
                <div className="project-content">
                  <p className="project-tag">{project.tag}</p>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="project-link">
                    {index < 5 ? 'View project' : 'Learn more'} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="statement-band">
        <p>Good analysis does more than report numbers — it makes the next decision clearer.</p>
      </section>

      <section id="contact" className="section-band">
        <div className="contact-inner">
          <p className="eyebrow">Let’s connect</p>
          <h2 className="section-title">Have data. Need clarity?</h2>
          <p className="contact-copy">
            I’m open to opportunities where I can keep learning, solve meaningful problems, and turn data into useful stories.
          </p>
          <div className="button-row centered">
            <a className="button button-primary" href="https://github.com/KritikaSapkotaa" target="_blank" rel="noreferrer"><Github /> See my GitHub</a>
            <a className="button button-outline"><Mail />krisapkota2@gmail.com</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © 2026 Kritika Sapkota · Built around curiosity and clear thinking.
      </footer>
    </main>
  );
}

function Skill({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return <article className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>;
}

function ProjectGraphic({ type }: { type: string }) {
  if (type === 'cleaning') return <><Database /><div><b>DATA</b><span>CLEAN + READY</span></div></>;
  if (type === 'analysis') return <><div className="mini-bars"><i /><i /><i /><i /><i /></div><LineChart /></>;
  if (type === 'survey') return <><div className="dashboard-grid"><i /><i /><i /><i /></div><span>POWER BI</span></>;
  if (type === 'airbnb') return <><div className="map-dots">•• ••• • ••</div><span>SEATTLE</span></>;
  if (type === 'bikes') return <><BarChart3 /><span>EXCEL DASHBOARD</span></>;
  return <><div className="book-shape"><i /><i /></div><span>BOOKIFY</span></>;
}
