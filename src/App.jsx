import ProjectCard from "./components/ProjectCard.jsx";
import SkillBadge from "./components/SkillBadge.jsx";
import ContactItem from "./components/ContactItem.jsx";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "TaskFlow",
    description:
      "O aplicație simplă pentru organizarea sarcinilor zilnice și urmărirea progresului.",
    technologies: ["React", "CSS", "JavaScript"],
    url: "https://github.com/",
  },
  {
    number: "02",
    title: "Formular de contact",
    description:
      "Un formular responsive cu validare, mesaje de stare și o interfață prietenoasă.",
    technologies: ["React", "Vite", "CSS"],
    url: "https://github.com/",
  },
  {
    number: "03",
    title: "Calculator",
    description:
      "Un calculator compact care face operațiile de bază și se adaptează la ecrane mici.",
    technologies: ["React", "JavaScript", "CSS"],
    url: "https://github.com/",
  },
];

const skills = [
  { name: "HTML & CSS", level: "Intermediar" },
  { name: "JavaScript", level: "Începător" },
  { name: "React", level: "Începător" },
  { name: "Git & GitHub", level: "Începător" },
];

const contacts = [
  {
    icon: "@",
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "Profilul meu",
    href: "https://www.linkedin.com/",
  },
  {
    icon: "⌘",
    label: "GitHub",
    value: "Proiectele mele",
    href: "https://github.com/",
  },
];

function App() {
  return (
    <main>
      <nav className="navigation page-shell" aria-label="Navigare principală">
        <a className="wordmark" href="#home" aria-label="Acasă">
          portofoliu<span>.</span>
        </a>
        <div className="navigation__links">
          <a href="#projects">Proiecte</a>
          <a href="#about">Despre mine</a>
          <a className="navigation__contact" href="#contact">
            Contact <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>

      <section className="hero page-shell" id="home">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="availability-dot" />
            DISPONIBIL PENTRU OPORTUNITĂȚI
          </p>
          <h1>
            Salut, sunt <span className="hero__name">Alex.</span>
            <br />
            Construiesc lucruri
            <br />
            <span className="hero__highlight">pentru web.</span>
          </h1>
          <p className="hero__description">
            Sunt la început de drum în dezvoltarea web și îmi place să transform
            ideile în aplicații clare, utile și ușor de folosit.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Vezi proiectele <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--secondary" href="#contact">
              Hai să vorbim <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero__visual" aria-label="Inițială A într-un cerc decorativ">
          <div className="hero__orbit hero__orbit--outer" />
          <div className="hero__orbit hero__orbit--inner" />
          <div className="hero__monogram">A</div>
          <span className="hero__spark hero__spark--one">✳</span>
          <span className="hero__spark hero__spark--two">✳</span>
          <span className="hero__visual-caption">Învăț. Construiesc. Repet.</span>
        </div>
        <a className="scroll-cue" href="#projects">
          <span className="scroll-cue__line" />
          SCROLL PENTRU A DESCOPERI
        </a>
      </section>

      <section className="section section--projects" id="projects">
        <div className="page-shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CE AM CONSTRUIT</p>
              <h2>Proiecte selectate<span>.</span></h2>
            </div>
            <p>
              Câteva exerciții practice prin care învăț să scriu cod mai bun și
              să construiesc experiențe mai plăcute.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--about" id="about">
        <div className="page-shell about-layout">
          <div className="about-copy">
            <p className="eyebrow">PUȚIN DESPRE MINE</p>
            <h2>Învăț prin a construi.</h2>
            <p>
              Cred că cel mai bun mod de a învăța programare este să construiești
              proiecte reale, să faci greșeli și să încerci din nou. Momentan
              explorez React și dezvoltarea interfețelor web.
            </p>
            <p>
              Portofoliul acesta este și un exemplu de componente reutilizabile:
              proiectele, abilitățile și contactele sunt afișate din liste de
              date prin props.
            </p>
          </div>
          <div className="skills">
            <p className="eyebrow">CE ÎNVĂȚ ACUM</p>
            <div className="skills__grid">
              {skills.map((skill, index) => (
                <SkillBadge key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--contact" id="contact">
        <div className="page-shell contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">LUĂM LEGĂTURA?</p>
            <h2>Ai un proiect în minte?</h2>
            <p>
              Sunt mereu deschis să cunosc oameni noi și să discut idei
              interesante. Scrie-mi!
            </p>
          </div>
          <div className="contact-list">
            {contacts.map((contact) => (
              <ContactItem key={contact.label} {...contact} />
            ))}
          </div>
        </div>
      </section>

      <footer className="footer page-shell">
        <a className="wordmark" href="#home">
          portofoliu<span>.</span>
        </a>
        <p>Construït cu React și multă cafea.</p>
        <a className="footer__top" href="#home">
          Înapoi sus ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
