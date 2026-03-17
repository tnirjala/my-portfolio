import React from 'react';
import './Skills.css';

const skillsData = [
  {
    id: '01',
    title: 'Frontend Development',
    accent: 'teal',
    skills: ['HTML5 & Semantics', 'CSS3 / SCSS', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS'],
  },
  {
    id: '02',
    title: 'Backend Development',
    accent: 'sun',
    skills: ['Node.js', '.NET / C#', 'RESTful APIs', 'MongoDB'],
  },
  {
    id: '03',
    title: 'Design & UI/UX',
    accent: 'coral',
    skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Wireframing'],
  },
  {
    id: '04',
    title: 'Tools & DevOps',
    accent: 'teal',
    skills: ['Git & GitHub', 'VS Code', 'Postman'],
  },
  {
    id: '05',
    title: 'Professional Skills',
    accent: 'sun',
    skills: ['Communication', 'Problem Solving', 'Collaboration', 'Time Management'],
  },
  {
    id: '06',
    title: 'Creative Skills',
    accent: 'coral',
    skills: ['Video Editing', 'Storytelling', 'Content Creation', 'Creative Writing'],
  },
];

const lockedSkills = [
  { name: 'AWS',        sub: 'Cloud' },
  { name: 'Python',  sub: 'Language' },
  // { name: 'Next.js',    sub: 'Framework' },
  // { name: 'Docker',      sub: 'DevOps' },
];

const LockIcon = () => (
  <svg width="18" height="21" viewBox="0 0 18 21" fill="none">
    <rect x="1" y="9" width="16" height="11" rx="3" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M4 9V6.5a5 5 0 0 1 10 0V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="9" cy="15" r="1.8" fill="currentColor"/>
    <line x1="9" y1="16.8" x2="9" y2="18.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const Skills = () => (
  <section className="sp">

    {/* 1 · Image— short rectangle */}
    <div className="sp-video-wrap">
      <img
        className="sp-video"
        src="/my-portfolio/assets/skills.png"
      />
      <div className="sp-vid-ph">

      </div>
    </div>

    {/* 2 · TITLE — centred, normal weight */}
    <div className="sp-intro">
      {/* <p className="sp-eyebrow">Skills &amp; Capacities</p> */}
      <h2 className="sp-title">What I bring to the table</h2>
      <p className="sp-desc">
        A honest look at my technical toolkit, creative range and the areas I'm
        continuously growing in.
      </p>
    </div>

    {/* 3 · CARDS — 2 rows × 3 cols */}
    <div className="sp-grid">
      {skillsData.map((cat, i) => (
        <div
          className={`sp-card sp-card--${cat.accent}`}
          key={cat.id}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          <div className="sp-card-top">
            <span className="sp-card-num">{cat.id}</span>
            <h3 className="sp-card-title">{cat.title}</h3>
          </div>
          <ul className="sp-list">
            {cat.skills.map(s => (
              <li key={s}><span className="sp-dot" />{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* 4 · UNLOCK */}
    <div className="sp-unlock">
      <div className="sp-unlock-intro">
        <p className="sp-eyebrow">Always growing</p>
        <h3 className="sp-unlock-title">Unlocking new skills</h3>
        <p className="sp-unlock-desc">Actively exploring — these are in progress and coming soon.</p>
      </div>

      <div className="sp-locked-row">
        {lockedSkills.map((item, i) => (
          <div
            className="sp-pill"
            key={item.name}
            style={{ animationDelay: `${0.15 + i * 0.06}s` }}
          >
            <span className="sp-pill-icon">{item.icon}</span>
            <div className="sp-pill-info">
              <span className="sp-pill-name">{item.name}</span>
              <span className="sp-pill-sub">{item.sub}</span>
            </div>
            <span className="sp-lock"><LockIcon /></span>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default Skills;