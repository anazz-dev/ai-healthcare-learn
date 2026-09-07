'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Quiz, { QuizQuestion } from '@/components/Quiz';
import { splitModuleSections } from '@/lib/module-sections';

interface InteractiveModuleViewerProps {
  htmlContent: string;
  moduleId: string;
  nextModulePath?: string;
  previousModulePath?: string;
  moduleTitle: string;
  learningObjectives: ReactNode;
  quizQuestions?: QuizQuestion[];
}

export default function InteractiveModuleViewer({ htmlContent, moduleId, nextModulePath, previousModulePath, moduleTitle, learningObjectives, quizQuestions = [] }: InteractiveModuleViewerProps) {
  const sections = useMemo(() => splitModuleSections(htmlContent), [htmlContent]);
  const [current, setCurrent] = useState(0);
  const [practice, setPractice] = useState(false);
  const [navigated, setNavigated] = useState(false);
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => { if (navigated) content.current?.focus(); }, [current, practice, navigated]);
  const moveTo = (index: number) => { setCurrent(index); setPractice(false); setNavigated(true); };

  return (
    <div className="reader-shell">
      <Link href={`/modules#${moduleId}`} className="text-link"><ArrowLeft size={17} aria-hidden="true" />The learning path</Link>
      <header className="reader-heading"><p className="eyebrow">MODULE {moduleId.split('-')[1]} / 8</p><h1>{moduleTitle.replace(/^Module \d+: /, '')}</h1></header>
      <div className="reader-tools">
        <div className="flex items-center gap-3 min-w-0 max-w-full"><span id="section-label" className="text-sm shrink-0">Jump to</span><Select value={String(current)} onValueChange={value => moveTo(Number(value))}><SelectTrigger aria-labelledby="section-label" className="w-[min(360px,55vw)] min-h-11"><SelectValue /></SelectTrigger><SelectContent>{sections.map((section, index) => <SelectItem value={String(index)} key={index}>{index + 1}. {section.title}</SelectItem>)}</SelectContent></Select></div>
        {quizQuestions.length > 0 && <Button className="academy-button" variant="outline" onClick={() => {setPractice(!practice); setNavigated(true);}}><BookOpen size={17} aria-hidden="true" />{practice ? 'Back to reading' : 'Optional practice'}</Button>}
      </div>
      <div ref={content} tabIndex={-1}>
        {practice ? <div><h2 className="text-2xl font-semibold">Check your understanding</h2><p className="practice-note">Try these questions and read the explanations. You can return to the material or move to another module at any time.</p><Quiz questions={quizQuestions} /></div> : <>
          <p className="reader-position">Section {current + 1} of {sections.length}</p>
          {current === 0 && <div className="my-6">{learningObjectives}</div>}
          <article className="prose reader-content" dangerouslySetInnerHTML={{ __html: sections[current]?.html || '<p>This module is temporarily unavailable.</p>' }} />
        </>}
      </div>
      {!practice && <div className="reader-nav"><Button variant="outline" className="academy-button" disabled={current === 0} onClick={() => moveTo(current - 1)}><ArrowLeft size={17} aria-hidden="true" />Previous section</Button>{current < sections.length - 1 ? <Button className="academy-button" onClick={() => moveTo(current + 1)}>Next section <ArrowRight size={17} aria-hidden="true" /></Button> : quizQuestions.length > 0 ? <Button variant="outline" className="academy-button" onClick={() => {setPractice(true); setNavigated(true);}}>Try the practice questions</Button> : null}</div>}
      <nav className="module-nav" aria-label="Module navigation">{previousModulePath ? <Link className="text-link" href={previousModulePath}><ArrowLeft size={17} aria-hidden="true" />Previous module</Link> : <Link className="text-link" href="/modules">View the full path</Link>}{nextModulePath ? <Link className="text-link" href={nextModulePath}>Next module <ArrowRight size={17} aria-hidden="true" /></Link> : <Link className="text-link" href="/modules">Return to the learning path <ArrowRight size={17} aria-hidden="true" /></Link>}</nav>
    </div>
  );
}
