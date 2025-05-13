"use client";

import Link from 'next/link';
import { MessageSquare, Briefcase, GraduationCap, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function HomePage() {

  return (
    <div className="space-y-12 md:space-y-16 pb-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* New Hero Section (Revised) */}
      <section className="text-center py-20 md:py-32 bg-gradient-to-r from-blue-700 to-indigo-800 text-white rounded-b-xl shadow-2xl mx-auto">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">We Communicate Clinical AI.</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-light mb-10">Clarity. Credibility. Clinical relevance.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="#contact-section" className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:scale-105 flex items-center">
              <Briefcase size={20} className="mr-2" /> Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* Clinical AI Communication Services Section (Content and Layout Revised based on latest feedback) */}
      <section id="services-section" className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Clinical AI Communication Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">We translate complex AI into clear, usable content for clinicians, regulators, and decision-makers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Service Item 1 (Merged) */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Clinical Evaluation Reports and Literature Reviews</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Comprehensive documents assessing the clinical validity, safety, and effectiveness of AI tools.</p>
            <Link href="#contact-section" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">Discuss Your Needs <ArrowRight size={16} className="ml-1" /></Link>
          </div>

          {/* Service Item 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
         <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">White Papers, Blogs, and Social Media Content</h4>            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Developing insightful content to position your AI solutions and inform key stakeholders.</p>
            <Link href="#contact-section" className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center">Discuss Your Needs <ArrowRight size={16} className="ml-1" /></Link>
          </div>
        </div>
      </section>

      {/* Soft CTA Section (Revised) */}
      <section className="container mx-auto px-4 py-8 md:py-12 text-center">
        <div className="bg-indigo-100 dark:bg-indigo-900/50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">Not sure how to communicate your clinical AI?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Let’s make it clear, credible, and clinically useful.</p>
          <Link href="#contact-section" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center mx-auto w-fit">
            <MessageSquare size={20} className="mr-2" /> Let’s talk
          </Link>
        </div>
      </section>

      {/* Course Section (Wording Revised for Clarity - sentence removed) */}
      <section id="course-section" className="container mx-auto px-4 py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Our Course: AI Literacy for Healthcare Professionals</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">This self-paced course is built for real-world decisions, empowering healthcare professionals to improve their AI literacy and effectively communicate the value and intricacies of clinical AI.</p>
        </div>
        <div className="text-center">
          {/* The long sentence has been removed here */}
          <Link href="/modules" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center mx-auto w-fit">
            <GraduationCap size={20} className="mr-2" /> Explore Course Modules
          </Link>
        </div>
      </section>

      {/* CARI Introduction Section */}
      <section id="cari-intro-section" className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">The Clinical AI Readiness Index™ (CARI)</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Assess your AI model against 15 critical questions. A vital step before clinical deployment to ensure your AI is clinically serious.</p>
        </div>
        <div className="text-center">
          <Link href="/learn/cari-tool" className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center mx-auto w-fit">
            <ShieldCheck size={20} className="mr-2" /> Access the CARI Tool
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="container mx-auto px-4 py-12 md:py-16 bg-gray-100 dark:bg-gray-800/50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">About Us</h2>
        </div>
        <div className="max-w-3xl mx-auto text-left md:text-center space-y-4 text-lg text-gray-700 dark:text-gray-300">
          <p>Clinical AI Academy helps healthcare and AI teams communicate clinical AI clearly, credibly, and usefully.</p>
          <p>Founded by a physician and neuroscience PhD, we specialize in making complex AI understandable—so it can be trusted, adopted, and used to improve patient care.</p>
          <p>We bridge the gap between innovation and implementation, one sentence at a time.</p>
        </div>
      </section>

      {/* Contact Section (Content Revised) */}
      <section id="contact-section" className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">Let’s Start a Conversation</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Have a question, or want to explore how we can help with your clinical AI communication? Email us and we’ll get back to you within 1–2 business days.</p>
        </div>
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 text-center">
          <a href="mailto:contact@clinicalaiacademy.com" className="inline-flex items-center justify-center text-blue-600 dark:text-blue-400 hover:underline text-xl font-semibold">
            <Mail size={24} className="mr-3" /> contact@clinicalaiacademy.com
          </a>
        </div>
      </section>

    </div>
  );
}

