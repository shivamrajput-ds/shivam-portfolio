import { portfolio } from '@/data/portfolio';
import { SectionHeading } from './ui';
export function Skills() {
  return <section className="shell section" id="skills" aria-label="Technical expertise"><SectionHeading number="03" label="TECHNICAL EXPERTISE" title="The tools behind the thinking." description="Grounded in project work. Strengthened through deliberate practice." /><div className="skills-grid">{portfolio.skills.map(s => <article className="skill-group" key={s.number}><span className="mono skill-number">{s.number}</span><h3>{s.title}</h3><p>{s.description}</p><ul>{s.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>;
}
