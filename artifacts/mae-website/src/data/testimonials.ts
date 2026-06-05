export interface Testimonial {
  id: number;
  name: string;
  role: string;
  course: string;
  text: string;
  rating: number;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Lakshmi",
    role: "B.Tech Final Year Student, Vizianagaram",
    course: "Spoken English + Grammar Mastery",
    text: "I always had good marks in written English but I could never speak confidently. In group discussions and college presentations, I used to freeze completely. After joining Maharshi Advanced English, everything changed. Within 6 weeks, I was speaking in front of 30 people without any fear. I recently cleared my campus placement interview — and I spoke entirely in English.",
    rating: 5,
    initial: "P",
  },
  {
    id: 2,
    name: "Ravi Teja",
    role: "Fresher, BCom Graduate, Vizianagaram",
    course: "Interview Preparation Program",
    text: "I attended 6 interviews and failed all of them — not because I didn't know the answers, but because I couldn't express myself in English. I joined the Interview Preparation course and it was the best decision of my life. The mock interviews, the feedback sessions, the way they corrected my mistakes — it was all so helpful. I cracked my 7th interview and got placed in a private company.",
    rating: 5,
    initial: "R",
  },
  {
    id: 3,
    name: "Sunitha Rao",
    role: "Bank Employee, Vizianagaram",
    course: "Professional English Program",
    text: "As a bank employee, I had to write emails and attend meetings in English daily. I always felt nervous and used to ask my colleagues for help. I was embarrassed. I joined the Professional English course at Maharshi and within one month, I was writing my own emails and even presenting in branch meetings confidently. My manager noticed the change and appreciated me.",
    rating: 5,
    initial: "S",
  },
  {
    id: 4,
    name: "Madhavi Devi",
    role: "Homemaker, Age 35, Vizianagaram",
    course: "Spoken English Program",
    text: "I always thought English classes are only for young students. But my daughter encouraged me to join. I was hesitant at first — I thought people would laugh at me. But the environment at Maharshi was so warm and welcoming. No judgment at all. Today I can speak English with my children's school teachers, at the hospital, and even on phone calls with companies. I feel like a new person.",
    rating: 5,
    initial: "M",
  },
  {
    id: 5,
    name: "Kiran Kumar",
    role: "Government Job Aspirant, Vizianagaram",
    course: "Spoken English + Interview Preparation",
    text: "I was preparing for government jobs and cleared the written exam but always struggled in the interview round because of English. After two months at Maharshi Advanced English, my confidence completely changed. I practiced mock interviews every week. I finally cleared the interview for a government post. This institute changed my career completely.",
    rating: 5,
    initial: "K",
  },
  {
    id: 6,
    name: "Anil Babu",
    role: "IT Professional, Vizianagaram",
    course: "Professional Business English",
    text: "I came in as a person who couldn't say a single sentence in English without shaking. I left as someone who gave a speech at my company's annual meeting. Maharshi Advanced English did that for me. The structured approach, the patient trainers, and the real-world practice made all the difference.",
    rating: 5,
    initial: "A",
  },
];
