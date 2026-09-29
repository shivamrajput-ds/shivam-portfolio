import { Navbar } from '@/components/Navbar';
import { Hero, MetricStrip } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { LeetCodeStats } from '@/components/LeetCodeStats';
import { Journey } from '@/components/Journey';
import { Contact, Footer } from '@/components/Contact';
export default function Home() {
  return <><a className="skip-link" href="#main">Skip to content</a><div id="top" /><Navbar /><main id="main"><Hero /><MetricStrip /><About /><Projects /><Skills /><LeetCodeStats /><Journey /><Contact /></main><Footer /></>;
}
