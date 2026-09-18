import React, { useRef } from 'react';
import { personalInfo, summary, experiences, skills, projects, education } from '../data/CVData';
import { Github, Linkedin, Mail, Phone, MapPin, Globe, Download, X } from 'lucide-react';

// Group skills by category for the CV layout
const grouped = skills.reduce((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s);
    return acc;
}, {});

// ─── Sub-components ───────────────────────────────────────────────────────────

const SectionHeading = ({ children }) => (
    <div className="cv-section-heading">
        <h2>{children}</h2>
        <div className="cv-section-line" />
    </div>
);

const ContactItem = ({ icon: Icon, text, href }) => (
    <a
        href={href || '#'}
        target={href && href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="cv-contact-item"
    >
        <Icon size={13} />
        <span>{text}</span>
    </a>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const CV = ({ onClose }) => {
    const printRef = useRef(null);

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="cv-overlay">
            {/* ── Action Bar (hidden on print) ── */}
            <div id="cv-no-print" className="cv-action-bar">
                <div className="cv-action-bar-inner">
                    <span className="cv-action-label">📄 CV Preview</span>
                    <div className="cv-action-buttons">
                        <button onClick={handlePrint} className="cv-btn cv-btn-primary" id="cv-download-btn">
                            <Download size={16} />
                            Download / Print PDF
                        </button>
                        <button onClick={onClose} className="cv-btn cv-btn-ghost" id="cv-close-btn">
                            <X size={16} />
                            Close
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Scrollable wrapper ── */}
            <div className="cv-scroll-wrapper">
                {/* ── A4 Page ── */}
                <div id="cv-printable" ref={printRef} className="cv-page">

                    {/* HEADER */}
                    <header className="cv-header">
                        <div className="cv-header-left">
                            <h1 className="cv-name">{personalInfo.name}</h1>
                            <p className="cv-title">{personalInfo.title}</p>
                            <p className="cv-tagline">{personalInfo.tagline}</p>
                        </div>
                        <div className="cv-header-right">
                            <ContactItem icon={Mail}    text={personalInfo.email}    href={`mailto:${personalInfo.email}`} />
                            <ContactItem icon={Phone}   text={personalInfo.phone}    href={`tel:${personalInfo.phone}`} />
                            <ContactItem icon={MapPin}  text={personalInfo.location} />
                            <ContactItem icon={Github}  text={personalInfo.github.replace(/^https?:\/\//, '')} href={personalInfo.github} />
                            <ContactItem icon={Linkedin} text={personalInfo.linkedin.replace(/^https?:\/\//, '')} href={personalInfo.linkedin} />
                            <ContactItem icon={Globe}   text={personalInfo.portfolio.replace(/^https?:\/\//, '')} href={personalInfo.portfolio} />
                        </div>
                    </header>

                    <div className="cv-body">
                        {/* LEFT COLUMN */}
                        <div className="cv-left">

                            {/* SUMMARY */}
                            <section className="cv-section">
                                <SectionHeading>Professional Summary</SectionHeading>
                                <p className="cv-text">{summary}</p>
                            </section>

                            {/* EXPERIENCE */}
                            <section className="cv-section">
                                <SectionHeading>Work Experience</SectionHeading>
                                {experiences.map((exp, i) => (
                                    <div key={i} className="cv-experience-item">
                                        <div className="cv-exp-header">
                                            <div>
                                                <h3 className="cv-exp-title">{exp.title}</h3>
                                                <p className="cv-exp-company">{exp.company}</p>
                                            </div>
                                            <span className="cv-exp-period">{exp.period}</span>
                                        </div>
                                        <ul className="cv-exp-list">
                                            {exp.description.map((d, j) => (
                                                <li key={j}>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </section>

                            {/* PROJECTS */}
                            <section className="cv-section">
                                <SectionHeading>Projects</SectionHeading>
                                {projects.map((proj, i) => (
                                    <div key={i} className="cv-project-item">
                                        <div className="cv-proj-header">
                                            <h3 className="cv-proj-title">{proj.title}</h3>
                                            <div className="cv-proj-tags">
                                                {proj.tags.map(t => <span key={t} className="cv-tag">{t}</span>)}
                                            </div>
                                        </div>
                                        <p className="cv-text">{proj.description}</p>
                                    </div>
                                ))}
                            </section>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="cv-right">

                            {/* SKILLS */}
                            <section className="cv-section">
                                <SectionHeading>Skills</SectionHeading>
                                {Object.entries(grouped).map(([cat, list]) => (
                                    <div key={cat} className="cv-skill-group">
                                        <h4 className="cv-skill-category">{cat}</h4>
                                        {list.map(s => (
                                            <div key={s.name} className="cv-skill-row">
                                                <span className="cv-skill-name">{s.name}</span>
                                                <div className="cv-skill-bar-bg">
                                                    <div
                                                        className="cv-skill-bar-fill"
                                                        style={{ width: `${s.level}%`, backgroundColor: s.color === '#000000' ? '#646cff' : s.color }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </section>

                            {/* EDUCATION */}
                            <section className="cv-section">
                                <SectionHeading>Education</SectionHeading>
                                {education.map((edu, i) => (
                                    <div key={i} className="cv-edu-item">
                                        <h3 className="cv-edu-degree">{edu.degree}</h3>
                                        <p className="cv-edu-school">{edu.school}</p>
                                        <p className="cv-edu-period">{edu.affiliation}</p>
                                        <p className="cv-edu-address">{edu.address}</p>
                                    </div>
                                ))}
                            </section>

                        </div>
                    </div>

                    {/* FOOTER */}
                    <footer className="cv-footer">
                        <p>Generated from <strong>{personalInfo.portfolio}</strong> · {new Date().getFullYear()}</p>
                    </footer>

                </div>
            </div>
        </div>
    );
};

export default CV;
