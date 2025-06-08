import { QuizData } from "./types";

export const quizData: QuizData = {
  "module-1": {
    title: "Module 1 Quiz: Check Your Understanding",
    questions: [
      {
        id: "m1q1",
        text: "What is AI actually doing when it \"learns\"?",
        options: [
          { id: "a", text: "Finding patterns in data" },
          { id: "b", text: "Understanding anatomy" },
          { id: "c", text: "Following logic trees" },
          { id: "d", text: "Making clinical decisions" },
        ],
        correctAnswerId: "a",
        feedback: "Correct! AI learns by identifying statistical patterns and correlations within the data it's trained on.",
      },
      {
        id: "m1q2",
        text: "Why might an AI trained in one hospital fail in another?",
        options: [
          { id: "a", text: "Internet speed" },
          { id: "b", text: "Differences in data, imaging, or population" },
          { id: "c", text: "Software bugs" },
          { id: "d", text: "It forgot the rules" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! This is known as dataset shift. AI models are sensitive to variations in patient demographics, scanner types, clinical practices, etc., which can differ between locations.",
      },
      {
        id: "m1q3",
        text: "What does AI not have that clinicians do?",
        options: [
          { id: "a", text: "Speed" },
          { id: "b", text: "Context and reasoning" },
          { id: "c", text: "Data access" },
          { id: "d", text: "Reproducibility" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! Clinicians apply medical knowledge, experience, and contextual understanding, whereas AI primarily relies on statistical pattern matching without true reasoning.",
      },
      {
        id: "m1q4",
        text: "Which of the following is not true about AI?",
        options: [
          { id: "a", text: "It needs data to learn" },
          { id: "b", text: "It can explain its decisions like a human" },
          { id: "c", text: "It works best on familiar patterns" },
          { id: "d", text: "It may reflect biases in training data" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! Most current AI models, especially deep learning ones, act as 'black boxes' and cannot easily explain their reasoning in a human-understandable way.",
      },
      {
        id: "m1q5",
        text: "As a clinician, what should you ask about an AI tool?",
        options: [
          { id: "a", text: "Who owns it" },
          { id: "b", text: "How fast it runs" },
          { id: "c", text: "What data it was trained and tested on" },
          { id: "d", text: "Whether it uses blockchain" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! Understanding the training and validation data is crucial for assessing an AI tool's reliability, potential biases, and applicability to your patient population.",
      },
    ],
  },
  "module-2": {
    title: "Module 2 Quiz: How AI Learns",
    questions: [
      {
        id: "m2q1",
        text: "What does 'overfitting' mean?",
        options: [
          { id: "a", text: "The model trains too fast" },
          { id: "b", text: "The model memorised the training data and fails on new data" },
          { id: "c", text: "The model doesn’t have enough layers" },
          { id: "d", text: "The data was over-annotated" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! Overfitting occurs when a model learns the training data too well, including noise and specific details, hindering its ability to generalize to unseen data.",
      },
      {
        id: "m2q2",
        text: "What helps a model generalise well?",
        options: [
          { id: "a", text: "Diverse, external validation" },
          { id: "b", text: "Training on one site only" },
          { id: "c", text: "Using only high-res scans" },
          { id: "d", text: "A larger number of layers" },
        ],
        correctAnswerId: "a",
        feedback: "Correct! Testing the model on diverse data from different sources (external validation) is crucial to ensure it can generalize beyond its training set.",
      },
      {
        id: "m2q3",
        text: "Why might an AI underperform on patients with dark skin?",
        options: [
          { id: "a", text: "The model didn’t see enough dark-skin examples during training" },
          { id: "b", text: "The model overfit the lighting patterns" },
          { id: "c", text: "Skin tone disrupts feature maps" },
          { id: "d", text: "The algorithm was biased against melanin" },
        ],
        correctAnswerId: "a",
        feedback: "Correct! If the training data lacks representation of certain groups (like patients with dark skin), the model may not learn the relevant patterns for that group, leading to poorer performance.",
      },
      {
        id: "m2q4",
        text: "What is NOT a sign of model reliability?",
        options: [
          { id: "a", text: "Performance across hospitals" },
          { id: "b", text: "Labels from expert consensus" },
          { id: "c", text: "No published testing data" },
          { id: "d", text: "External validation set" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! A lack of published testing data is a major red flag. Reliable models should have transparent validation results on external datasets.",
      },
      {
        id: "m2q5",
        text: "What’s the best way to assess an AI tool?",
        options: [
          { id: "a", text: "Check who funded it" },
          { id: "b", text: "Ask if it’s FDA-cleared" },
          { id: "c", text: "Ask how it was trained and tested" },
          { id: "d", text: "See if it uses ‘deep learning’ in the name" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! Understanding the training data, validation methods, and performance on relevant patient populations is the most critical step in assessing an AI tool's trustworthiness.",
      },
    ],
  },
  "module-3": {
    title: "Module 3 Quiz: AI in Clinical Practice",
    questions: [
      {
        id: "m3q1",
        text: "Why did CheXNet’s performance drop at another hospital?",
        options: [
          { id: "a", text: "Poor hardware" },
          { id: "b", text: "Dataset shift / different scanners & labels" },
          { id: "c", text: "Algorithm too shallow" },
          { id: "d", text: "Over-compression" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! CheXNet suffered from dataset shift. Differences in patient populations, imaging equipment, and labeling practices between hospitals can significantly impact performance.",
      },
      {
        id: "m3q2",
        text: "Which metric best reflects overlap quality in segmentation?",
        options: [
          { id: "a", text: "AUROC" },
          { id: "b", text: "Specificity" },
          { id: "c", text: "Dice" },
          { id: "d", text: "Accuracy" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! The Dice coefficient (or Sørensen–Dice index) is commonly used to measure the spatial overlap between the predicted segmentation and the ground truth segmentation.",
      },
      {
        id: "m3q3",
        text: "In the Nature 2017 skin-cancer study, what key bias was later identified?",
        options: [
          { id: "a", text: "Age imbalance" },
          { id: "b", text: "Device resolution" },
          { id: "c", text: "Predominantly light-skin images" },
          { id: "d", text: "Incorrect pathology labels" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! The original dataset lacked diversity, consisting mostly of images from light-skinned individuals. This led to reduced performance when tested on patients with darker skin tones.",
      },
      {
        id: "m3q4",
        text: "External validation should test the model on:",
        options: [
          { id: "a", text: "The same images with added noise" },
          { id: "b", text: "Synthetic data only" },
          { id: "c", text: "Data from new sites/populations" },
          { id: "d", text: "More epochs of training" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! True external validation requires testing the model on completely unseen data from different clinical environments, patient populations, and potentially different equipment to assess its generalizability.",
      },
      {
        id: "m3q5",
        text: "The safest use-case design is:",
        options: [
          { id: "a", text: "AI replaces clinician" },
          { id: "b", text: "Clinician ignores AI advice" },
          { id: "c", text: "Clinician + AI with auditing" },
          { id: "d", text: "AI decides and alerts patients directly" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! Current best practice suggests using AI as an assistive tool for clinicians (Clinician + AI), combined with ongoing monitoring and auditing, rather than full replacement or ignoring its input.",
      },
    ],
  },
  "module-4": {
    title: "Module 4 Quiz: Ethics, Risk, and Regulation",
    questions: [
      {
        id: "m4q1",
        text: "What is one of the WHO’s six ethical principles for AI in health?",
        options: [
          { id: "a", text: "Maximise automation" },
          { id: "b", text: "Promote transparency and explainability" },
          { id: "c", text: "Replace clinicians where possible" },
          { id: "d", text: "Use only in rich countries" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! The WHO emphasizes principles like protecting autonomy, promoting well-being, ensuring transparency/explainability, fostering accountability, ensuring equity, and promoting sustainability.",
      },
      {
        id: "m4q2",
        text: "What did Obermeyer et al. (2019) reveal about bias in AI?",
        options: [
          { id: "a", text: "AI always improves equity" },
          { id: "b", text: "Risk scores underestimated Black patients’ needs" },
          { id: "c", text: "Saliency maps fix bias" },
          { id: "d", text: "All AI tools passed bias audits" },
        ],
        correctAnswerId: "b",
        feedback: "Correct! Their study showed a widely used algorithm significantly underestimated the health needs of Black patients because it used healthcare cost as a proxy for need, reflecting existing disparities.",
      },
      {
        id: "m4q3",
        text: "What is the difference between a transparent and a post hoc explainable model?",
        options: [
          { id: "a", text: "Transparent models are inherently interpretable" },
          { id: "b", text: "Both are black boxes" },
          { id: "c", text: "Post hoc models require no data" },
          { id: "d", text: "There is no difference" },
        ],
        correctAnswerId: "a",
        feedback: "Correct! Transparent models (like linear regression or simple decision trees) have mechanisms that are understandable by themselves. Post hoc methods (like saliency maps) try to explain black-box models after they've made a prediction.",
      },
      {
        id: "m4q4",
        text: "Who is responsible for AI decisions in practice?",
        options: [
          { id: "a", text: "Only the developer" },
          { id: "b", text: "Only the vendor" },
          { id: "c", text: "The clinician remains responsible" },
          { id: "d", text: "No one until a law is passed" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! While legal frameworks are evolving, current practice and ethical guidelines emphasize that the clinician using the AI tool retains ultimate responsibility for the clinical decision.",
      },
      {
        id: "m4q5",
        text: "Why is post-deployment monitoring important?",
        options: [
          { id: "a", text: "To sell new versions of software" },
          { id: "b", text: "It isn’t necessary" },
          { id: "c", text: "Models may degrade as practice or data changes" },
          { id: "d", text: "To make audits easier" },
        ],
        correctAnswerId: "c",
        feedback: "Correct! AI performance can drift over time due to changes in patient populations, clinical workflows, or underlying data distributions (dataset drift). Continuous monitoring is crucial to detect and mitigate performance degradation.",
      },
    ],
  },
};

