import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
export function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<ArrowUpRight size={15} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
}
export function SectionHeading({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
