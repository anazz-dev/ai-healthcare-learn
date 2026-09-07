import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import AIReadinessIndex from '@/components/AIReadinessIndex';
import { stages } from '@/lib/learning-path';

export const metadata: Metadata = {
  title: 'Clinical AI Academy — Knowledge Check & Learning Path',
  description: 'Explore clinical AI with a short knowledge check and eight open learning modules. Start with a topic or follow the path at your own pace.',
};

export default function HomePage() {
  return (
    <div className="academy-shell home-page">
      <section className="screening-layout" aria-labelledby="home-title">
        <div className="screening-intro">
          <p className="eyebrow"><span className="chapter-index">01</span> KNOWLEDGE CHECK</p>
          <h1 id="home-title">Start with <br />what you know.</h1>
          <p className="intro-copy">A short check to find topics worth exploring in clinical AI. Your answers point you towards the learning path.</p>
          <div className="intro-details"><span>10 questions</span><span>About 5 minutes</span><span>Open access</span></div>
          <p className="quiet-note">An informal learning exercise. It does not assess clinical competence or readiness to use AI.</p>
          <Link className="text-link" href="/modules">Go straight to the learning path <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <AIReadinessIndex />
      </section>
      <section className="path-preview" aria-labelledby="path-preview-title">
        <div className="section-heading"><div><p className="eyebrow">02 / THE LEARNING PATH</p><h2 id="path-preview-title">Eight modules. Your own pace.</h2></div><Link className="text-link" href="/modules">Explore the path <ArrowRight size={18} aria-hidden="true" /></Link></div>
        <div className="stage-preview-grid">
          {stages.map((stage, index) => (
            <Link href={`/modules#stage-${stage.number}`} className="stage-preview" key={stage.number}>
              <span className="stage-number">{stage.number}</span><span className="stage-preview-modules">MODULES {index * 2 + 1}–{index * 2 + 2}</span>
              <h3>{stage.title}</h3><p>{stage.description}</p><ArrowUpRight size={20} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
