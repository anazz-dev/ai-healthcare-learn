import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { modules, stages } from '@/lib/learning-path';

export const metadata: Metadata = { title: 'The Learning Path | Clinical AI Academy', description: 'Eight open modules, from AI fundamentals to evaluation, governance, language models, and implementation in healthcare.' };

export default function ModulesPage() {
  return (
    <div className="academy-shell learning-page">
      <header className="path-heading"><div><p className="eyebrow">THE LEARNING PATH</p><h1>From first principles<br />to clinical practice.</h1><p className="intro-copy">Eight modules to explore in order or by topic. Every module is open, so you can begin wherever you like.</p><div className="intro-details"><span>8 modules</span><span>4 stages</span><span>Self-paced</span></div></div><div className="path-start-note"><p>Not sure where to begin?</p><Link href="/readiness-index" className="text-link">Try the knowledge check <ArrowUpRight size={18} aria-hidden="true" /></Link></div></header>
      <div className="learning-layout">
        <aside className="path-sidebar"><p className="eyebrow">ON THIS PATH</p><nav aria-label="Learning stages">{stages.map(stage => <a key={stage.number} href={`#stage-${stage.number}`}><span>{stage.number}</span>{stage.title}</a>)}</nav><p>Read, revisit, or move on.<br />There is no required sequence.</p></aside>
        <div className="path-stages">{stages.map(stage => <section key={stage.number} id={`stage-${stage.number}`} className="learning-stage" aria-labelledby={`stage-title-${stage.number}`}><div className="stage-heading"><span className="stage-marker">{stage.number}</span><div><p className="eyebrow">STAGE {stage.number}</p><h2 id={`stage-title-${stage.number}`}>{stage.title}</h2><p>{stage.description}</p></div></div><ol className="module-list">{stage.moduleIds.map(id => {const module = modules.find(item => item.id === id)!; return <li key={id} id={id}><Link href={module.path} className="module-card"><span className="module-label">MODULE {id.split('-')[1]}</span><h3>{module.title.replace(/^Module \d+: /, '')}</h3><p>{module.description}</p><span className="module-action">Open module <ArrowRight size={18} aria-hidden="true" /></span></Link></li>;})}</ol></section>)}<div className="path-end"><span className="path-end-mark" aria-hidden="true" /><h2>Keep the path close.</h2><p>Return to a module when a question comes up. The material is here to revisit at your own pace.</p><Link href="/blog" className="text-link">Explore further reading <ArrowUpRight size={18} aria-hidden="true" /></Link></div></div>
      </div>
    </div>
  );
}
