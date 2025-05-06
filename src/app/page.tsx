import Link from 'next/link';
import Roadmap from '@/components/Roadmap'; // Import the Roadmap component
import { Award, BookOpen, AlertTriangle, GraduationCap, CheckCircle2 } from 'lucide-react'; // Import icons, added CheckCircle2

export default function HomePage() {
  // New Content Variables
  const newSection1Title = "AI Literacy Is No Longer Optional";
  const newSection1Para1 = "Artificial Intelligence (AI) is already transforming clinical decision-making, diagnostics, and healthcare. Now, with the introduction of the EU AI Act (Regulation 2024/1689), most healthcare AI tools are legally defined as “high-risk” systems. This mandates that providers and users of AI systems have a sufficient level of AI literacy. Healthcare professionals need to ensure qualified human oversight, understand AI capabilities and limitations, and document and interpret model performance and risk.";

  const newSection2Title = "A Recognized Skills Gap";
  const newSection2Para1 = "Despite growing adoption of AI tools, most clinicians report limited formal training. Key findings include:"; // Modified intro
  const newSection2Points = [
    "A WHO–EU Observatory brief (2025) finds that digital-skills education for health professionals is “insufficient”, with the sharpest gaps in AI and genomics.",
    "In a 2024 survey of German nurses, just 25% felt competent in AI concepts."
  ];

  const newSection3Title = "Clinical AI Academy: Practical, Regulatory-Aligned Training";
  const newSection3Para1 = "We created Clinical AI Academy to close this gap with focused, flexible, and professionally relevant training, featuring:"; // Modified intro
  const newSection3Features = [
    "Modular micro-courses on dataset bias, interpretability, model drift, and regulatory compliance",
    "Workshops tailored by specialty—including radiology, general practice, and hospital IT",
    "Designed for real-world application, not just theory",
    "Our flagship course “AI Literacy for Healthcare Professionals” is mapped to the European Accreditation Council for Continuing Medical Education (EACCME) criteria."
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="text-center py-10 md:py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mx-4 md:mx-0">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 px-2 sm:px-4">Welcome to Clinical AI Academy</h1>
        <p className="text-sm sm:text-base md:text-xl mb-6 px-4 sm:px-6">Your essential starting point for mastering Artificial Intelligence in the medical field.</p>
        <Link href="/modules"
          className="bg-white text-blue-600 font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition duration-300 text-sm sm:text-lg">
          Start Learning Now
        </Link>
      </section>

      {/* New Section 1: AI Literacy - Text Centered */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2 sm:mb-0 sm:mr-3" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">{newSection1Title}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{newSection1Para1}</p>
      </section>

      {/* New Section 2: Skills Gap - Text Centered, list styled with icons */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8 text-yellow-500 dark:text-yellow-400 mb-2 sm:mb-0 sm:mr-3" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">{newSection2Title}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">{newSection2Para1}</p>
        <div className="space-y-3 max-w-xl mx-auto"> {/* Max width for the list container */}
          {newSection2Points.map((item, index) => (
            <div key={index} className="flex items-start text-left"> {/* Align items to start for multi-line text */}
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* New Section 3: Clinical AI Academy - Text Centered, list styled with icons */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
          <GraduationCap className="w-8 h-8 text-green-600 dark:text-green-400 mb-2 sm:mb-0 sm:mr-3" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white">{newSection3Title}</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">{newSection3Para1}</p>
        <div className="space-y-3 max-w-xl mx-auto"> {/* Max width for the list container */}
          {newSection3Features.map((item, index) => (
            <div key={index} className="flex items-start text-left"> {/* Align items to start for multi-line text */}
              <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Your Learning Roadmap</h2>
        <Roadmap />
      </section>

      {/* Certificate Incentive Section */}
      <section className="container mx-auto px-4 py-8 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4">
          <Award className="w-8 h-8 text-green-600 dark:text-green-400 mb-2 sm:mb-0 sm:mr-3" />
          <h3 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-200">Earn Your Certificate!</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Complete all modules and quizzes to receive a certificate acknowledging your understanding of AI in healthcare. Showcase your commitment to professional development and future-proof your career.
        </p>
      </section>

      {/* Second Start Learning Button */}
      <section className="container mx-auto px-4 text-center py-8"> 
        <Link href="/modules"
          className="inline-block w-auto max-w-xs sm:max-w-none bg-indigo-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-indigo-700 transition duration-300 text-base sm:text-lg whitespace-normal break-words">
          Begin Your Journey & Earn Your Certificate
        </Link>
      </section>

    </div>
  );
}

