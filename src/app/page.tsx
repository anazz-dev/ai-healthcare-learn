import Link from 'next/link';
import Roadmap from '@/components/Roadmap'; // Import the Roadmap component
import { Award } from 'lucide-react'; // Import an icon for the certificate

export default function HomePage() {
  // Call to Action Content (from cta_content.md)
  const ctaTitle = "Needs Assessment: AI Literacy for Health professionals";
  const ctaParagraph1 = "Artificial Intelligence is no longer a futuristic concept; it's rapidly transforming the healthcare landscape right now. From revolutionizing diagnostics and treatment planning to streamlining administrative tasks, AI is becoming an indispensable tool for medical professionals. Understanding AI isn't just about staying current – it's about securing your career and enhancing your ability to provide exceptional patient care in the years to come.";
  const ctaParagraph2 = "Ignoring this technological shift is not an option. Professionals who embrace AI literacy will find themselves better equipped to collaborate with AI-driven systems, interpret AI-generated insights, and contribute to the ethical implementation of these powerful tools. This knowledge will not only make you more effective in your current role but also significantly enhance your career prospects and resilience in an evolving job market.";
  const ctaParagraph3 = "This course is designed specifically for healthcare professionals like you. It demystifies AI and Machine Learning, focusing on practical applications, ethical considerations, and the impact on patient privacy. By investing a small amount of time now, you gain the foundational knowledge needed to navigate the future of healthcare confidently.";
  const ctaParagraph4 = "* This course is designed in line with CPD standards and is under review for formal accreditation.";

  return (
    <div className="space-y-12 pb-12"> {/* Added padding-bottom */} 
      {/* Hero Section */}
      <section className="text-center py-10 md:py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow-lg mx-4 md:mx-0"> {/* Adjusted padding for mobile */}
        {/* More aggressive responsive text sizes */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 px-2 sm:px-4">Welcome to AI for Healthcare Professionals</h1>
        <p className="text-sm sm:text-base md:text-xl mb-6 px-4 sm:px-6">Your essential starting point for Artificial Intelligence in the medical field.</p>
        <Link href="/modules"
          // More aggressive responsive padding and text size
          className="bg-white text-blue-600 font-semibold py-2 px-4 sm:py-3 sm:px-8 rounded-full hover:bg-gray-100 transition duration-300 text-sm sm:text-lg">
          Start Learning Now
        </Link>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-8 text-center md:text-left">
        {/* Responsive text size */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 dark:text-white">{ctaTitle}</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base"> {/* Responsive text size */}
          <p>{ctaParagraph1}</p>
          <p>{ctaParagraph2}</p>
          <p className="font-medium text-indigo-600 dark:text-indigo-400">{ctaParagraph3}</p>
          <p>{ctaParagraph4}</p>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 py-8">
        {/* Responsive text size */}
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-800 dark:text-white">Your Learning Roadmap</h2>
        <Roadmap />
      </section>

      {/* Certificate Incentive Section */}
      <section className="container mx-auto px-4 py-8 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800 text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-4"> {/* Stack on mobile */}
          <Award className="w-8 h-8 text-green-600 dark:text-green-400 mb-2 sm:mb-0 sm:mr-3" />
          {/* Responsive text size */}
          <h3 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-200">Earn Your Certificate!</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base"> {/* Responsive text size */}
          Complete all modules and quizzes to receive a certificate acknowledging your understanding of AI in healthcare. Showcase your commitment to professional development and future-proof your career.
        </p>
      </section>

      {/* Second Start Learning Button */}
      <section className="container mx-auto px-4 text-center"> 
        <Link href="/modules"
          // Responsive padding, text size, and width
          className="inline-block w-auto max-w-xs sm:max-w-none bg-indigo-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-indigo-700 transition duration-300 text-base sm:text-lg whitespace-normal break-words">
          Begin Your Journey & Earn Your Certificate
        </Link>
      </section>

    </div>
  );
}

