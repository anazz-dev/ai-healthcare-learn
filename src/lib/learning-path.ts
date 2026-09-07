export interface LearningModule {
  id: string;
  title: string;
  description: string;
  path: string;
}

export const modules: LearningModule[] = [
  {
    id: 'module-1',
    title: "Module 1: What AI Really Is (And Isn't): A Clinician's First Look",
    description: 'An accessible introduction to how AI differs from traditional software and why clinicians must understand its foundations and limitations.',
    path: '/modules/module-1'
  },
  {
    id: 'module-2',
    title: 'Module 2: How AI Learns (and Why It Sometimes Gets It Wrong)',
    description: 'A practical look at how machine learning models develop, where they can go astray, and how data quality shapes clinical performance.',
    path: '/modules/module-2'
  },
  {
    id: 'module-3',
    title: 'Module 3: How AI Performs in Clinical Practice: Real Cases, Real Limits',
    description: 'Evidence-based walkthroughs of landmark clinical AI studies, revealing how success depends on data, labels, validation, and context.',
    path: '/modules/module-3'
  },
  {
    id: 'module-4',
    title: 'Module 4: Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice',
    description: 'A guide to understanding ethical principles, identifying bias, and navigating the regulatory and professional responsibilities clinicians share when using AI.',
    path: '/modules/module-4'
  },
  {
    id: 'module-5',
    title: 'Module 5: Evaluating & Validating AI Tools in Clinical Practice',
    description: 'How to critically appraise AI vendor claims, interpret performance metrics, understand regulatory clearance, and ask the right questions before adopting any AI tool.',
    path: '/modules/module-5'
  },
  {
    id: 'module-6',
    title: 'Module 6: AI Governance, Regulation & Institutional Policy',
    description: 'A practical guide to the FDA SaMD framework, EU AI Act, hospital AI governance committees, audit trails, and what institutional policy must cover.',
    path: '/modules/module-6'
  },
  {
    id: 'module-7',
    title: 'Module 7: Working with Large Language Models (LLMs) in Clinical Practice',
    description: 'Safe and effective use of ChatGPT/Claude-style tools in healthcare — covering hallucinations, prompt engineering, data protection risks, and institutional governance.',
    path: '/modules/module-7'
  },
  {
    id: 'module-8',
    title: 'Module 8: AI Implementation & Change Management in Healthcare',
    description: 'How to lead or participate in an AI deployment — covering workflow redesign, stakeholder engagement, staff training, post-deployment monitoring, and when to halt a deployment.',
    path: '/modules/module-8'
  }
];

export const stages = [
  { number: '01', title: 'Understand AI', description: 'The ideas behind the tools.', moduleIds: ['module-1', 'module-2'] },
  { number: '02', title: 'Explore the clinical context', description: 'Real applications, limitations, and responsibilities.', moduleIds: ['module-3', 'module-4'] },
  { number: '03', title: 'Evaluate and govern', description: 'Evidence, evaluation, and institutional policy.', moduleIds: ['module-5', 'module-6'] },
  { number: '04', title: 'Consider its use in practice', description: 'Language models, workflows, and implementation.', moduleIds: ['module-7', 'module-8'] },
];

export function getModule(id: string) {
  return modules.find(module => module.id === id);
}
