export interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    text: string;
    points: number;
  }[];
  category: 'knowledge' | 'application' | 'implementation' | 'ethics';
}

export const questions: Question[] = [
  {
    id: 'ai-definition',
    text: 'What is the primary advantage of AI over traditional clinical decision support tools?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Can learn and adapt from new data', points: 5 },
      { value: 'b', text: 'Requires more computational power', points: 1 },
      { value: 'c', text: 'Always provides accurate results', points: 0 },
      { value: 'd', text: 'Works only with imaging data', points: 0 }
    ]
  },
  {
    id: 'ml-training',
    text: 'What is most critical for training effective healthcare AI models?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Expensive computing hardware', points: 1 },
      { value: 'b', text: 'High-quality representative data', points: 5 },
      { value: 'c', text: 'The newest AI algorithms', points: 2 },
      { value: 'd', text: 'Hospital administration approval', points: 1 }
    ]
  },
  {
    id: 'ai-limitations',
    text: 'Which is a key limitation of current healthcare AI systems?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Too slow for clinical use', points: 1 },
      { value: 'b', text: 'Cannot process medical images', points: 0 },
      { value: 'c', text: 'May not generalize across populations', points: 5 },
      { value: 'd', text: 'Too expensive for healthcare', points: 1 }
    ]
  },
  {
    id: 'regulatory-compliance',
    text: 'Under the EU AI Act, healthcare AI applications are typically:',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Low-risk with minimal oversight', points: 1 },
      { value: 'b', text: 'Prohibited from clinical use', points: 0 },
      { value: 'c', text: 'Unregulated with no requirements', points: 0 },
      { value: 'd', text: 'High-risk requiring human oversight', points: 5 }
    ]
  },
  {
    id: 'diagnostic-imaging',
    text: 'What is the best approach for using AI in diagnostic imaging?',
    category: 'application',
    options: [
      { value: 'a', text: 'Use as decision support tool', points: 5 },
      { value: 'b', text: 'Replace radiologist interpretation', points: 0 },
      { value: 'c', text: 'Only for non-critical cases', points: 2 },
      { value: 'd', text: 'Avoid AI in imaging entirely', points: 0 }
    ]
  },
  {
    id: 'workflow-integration',
    text: 'How should AI tools be integrated into clinical workflows?',
    category: 'application',
    options: [
      { value: 'a', text: 'Replace existing protocols completely', points: 1 },
      { value: 'b', text: 'Integrate gradually with monitoring', points: 5 },
      { value: 'c', text: 'Use only for training purposes', points: 2 },
      { value: 'd', text: 'Implement immediately without changes', points: 0 }
    ]
  },
  {
    id: 'patient-monitoring',
    text: 'In patient monitoring, AI is most valuable for:',
    category: 'application',
    options: [
      { value: 'a', text: 'Replacing nursing staff entirely', points: 0 },
      { value: 'b', text: 'Reducing monitor requirements', points: 1 },
      { value: 'c', text: 'Early detection of deterioration', points: 5 },
      { value: 'd', text: 'Eliminating all false alarms', points: 2 }
    ]
  },
  {
    id: 'data-governance',
    text: 'What is the first step for AI implementation in healthcare?',
    category: 'implementation',
    options: [
      { value: 'a', text: 'Purchase advanced AI software', points: 1 },
      { value: 'b', text: 'Train all staff on AI', points: 3 },
      { value: 'c', text: 'Hire AI specialists immediately', points: 2 },
      { value: 'd', text: 'Establish data governance processes', points: 5 }
    ]
  },
  {
    id: 'staff-training',
    text: 'Effective AI training for healthcare staff should focus on:',
    category: 'implementation',
    options: [
      { value: 'a', text: 'AI capabilities and limitations', points: 5 },
      { value: 'b', text: 'Technical programming skills', points: 1 },
      { value: 'c', text: 'Training only IT staff', points: 0 },
      { value: 'd', text: 'Memorizing AI algorithms', points: 0 }
    ]
  },
  {
    id: 'bias-detection',
    text: 'How should healthcare professionals address AI bias?',
    category: 'ethics',
    options: [
      { value: 'a', text: 'Ignore bias in approved systems', points: 0 },
      { value: 'b', text: 'Monitor performance across populations', points: 5 },
      { value: 'c', text: 'Only use AI for certain groups', points: 1 },
      { value: 'd', text: 'Rely on vendor bias testing', points: 2 }
    ]
  }
];

export const questionTopics: Record<string, { moduleId: string; topic: string }> = {
  'ai-definition': { moduleId: 'module-1', topic: 'AI fundamentals' },
  'ml-training': { moduleId: 'module-2', topic: 'training data' },
  'ai-limitations': { moduleId: 'module-2', topic: 'generalisation' },
  'regulatory-compliance': { moduleId: 'module-6', topic: 'regulation' },
  'diagnostic-imaging': { moduleId: 'module-3', topic: 'clinical applications' },
  'workflow-integration': { moduleId: 'module-8', topic: 'workflow integration' },
  'patient-monitoring': { moduleId: 'module-3', topic: 'patient monitoring' },
  'data-governance': { moduleId: 'module-6', topic: 'data governance' },
  'staff-training': { moduleId: 'module-8', topic: 'staff training' },
  'bias-detection': { moduleId: 'module-4', topic: 'bias and fairness' },
};

export function getSuggestedAnswer(question: Question) {
  return question.options.reduce((best, option) => option.points > best.points ? option : best);
}

export interface ModuleSuggestion {
  moduleId: string;
  topics: string[];
  kind: 'review' | 'explore';
}

/** An answer-to-topic map, not a measure of competence or clinical readiness. */
export function getSuggestedModules(answers: Record<string, string>): ModuleSuggestion[] {
  const review = new Map<string, string[]>();
  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer || answer === getSuggestedAnswer(question).value) continue;
    const topic = questionTopics[question.id];
    const topics = review.get(topic.moduleId) || [];
    topics.push(topic.topic);
    review.set(topic.moduleId, topics);
  }
  if (review.size) {
    return Array.from(review, ([moduleId, topics]) => ({ moduleId, topics, kind: 'review' as const }))
      .sort((a, b) => b.topics.length - a.topics.length || Number(a.moduleId.split('-')[1]) - Number(b.moduleId.split('-')[1]))
      .slice(0, 3);
  }
  return [
    { moduleId: 'module-5', topics: ['evaluation and validation in more detail'], kind: 'explore' },
    { moduleId: 'module-7', topics: ['language models, a topic beyond this short check'], kind: 'explore' },
  ];
}
