
import React from 'react';

// Define resource structure
interface Resource {
  title: string;
  url: string;
  description: string;
}

// Define category structure
interface Category {
  name: string;
  resources: Resource[];
}

// Placeholder data - replace with actual curated resources
const resourceCategories: Category[] = [
  {
    name: 'Glossaries & Foundational Concepts',
    resources: [
      {
        title: 'AI Glossary (Stanford HAI)',
        url: 'https://hai.stanford.edu/research/ai-index/ai-glossary',
        description: 'A comprehensive glossary of AI terms from Stanford Human-Centered AI.'
      },
      {
        title: 'Machine Learning Glossary (Google)',
        url: 'https://developers.google.com/machine-learning/glossary',
        description: 'Google developers glossary covering machine learning concepts.'
      }
    ]
  },
  {
    name: 'Key Articles & Overviews',
    resources: [
      {
        title: 'High-performance medicine: the convergence of human and artificial intelligence (Nature Medicine)',
        url: 'https://www.nature.com/articles/s41591-018-0300-7',
        description: 'Seminal article by Eric Topol on the future of AI in medicine.'
      },
      {
        title: 'Key concepts for evaluating clinical AI tools (AMA)',
        url: 'https://www.ama-assn.org/practice-management/digital/key-concepts-evaluating-clinical-ai-tools',
        description: 'Guidance from the American Medical Association on evaluating AI tools.'
      }
    ]
  },
  {
    name: 'Ethical Guidelines & Frameworks',
    resources: [
      {
        title: 'Ethics and governance of artificial intelligence for health (WHO)',
        url: 'https://www.who.int/publications/i/item/9789240029200',
        description: 'WHO guidance report on ethical considerations for AI in health.'
      },
      {
        title: 'Ethical Principles for AI in Healthcare (The Hastings Center)',
        url: 'https://www.thehastingscenter.org/briefingbook/artificial-intelligence/',
        description: 'Overview of ethical issues related to AI from The Hastings Center.'
      }
    ]
  },
  {
    name: 'Data Privacy & Security',
    resources: [
      {
        title: 'HIPAA Basics for Providers (HHS.gov)',
        url: 'https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/basics/index.html',
        description: 'Official guidance on HIPAA privacy rules from the US Dept. of Health & Human Services.'
      }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Resource Library</h1>
      <p className="text-gray-700 mb-8">
        A curated list of external articles, guidelines, and glossaries for further learning.
      </p>

      {resourceCategories.map((category) => (
        <section key={category.name} className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-blue-800">{category.name}</h2>
          <ul className="space-y-4">
            {category.resources.map((resource) => (
              <li key={resource.url} className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-blue-600 hover:underline"
                >
                  {resource.title}
                </a>
                <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

