import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './ui';
export function About() {
  return <section id="about" className="shell section about-section" aria-label="About Shivam"><SectionHeading number="01" label="ABOUT" title="Curiosity, backed by fundamentals." /><div className="about-body">{portfolio.about.map(p => <p key={p}>{p}</p>)}<div className="focus-list"><span className="mono">FOCUS AREAS</span>{portfolio.focus.map((f,i) => <span key={f}><small className="mono">0{i+1}</small>{f}</span>)}</div></div></section>;
}
