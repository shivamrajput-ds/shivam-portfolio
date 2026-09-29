import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { ExternalLink } from './ui';
export function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title"><div className="shell contact-inner"><p className="eyebrow"><span>06</span> / WHAT’S NEXT</p><h2 id="contact-title">Let’s build something<br /><span>useful with data.</span></h2><div className="contact-bottom"><div><p>Open to Data Science and Applied ML internships.</p><a className="email-link" href={'mailto:'+portfolio.email}>{portfolio.email}<ArrowUpRight size={24} aria-hidden="true" /></a></div><div className="contact-socials">{portfolio.socials.map(s=><ExternalLink href={s.url} key={s.label}>{s.label}</ExternalLink>)}</div></div></div></section>;
}
export function Footer() {
  return <footer className="shell footer"><a className="brand-symbol" href="#top" aria-label="Back to top">sr<span>.</span></a><p>© {new Date().getFullYear()} {portfolio.name}<span>Thoughtful questions. Useful outcomes.</span></p><a className="back-top" href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a></footer>;
}
