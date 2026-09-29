import { ChevronDown, Database, Layers3, ChartNoAxesCombined, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { ExternalLink, SectionHeading } from './ui';
function Pipeline() {
  return <div className="pipeline" aria-label="Complaint processing pipeline: raw CSV to chunk processing to Parquet summaries to analysis"><p className="mono">SYSTEM OVERVIEW / 01</p><div className="pipeline-main"><div className="data-block"><Database size={25} strokeWidth={1.2} /><strong>Raw data</strong><span>8–9 GB · CSV</span></div><ArrowRight className="pipeline-arrow" size={18} /><div className="data-block"><Layers3 size={25} strokeWidth={1.2} /><strong>Structure</strong><span>Chunks → Parquet</span></div><ArrowRight className="pipeline-arrow" size={18} /><div className="data-block"><ChartNoAxesCombined size={25} strokeWidth={1.2} /><strong>Insight</strong><span>Risk · NLP · forecast</span></div></div><div className="pipeline-footer"><span className="mono">PRECOMPUTE → QUERY → INTERPRET</span><span aria-hidden="true">↗</span></div></div>;
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const featured = index === 0;
  return <article className={'project-card' + (featured ? ' featured-project' : '')}>
    <div className="project-main"><div className="project-meta mono"><span>0{index+1} / {project.category}</span>{featured && <span className="featured-label">FEATURED</span>}</div><h3>{project.title}</h3><p className="project-question">{project.description}</p><p className="project-contribution">{project.contribution}</p><p className="technologies">{project.technologies.join(' / ')}</p>
      <details className="project-detail"><summary>Engineering notes <ChevronDown size={15} aria-hidden="true" /></summary><div><h4>Key decision</h4><p>{project.decision}</p><h4>Scope & limitations</h4><p>{project.boundary}</p></div></details>
      <div className="project-links">{project.links.map(link => <ExternalLink href={link.url} key={link.label}>{link.label}</ExternalLink>)}</div>
    </div>
    {featured ? <div className="project-aside"><Pipeline /><div className="project-proof"><strong>{project.proof.value}</strong><span>{project.proof.label}</span></div></div> : <div className="project-proof"><strong>{project.proof.value}</strong><span>{project.proof.label}</span></div>}
  </article>;
}
export function Projects() {
  return <section className="shell section" id="projects" aria-label="Selected projects"><div className="heading-row"><SectionHeading number="02" label="SELECTED WORK" title="Questions worth solving." description="Four projects. From statistical evidence to reliable ML systems." /><span className="section-count mono">01 — 04</span></div><div className="projects-grid">{projects.map((project,index) => <ProjectCard key={project.id} project={project} index={index} />)}</div></section>;
}
