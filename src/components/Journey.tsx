import { BookOpen, CodeXml } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { ExternalLink, SectionHeading } from './ui';
export function Journey() {
  const e=portfolio.education;
  return <section className="shell section journey-section" id="journey" aria-label="Education and technical activity"><SectionHeading number="05" label="JOURNEY" title="A foundation. An ongoing practice." /><div className="journey-content"><article className="education"><div className="timeline-mark"><BookOpen size={20} strokeWidth={1.5} aria-hidden="true" /></div><div><p className="eyebrow">{e.period} <span className="education-status">{e.note}</span></p><h3>{e.institution}</h3><p className="degree">{e.degree}</p><p>{e.specialization}</p><div className="education-meta"><span>{e.grade}</span><span>{e.location}</span></div></div></article><article className="github-activity"><div className="github-heading"><CodeXml size={23} strokeWidth={1.5} aria-hidden="true" /><h3>Follow the work.</h3></div><p>Code, evaluation reports, and documented engineering decisions across analytics, ML, and retrieval.</p><ExternalLink href={portfolio.socials[0].url} className="text-link">shivamrajput-ds on GitHub</ExternalLink></article></div></section>;
}
