
'use client';

import React, { useEffect, useState } from 'react';

interface ProgressData {
  [moduleId: string]: boolean;
}

const totalModules = 4; // Define the total number of modules

// Placeholder for SVG signature - will be replaced later
const signatureSvgDataUri = "data:image/png;base64,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";

export default function ProgressPage() {
  const [progress, setProgress] = useState<ProgressData>({});
  const [userName, setUserName] = useState<string>('');
  const [completedModules, setCompletedModules] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    const storedProgress = localStorage.getItem('aiHealthcareProgress');
    if (storedProgress) {
      try {
        const parsedProgress: ProgressData = JSON.parse(storedProgress);
        if (typeof parsedProgress === 'object' && parsedProgress !== null) {
          setProgress(parsedProgress);
          const count = Object.values(parsedProgress).filter(Boolean).length;
          setCompletedModules(count);
          setIsComplete(count >= totalModules);
        }
      } catch (error) {
        console.error("Failed to parse progress from localStorage:", error);
      }
    }
  }, []);

  const generateCertificate = () => {
    if (!isComplete || !userName.trim()) {
      alert('Please complete all modules and enter your name to generate the certificate.');
      return;
    }

    const certificateWindow = window.open('', '_blank');
    if (certificateWindow) {
      certificateWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Certificate of Completion - Clinical AI Academy</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Lato', sans-serif;
              margin: 0;
              padding: 20px; /* Add padding for print view */
              background-color: #f0f9ff; /* Light blue background for screen view */
            }
            .certificate-container {
              border: 10px solid #004080; /* Dark blue border */
              padding: 40px;
              width: 800px;
              height: 585 px; /* Approx A4 landscape ratio */
              margin: 20px auto;
              background-color: #ffffff;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
              box-sizing: border-box;
            }
            .certificate-header {
                text-align: center;
                margin-bottom: 20px;
            }
            .academy-name {
                font-family: 'Merriweather', serif;
                font-size: 28px;
                font-weight: 700;
                color: #004080; /* Dark blue */
                margin: 0;
            }
            .certificate-body {
              text-align: center;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .completion-text {
                font-size: 18px;
                color: #555;
                margin-bottom: 10px;
            }
            .recipient-name {
                font-family: 'Merriweather', serif;
                font-size: 36px;
                font-weight: 700;
                color: #333;
                margin: 10px 0;
                border-bottom: 2px solid #eee;
                padding-bottom: 10px;
                display: inline-block; /* Keep underline contained */
            }
            .course-text {
                font-size: 16px;
                color: #555;
                margin-top: 20px;
                margin-bottom: 5px;
            }
            .course-name {
                font-size: 22px;
                font-weight: 700;
                color: #0056b3; /* Medium blue */
                margin: 5px 0 15px 0;
            }
            .completion-date {
                font-size: 14px;
                color: #777;
                margin-top: 10px;
            }
            .certificate-footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eee;
            }
            .signature-section {
                display: inline-block; /* Keep signature and name together */
            }
            .signature-image {
                width: 150px; /* Adjust size as needed */
                height: auto;
                margin-bottom: -5px; /* Adjust vertical alignment */
            }
            .expert-name {
                font-size: 16px;
                font-weight: 700;
                color: #333;
                margin: 5px 0 0 0;
                border-top: 1px solid #ccc;
                padding-top: 5px;
            }
            .expert-title {
                font-size: 14px;
                color: #666;
                margin: 0;
            }
            .print-button-container {
              text-align: center; 
              margin-top: 20px;
            }
            .print-button {
              padding: 10px 20px; 
              font-size: 1em; 
              cursor: pointer;
              background-color: #4CAF50; 
              color: white; 
              border: none; 
              border-radius: 4px;
            }
            @media print {
              body { background-color: #fff; padding: 0; margin: 0; }
              .certificate-container { margin: 0; box-shadow: none; border: 10px solid #004080; width: 100%; height: 100%; }
              .print-button-container { display: none; }
            }
            @page { size: A4 landscape; margin: 0; }
          </style>
        </head>
        <body class="bg-gray-100">
         <div class="certificate-container">
            <div class="certificate-header">
              <h1 class="academy-name">Clinical AI Academy</h1>
            </div>
            <div class="certificate-body">
              <p class="completion-text">This certifies that</p>
              <p class="recipient-name">${userName}</p>
              <p class="course-text"> successfully completed the course</p>
              <h2 class="course-name">AI Literacy for Healthcare Professionals</h2>
              <p class="course-text">demonstrating foundational competence in clinical applications of artificial intelligence</p>
              <p class="completion-date">Date: ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="certificate-footer">
              <div class="signature-section">
                <p class="accreditation-note" style="font-size: 0.8rem">
                Course is aligned with Continuing Professional Development (CPD) and Continuing Medical Education (CME) standards.
                </p>
              </div>
            </div>
          </div>
          <div class="print-button-container">
            <button onclick="window.print()" class="print-button">Print Certificate</button>
          </div>
        </body>
        </html>
      `);
      certificateWindow.document.close();
    } else {
      alert('Could not open certificate window. Please check your browser settings.');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Progress</h1>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
        <p className="font-bold">Important Note</p>
        <p>Your progress is saved only in this browser. Clearing your browser data or using a different device will reset your progress.</p>
      </div>

      <div className="mb-6 p-4 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-3">Module Completion Status</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center">
            <span>Module 1: What AI Really Is (And Isn’t): A Clinician’s First Look</span>
            <span className={`font-bold ${progress['module-1'] ? 'text-green-600' : 'text-red-600'}`}>
              {progress['module-1'] ? 'Completed ✓' : 'Incomplete'}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Module 2: How AI Learns (and Why It Sometimes Gets It Wrong)</span>
            <span className={`font-bold ${progress['module-2'] ? 'text-green-600' : 'text-red-600'}`}>
              {progress['module-2'] ? 'Completed ✓' : 'Incomplete'}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Module 3: How AI Performs in Clinical Practice: Real Cases, Real Limits</span>
            <span className={`font-bold ${progress['module-3'] ? 'text-green-600' : 'text-red-600'}`}>
              {progress['module-3'] ? 'Completed ✓' : 'Incomplete'}
            </span>
          </li>
          <li className="flex justify-between items-center">
            <span>Module 4: Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice</span>
            <span className={`font-bold ${progress['module-4'] ? 'text-green-600' : 'text-red-600'}`}>
              {progress['module-4'] ? 'Completed ✓' : 'Incomplete'}
            </span>
          </li>
        </ul>
        <div className="mt-4 pt-4 border-t">
          <p className="text-lg font-semibold">Overall Progress: {completedModules} / {totalModules} modules completed ({Math.round((completedModules / totalModules) * 100)}%)</p>
        </div>
      </div>

      {isComplete && (
        <div className="mt-8 p-6 border rounded-lg bg-green-50 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">Generate Certificate</h2>
          <p className="mb-4 text-green-700">Congratulations on completing all modules! Enter your name as you would like it to appear on the certificate.</p>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">Name for Certificate:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            onClick={generateCertificate}
            disabled={!userName.trim()}
            className={`w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${!userName.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'}`}
          >
            Generate Certificate
          </button>
        </div>
      )}
    </div>
  );
}

