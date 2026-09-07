'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export interface QuizOption { id: string; text: string; }
export interface QuizQuestion { id: string; text: string; options: QuizOption[]; correctAnswerId: string; feedback: string; }

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState(false);
  const [finished, setFinished] = useState(false);
  const [navigated, setNavigated] = useState(false);
  const title = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (navigated) title.current?.focus(); }, [current, finished, navigated]);
  const question = questions[current];

  if (!question) return <p>There are no practice questions for this module.</p>;
  if (finished) return <div className="check-panel p-6 my-6"><h3 ref={title} tabIndex={-1} className="text-xl font-semibold">Practice finished</h3><p className="practice-note">You have reached the end of these questions. Revisit the explanations or continue along the learning path.</p><Button variant="outline" className="academy-button" onClick={() => {setCurrent(0); setSelected(''); setFeedback(false); setFinished(false);}}><RotateCcw size={17} aria-hidden="true" />Try the questions again</Button></div>;

  return <section className="check-panel my-6" aria-labelledby="practice-question"><div className="check-panel-top"><strong>Practice question</strong><span>{current + 1} / {questions.length}</span></div><div className="check-body"><h3 id="practice-question" ref={title} tabIndex={-1} className="check-question">{question.text}</h3><RadioGroup value={selected} onValueChange={setSelected} disabled={feedback} aria-labelledby="practice-question" className="gap-3">{question.options.map(option => <label htmlFor={`${question.id}-${option.id}`} key={option.id} className={`answer-option ${selected === option.id ? 'selected' : ''}`}><RadioGroupItem id={`${question.id}-${option.id}`} value={option.id} /><span>{option.text}</span></label>)}</RadioGroup>{feedback && <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-5" role="status"><h4 className="font-semibold mb-2">{selected === question.correctAnswerId ? 'That matches the suggested answer.' : 'Review the explanation.'}</h4>{selected !== question.correctAnswerId && <p className="mb-3">Suggested answer: {question.options.find(option => option.id === question.correctAnswerId)?.text}</p>}<p>{question.feedback}</p></div>}<div className="check-actions"><span className="text-sm text-slate-600">Optional practice</span>{feedback ? <Button className="academy-button" onClick={() => {setNavigated(true); if (current === questions.length - 1) setFinished(true); else {setCurrent(index => index + 1); setSelected(''); setFeedback(false);}}}>{current === questions.length - 1 ? 'Finish practice' : 'Next question'}<ArrowRight size={17} aria-hidden="true" /></Button> : <Button className="academy-button" disabled={!selected} onClick={() => setFeedback(true)}>Read the explanation</Button>}</div></div></section>;
}
