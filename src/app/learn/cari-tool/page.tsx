"use client";

import { useState } from 'react';
import { ShieldCheck, AlertTriangle, Info, Download, Award, BookOpen, BarChart3, Users, ShieldAlert, Lightbulb, Target, Eye, Lock, UsersRound, ServerCrash } from 'lucide-react';

// --- CARI Tool Data and Logic (Moved here) ---
const cariQuestions = [
  {
    id: 1,
    text: "Is the data used to train and validate the AI model clearly documented, ethically sourced, representative of the target patient population, and of sufficient quality and quantity for the intended clinical application?",
    frameworks: "CLAIM, FUTURE-AI - Universality, WHO/ITU",
    icon: <BookOpen className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 2,
    text: "Can the AI model\'s decision-making process be sufficiently understood by clinicians? Are there mechanisms to explain *why* the AI reached a specific conclusion for an individual patient, or to highlight the key input features driving its output?",
    frameworks: "FUTURE-AI - Explainability, CLAIM",
    icon: <Lightbulb className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 3,
    text: "Has the AI model been rigorously tested for performance across diverse datasets, different clinical settings, and various patient subgroups, including edge cases and potential adversarial attacks? How does the model handle uncertainty or ambiguous inputs?",
    frameworks: "FUTURE-AI - Robustness, SUDO, FURM - Reliable, Health Care AI Toolkit",
    icon: <BarChart3 className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 4,
    text: "Is there robust evidence from well-designed clinical studies (e.g., randomized controlled trials or prospective real-world studies) demonstrating the AI model\'s safety, accuracy, and actual clinical benefit (e.g., improved patient outcomes, enhanced diagnostic capabilities, or workflow efficiency) in its intended use case?",
    frameworks: "CLAIM, TEHAI, Health Care AI Toolkit",
    icon: <ShieldCheck className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 5,
    text: "Has the AI model been systematically audited for potential biases related to demographic factors (age, sex, ethnicity), socioeconomic status, geographic origin, or other relevant characteristics? Are there effective strategies in place to mitigate identified biases and ensure equitable performance and outcomes across all patient groups?",
    frameworks: "FUTURE-AI - Fairness, SUDO, FURM - Fair, WHO/ITU",
    icon: <Users className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 6,
    text: "Is the AI tool designed for seamless and intuitive integration into existing clinical workflows? Has its usability been tested with representative clinical users to ensure it can be used effectively and efficiently with minimal disruption to patient care?",
    frameworks: "FUTURE-AI - Usability, TEHAI, Health Care AI Toolkit",
    icon: <Target className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 7,
    text: "Can the AI model\'s predictions, the input data it used, and its version be logged and audited? Is there a clear and maintained record of model development, updates, and ongoing performance monitoring?",
    frameworks: "FUTURE-AI - Traceability, CLAIM",
    icon: <Eye className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 8,
    text: "Does the AI model, its development process, and its planned deployment comply with all relevant local and international regulatory requirements (e.g., FDA, CE marking, GDPR, HIPAA) and established ethical guidelines for AI in healthcare?",
    frameworks: "FUTURE-AI, FURM - Ethical, WHO/ITU",
    icon: <ShieldAlert className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 9,
    text: "Is there a comprehensive plan for continuous monitoring, evaluation, and governance of the AI model\'s performance in the real-world clinical setting after deployment? Does this include mechanisms for collecting user feedback, detecting performance degradation, and implementing timely updates or recalibrations?",
    frameworks: "TEHAI, Health Care AI Toolkit",
    icon: <BarChart3 className="w-5 h-5 mr-2 flex-shrink-0" /> 
  },
  {
    id: 10,
    text: "Has a thorough and documented assessment been conducted to weigh the potential clinical benefits of the AI model against its potential risks, including but not limited to misdiagnosis, over-reliance by clinicians, deskilling, or introduction of new types of errors?",
    frameworks: "FURM - Usefulness, Health Care AI Toolkit",
    icon: <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 11,
    text: "Is the specific intended clinical use of the AI model unequivocally defined, including the target patient population and clinical conditions? Are its known limitations, contraindications, and appropriate scope of use clearly communicated to users?",
    frameworks: "CLAIM, Health Care AI Toolkit",
    icon: <Info className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 12,
    text: "Does the AI model provide a reliable indication of its confidence or uncertainty for each prediction or output? Is this uncertainty communicated to clinicians in an understandable and actionable manner?",
    frameworks: "SUDO, FUTURE-AI - Robustness",
    icon: <Lightbulb className="w-5 h-5 mr-2 flex-shrink-0" /> 
  },
  {
    id: 13,
    text: "Are robust technical and organizational measures in place to ensure the security, integrity, and privacy of patient data used by and generated by the AI model, in full compliance with data protection regulations and best practices?",
    frameworks: "FUTURE-AI, WHO/ITU",
    icon: <Lock className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 14,
    text: "Have all relevant stakeholders (including clinicians, nurses, IT staff, and patients where appropriate) been involved in the selection, development, or validation process of the AI tool? Is there adequate and ongoing training provided for all users to ensure competent and safe use?",
    frameworks: "TEHAI, Health Care AI Toolkit",
    icon: <UsersRound className="w-5 h-5 mr-2 flex-shrink-0" />
  },
  {
    id: 15,
    text: "What are the established protocols and contingency plans if the AI system fails, provides clearly erroneous information, or becomes unavailable due to technical issues? How will patient care be managed safely and effectively in such scenarios without relying on the AI tool?",
    frameworks: "Health Care AI Toolkit",
    icon: <ServerCrash className="w-5 h-5 mr-2 flex-shrink-0" />
  }
];
// --- End CARI Tool Data ---

