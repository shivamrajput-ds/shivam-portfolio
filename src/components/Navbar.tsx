'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolio } from '@/data/portfolio';
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); } };
    const onPointer = (e: PointerEvent) => { if (header.current && !header.current.contains(e.target as Node)) setOpen(false); };
    const desktop = window.matchMedia('(min-width: 1000px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', onKey); document.addEventListener('pointerdown', onPointer); desktop.addEventListener('change', onResize);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onPointer); desktop.removeEventListener('change', onResize); };
  }, [open]);
  return <header ref={header} className={'site-header' + (scrolled ? ' is-scrolled' : '')}>
    <nav className="shell navbar" aria-label="Main navigation">
      <a href="#top" className="brand" onClick={() => setOpen(false)} aria-label="Shivam Rajput, back to top"><span className="brand-symbol" aria-hidden="true">sr<span>.</span></span><span className="brand-name">{portfolio.name}</span></a>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      <div id="navigation" className={'navigation' + (open ? ' is-open' : '')}>
        {portfolio.navigation.map(link => <a key={link.id} href={'#' + link.id} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="resume-link" href={portfolio.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume <ArrowUpRight size={14} aria-hidden="true" /><span className="sr-only"> (PDF, opens in a new tab)</span></a>
      </div>
    </nav>
  </header>;
}
