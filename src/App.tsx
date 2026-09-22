import { useEffect, useState } from 'react'
import { certifications, education, experience, featured, profile, projects, skills, type Category, type Project } from './data'

type Theme = 'light' | 'dark'
const filters: ('All' | Category)[] = ['All', 'Backend', 'Frontend', 'Desktop & Console']

function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
    } catch {
      /* storage unavailable */
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))] as const
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

function Links({ project }: { project: Project }) {
  return (
    <div className="links">
      {project.repo && (
        <a href={project.repo} target="_blank" rel="noreferrer">
          <GitHubIcon /> Source
        </a>
      )}
      {project.extra && (
        <a href={project.extra.url} target="_blank" rel="noreferrer">
          {project.extra.label} ↗
        </a>
      )}
      {project.note && <span className="note">{project.note}</span>}
    </div>
  )
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack">
      {items.map(s => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  )
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const shown = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  const contacts = [
    profile.email && { label: 'Email', value: profile.email, url: `mailto:${profile.email}` },
    profile.phone && { label: 'Phone', value: profile.phone, url: `tel:${profile.phone.replace(/\s/g, '')}` },
    profile.linkedin && { label: 'LinkedIn', value: 'LinkedIn', url: profile.linkedin },
    { label: 'GitHub', value: `@${profile.handle}`, url: profile.github },
    profile.cv && { label: 'CV', value: 'Download CV', url: profile.cv },
  ].filter(Boolean) as { label: string; value: string; url: string }[]

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <a href="#top" className="logo">
            <span className="accent">&lt;</span>
            {profile.nickname}
            <span className="accent"> /&gt;</span>
          </a>
          <nav>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle colour theme">
              {theme === 'dark' ? '☀' : '☾'}
            </button>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-text">
            <p className="eyebrow mono">Hi, I'm {profile.name} 👋</p>
            <h1>
              {profile.role}
              <span className="accent">.</span>
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="cta">
              <a className="btn primary" href="#work">
                See my work
              </a>
              {profile.cv && (
                <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">
                  Download CV
                </a>
              )}
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </div>
            <p className="location mono">📍 {profile.location}</p>
          </div>
          <div className="portrait">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width="600" height="600" />
          </div>
          <pre className="terminal mono" aria-hidden="true">
            <span className="dim">$</span> dotnet run --project BHL.Api{'\n'}
            <span className="ok">info:</span> Now listening on https://localhost:7001{'\n'}
            <span className="dim">$</span> npm run dev{'\n'}
            <span className="ok">  ➜</span> Local: http://localhost:5173/
          </pre>
        </section>

        <section id="about" className="container section">
          <h2>
            <span className="num mono">01.</span> About
          </h2>
          <div className="about">
            <div>
              {profile.about.map(p => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <div className="skills">
              {skills.map(g => (
                <div key={g.group}>
                  <h3 className="mono">{g.group}</h3>
                  <Stack items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="container section">
          <h2>
            <span className="num mono">02.</span> Experience
          </h2>
          <ol className="timeline">
            {experience.map(job => (
              <li key={job.role + job.company}>
                <div className="job-head">
                  <h3>
                    {job.role} <span className="accent">@ {job.company}</span>
                  </h3>
                  <span className="period mono">{job.period}</span>
                </div>
                <ul className="highlights">
                  {job.points.map(pt => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="creds">
            <div className="card">
              <h3 className="mono small-head">Education</h3>
              {education.map(e => (
                <div key={e.title}>
                  <strong>{e.title}</strong>
                  <p>{e.detail}</p>
                </div>
              ))}
            </div>
            <div className="card">
              <h3 className="mono small-head">Certifications</h3>
              {certifications.map(c => (
                <div key={c.title}>
                  <strong>
                    {'url' in c && c.url ? (
                      <a href={c.url} target="_blank" rel="noreferrer">
                        {c.title} ↗
                      </a>
                    ) : (
                      c.title
                    )}
                  </strong>
                  <p>{c.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="container section">
          <h2>
            <span className="num mono">03.</span> Featured work
          </h2>
          <div className="featured">
            {featured.map((p, i) => (
              <article key={p.name} className={`card feature ${i === 0 ? 'wide' : ''}`}>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                {p.highlights && (
                  <ul className="highlights">
                    {p.highlights.map(h => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <Stack items={p.stack} />
                <Links project={p} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>
            <span className="num mono">04.</span> More projects
          </h2>
          <div className="filters" role="tablist">
            {filters.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="grid">
            {shown.map(p => (
              <article key={p.name} className="card">
                <span className="tag mono">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.summary}</p>
                <Stack items={p.stack} />
                <Links project={p} />
              </article>
            ))}
          </div>
          <p className="more">
            Browse everything on{' '}
            <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noreferrer">
              github.com/{profile.handle}
            </a>
            .
          </p>
        </section>

        <section id="contact" className="container section contact">
          <h2>
            <span className="num mono">05.</span> Get in touch
          </h2>
          <p className="lead">
            Open to full-stack and .NET roles, freelance work and collaborations. Email is the fastest way to reach me.
          </p>
          <div className="cta">
            {contacts.map(c => (
              <a key={c.label} className="btn" href={c.url} target="_blank" rel="noreferrer">
                {c.label === 'GitHub' && <GitHubIcon />} {c.value}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="container footer mono">
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </footer>
    </>
  )
}