export default function CariToolPage() {
  // --- CARI Tool State and Functions (Moved here) ---
  const [cariAnswers, setCariAnswers] = useState<Record<number, string>>({});
  const [cariScore, setCariScore] = useState<number | null>(null);
  const [cariQuizCompleted, setCariQuizCompleted] = useState(false);
  const [cariEmail, setCariEmail] = useState("");
  const [cariFormMessage, setCariFormMessage] = useState("");
  const [showFrameworks, setShowFrameworks] = useState<Record<number, boolean>>({});

  const handleCariAnswerChange = (questionId: number, answer: string) => {
    setCariAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
  };

  const calculateCariScore = () => {
    if (Object.keys(cariAnswers).length !== cariQuestions.length) {
      alert("Please answer all questions before calculating your score.");
      return;
    }
    let currentScore = 0;
    cariQuestions.forEach(q => {
      if (cariAnswers[q.id] === 'Yes') {
        currentScore++;
      }
    });
    setCariScore(currentScore);
    setCariQuizCompleted(true);
    document.getElementById('cari-results-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCariScoreInterpretation = () => {
    if (cariScore === null) return "";
    if (cariScore >= 13) return "Impressive! Your AI shows strong signs of clinical readiness.";
    if (cariScore >= 8) return "Good progress, but key areas need attention before clinical deployment.";
    return "Significant gaps identified. Your AI requires substantial development to be considered clinically serious.";
  };

  const handleCariEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCariFormMessage('Submitting...');
    const formData = new FormData(e.currentTarget);
    if (formData.get('_honeypot')) {
        console.log("Honeypot field filled, likely spam.");
        setCariFormMessage("Submission failed. Please try again.");
        return;
    }
    try {
      const response = await fetch("https://formspree.io/f/mwpoqpba", {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setCariFormMessage('Thank you! Your email has been submitted. Your downloads will begin shortly.');
        setCariEmail('');
        const pdfLink = document.createElement('a');
        pdfLink.href = '/assets/clinical_ai_readiness_index_detailed_rubric.pdf';
        pdfLink.download = 'Clinical_AI_Readiness_Index_Detailed_Rubric.pdf';
        document.body.appendChild(pdfLink);
        pdfLink.click();
        document.body.removeChild(pdfLink);
        if (cariScore !== null && cariScore >= 10) {
          const badgeLink = document.createElement('a');
          badgeLink.href = '/assets/ai_skeptic_verified_badge.png';
          badgeLink.download = 'AI_Skeptic_Verified_Badge.png';
          document.body.appendChild(badgeLink);
          setTimeout(() => {
            badgeLink.click();
            document.body.removeChild(badgeLink);
          }, 500);
        }
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
          setCariFormMessage(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          setCariFormMessage('Oops! There was a problem submitting your form. Please try again.');
        }
      }
    } catch (error) {
      setCariFormMessage('Oops! There was a problem submitting your form. Please try again.');
    }
  };

  const toggleFrameworks = (questionId: number) => {
    setShowFrameworks(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };
  // --- End CARI Tool State and Functions ---

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">The Clinical AI Readiness Index™ (CARI) Tool</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Assess your AI model against 15 critical questions. If you can’t pass this checklist, your AI isn’t clinically serious.</p>
      </div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {cariQuestions.map((q, index) => (
          <div key={q.id} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start mb-3">
              {q.icon ? <span className="text-blue-500 dark:text-blue-400 mt-1">{q.icon}</span> : <Info className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-2 mt-1 flex-shrink-0" />}
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">{index + 1}. {q.text}</h3>
            </div>
            <div className="flex items-center justify-start space-x-6 mb-3 pl-7">
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <input type="radio" name={`question-${q.id}`} value="Yes" onChange={() => handleCariAnswerChange(q.id, 'Yes')} className="form-radio h-5 w-5 text-green-500 focus:ring-green-400" />
                <span className="text-green-600 dark:text-green-400 font-medium">Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <input type="radio" name={`question-${q.id}`} value="No" onChange={() => handleCariAnswerChange(q.id, 'No')} className="form-radio h-5 w-5 text-red-500 focus:ring-red-400" />
                <span className="text-red-600 dark:text-red-400 font-medium">No</span>
              </label>
            </div>
            <div className="pl-7">
              <button onClick={() => toggleFrameworks(q.id)} className="text-xs text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                <Info size={14} className="mr-1" /> Relevant Frameworks {showFrameworks[q.id] ? '(Hide)' : '(Show)'}
              </button>
              {showFrameworks[q.id] && (
                <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
                  Based on: {q.frameworks}
                </p>
              )}
            </div>
          </div>
        ))}
        <div className="text-center pt-6">
          <button 
            onClick={calculateCariScore} 
            disabled={Object.keys(cariAnswers).length !== cariQuestions.length}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-10 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105">
            Calculate My Score
          </button>
        </div>
      </div>

      {/* CARI Results & Next Steps Section */}
      {cariQuizCompleted && cariScore !== null && (
        <section id="cari-results-section" className="mt-12 md:mt-16 bg-indigo-50 dark:bg-indigo-900/30 p-6 md:p-8 rounded-lg border border-indigo-200 dark:border-indigo-700">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Your Clinical AI Readiness Score</h3>
            <p className="text-5xl md:text-6xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">{cariScore} / {cariQuestions.length}</p>
            <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">{getCariScoreInterpretation()}</p>
            <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-yellow-500" />
              <h4 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Unlock Your Detailed Scorecard & AI-Skeptic Verified Badge</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm md:text-base">
                Enter your email to download a comprehensive PDF detailing the scoring rubric for each question, understand your AI\'s strengths and weaknesses, and receive an 'AI-Skeptic Verified' digital badge (badge awarded for scores 10+). You\'ll also be notified of updates to the Index.
              </p>
              <form onSubmit={handleCariEmailSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
                <input type="text" name="_honeypot" style={{display: 'none'}} tabIndex={-1} autoComplete="off" />
                <input 
                  type="email" 
                  name="email"
                  value={cariEmail}
                  onChange={(e) => setCariEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required 
                  className="flex-grow p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center">
                  <Download size={20} className="mr-2" /> Download & Get Badge
                </button>
              </form>
              {cariFormMessage && <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{cariFormMessage}</p>}
              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">The Index is an evaluative tool, not a formal certification. Badge eligibility: score 10 or higher.</p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

