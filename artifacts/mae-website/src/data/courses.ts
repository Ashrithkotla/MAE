export interface Course {
  id: string;
  slug: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  features: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "spoken-english",
    title: "Spoken English Program",
    duration: "2 Months",
    tagline: "From Silence to Fluency",
    description: "Our flagship program designed to break your speaking barrier. Build confidence, improve vocabulary, and practice real-world conversations in a structured environment.",
    features: [
      "Daily speaking practice",
      "Vocabulary building",
      "Confidence coaching",
      "Mock conversations",
      "Personalized feedback"
    ]
  },
  {
    id: "2",
    slug: "grammar-mastery",
    title: "Grammar Mastery Course",
    duration: "8 Weeks",
    tagline: "No More Grammar Confusion",
    description: "A definitive guide to English grammar. Learn the rules logically without memorization, so you can construct perfect sentences automatically.",
    features: [
      "Tenses simplified",
      "Sentence construction",
      "Error correction",
      "Written exercises",
      "Doubt clearing sessions"
    ]
  },
  {
    id: "3",
    slug: "professional-english",
    title: "Professional Business English",
    duration: "4 Weeks",
    tagline: "Workplace Communication Excellence",
    description: "Designed for working professionals. Master email writing, presentation skills, and formal workplace communication to accelerate your career.",
    features: [
      "Email etiquette",
      "Presentation skills",
      "Meeting participation",
      "Formal vocabulary",
      "Business communication"
    ]
  },
  {
    id: "4",
    slug: "interview-prep",
    title: "Interview Preparation Bootcamp",
    duration: "3 Weeks",
    tagline: "Crack Any Interview with Confidence",
    description: "An intensive bootcamp focused purely on cracking job interviews. Includes resume building, common HR questions, and extensive mock interviews.",
    features: [
      "Mock interviews",
      "Resume building",
      "HR round preparation",
      "Body language training",
      "Salary negotiation"
    ]
  }
];
