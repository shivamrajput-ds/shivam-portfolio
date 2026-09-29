import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import './globals.css';
import { portfolio } from '@/data/portfolio';
const title = 'Shivam Rajput — Data Scientist & Machine Learning Enthusiast';
const description = 'Data Scientist in India exploring machine learning, NLP, and deep learning. Selected work in analytics, statistical experimentation, ML auditing, and retrieval systems.';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title, description, applicationName: 'Shivam Rajput Portfolio', authors: [{ name: portfolio.name }],
  ...(siteUrl ? { metadataBase: new URL(siteUrl), alternates: { canonical: '/' } } : {}),
  icons: { icon: '/favicon.svg' },
  openGraph: { title, description, type: 'website', locale: 'en_IN', siteName: 'Shivam Rajput', ...(siteUrl ? {url:siteUrl} : {}) },
  twitter: { card: 'summary', title, description, creator: '@ShivamR65014299' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0c1012' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { '@context':'https://schema.org', '@type':'Person', name:portfolio.name, description, email:portfolio.email, sameAs:portfolio.socials.map(s=>s.url), knowsAbout:['Data Science','Machine Learning','NLP','Python','SQL'], ...(siteUrl ? {url:siteUrl} : {}) };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g,'\u003c') }} /></body></html>;
}
