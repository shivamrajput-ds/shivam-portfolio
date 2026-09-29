'use client';
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) { return <main className="shell error-page"><p className="eyebrow">SOMETHING WENT WRONG</p><h1>Let’s try that again.</h1><p>The portfolio couldn’t load. Please retry.</p><button className="button primary" onClick={reset}>Try again</button></main>; }
