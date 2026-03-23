import { QuizQuestion } from "@/components/Quiz";

export interface QuizModuleData {
  title: string;
  questions: QuizQuestion[];
}

export type QuizData = Record<string, QuizModuleData>;
