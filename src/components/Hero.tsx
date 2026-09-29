import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
import { DataVisual } from './DataVisual';
import { ExternalLink } from './ui';
export function Hero() {
  return <section className="hero shell" aria-labelledby="hero-title">
    <div className="hero-content"><p className="eyebrow hero-eyebrow"><span className="short-rule" /> DATA SCIENTIST <span className="separator">/</span> INDIA</p>
      <h1 id="hero-title">{portfolio.name.split(' ')[0]}<br />{portfolio.name.split(' ').slice(1).join(' ')}<span className="accent">.</span></h1>
      <p className="hero-role">{portfolio.role}</p>
      <p className="hero-intro">{portfolio.introduction}</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explore projects <ArrowDown size={16} aria-hidden="true" /></a><a className="button secondary" href="#contact">Contact me <ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="hero-socials">{portfolio.socials.slice(0,3).map(s => <ExternalLink key={s.label} href={s.url}>{s.label}</ExternalLink>)}</div>
    </div>
    <div className="hero-right"><DataVisual /><p className="hero-caption">From complexity to clarity.<br /><span>Data. Models. Measurable thinking.</span></p></div>
    <div className="hero-baseline"><p>{portfolio.interests.join(' · ')}</p><a href="#about">A closer look <ArrowDown size={13} aria-hidden="true" /></a></div>
  </section>;
}
export function MetricStrip() {
  const l = portfolio.leetcode;
  const metrics = [{value:l.total.toLocaleString('en-US'),label:'Problems solved'}, {value:l.submissions.toLocaleString('en-US'),label:'Submissions in past year'}, {value:String(l.activeDays),label:'Active days'}, {value:String(l.maxStreak),label:'Days · maximum streak'}];
  return <section className="metric-band" aria-label="LeetCode practice snapshot"><div className="shell metric-inner"><p className="metric-label mono">CONSISTENCY,<br />IN NUMBERS.<span>LEETCODE SNAPSHOT</span></p><dl className="metric-strip">{metrics.map(m => <div key={m.label}><dt>{m.label}</dt><dd>{m.value}</dd></div>)}</dl></div></section>;
}
