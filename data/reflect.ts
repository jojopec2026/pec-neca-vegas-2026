export const reflectFormUrl = "https://forms.cloud.microsoft/r/jdf1E4xzzE";

export const reflectIntro =
  "Use this guide while attending sessions, walking the trade show, and talking with other contractors. You don't need to answer every question every day — capture what matters, then bring something useful home to Pacific Electrical Contractors.";

export const reflectPrivacyNote =
  "Submitting the form won't automatically collect your name or email unless you enter them yourself.";

export type ReflectQuestion = {
  number: number;
  title: string;
  description?: string;
};

export const reflectQuestions: ReflectQuestion[] = [
  {
    number: 1,
    title: "Reflection Date",
    description: "Note the date for this entry.",
  },
  {
    number: 2,
    title: "Best Idea",
    description: "What is the best new idea you heard or saw at the convention?",
  },
  {
    number: 3,
    title: "Best Session",
    description:
      "What session gave you the most useful information, and what was the key takeaway?",
  },
  {
    number: 4,
    title: "What Would We Do at PEC?",
    description:
      "What did you learn that we could realistically apply or improve at Pacific Electrical Contractors?",
  },
  {
    number: 5,
    title: "Best Vendor or Technology",
    description:
      "What product, software, technology, or vendor deserves a closer look, and why?",
  },
  {
    number: 6,
    title: "Process Improvement",
    description:
      "Did you see something that could make us more efficient, productive, safe, or profitable?",
  },
  {
    number: 7,
    title: "Industry Conversation",
    description:
      "What did you learn from another contractor, project manager, speaker, or industry professional that stuck with you?",
  },
  {
    number: 8,
    title: "Resource Worth Exploring",
    description:
      "Did you discover a book, podcast, software, AI tool, website, article, or person worth exploring further?",
  },
  {
    number: 9,
    title: "Leadership or Personal Growth",
    description:
      "What did you learn that could make you better personally as a project manager, leader, or teammate?",
  },
  {
    number: 10,
    title: "Quick Win",
    description:
      "What is one thing we could reasonably start doing at PEC within the next 30–90 days?",
  },
  {
    number: 11,
    title: "Biggest Takeaway",
    description:
      "If you could bring only one thing back from Las Vegas and put it into action, what would it be, and why?",
  },
  {
    number: 12,
    title: "Recommended Follow-Up",
    description:
      "What follow-up action would help turn this insight into something useful? Options on the form: Research, Share with the team, Schedule a demo, Run a pilot, Discuss at a PM meeting, Discuss in a CORE session, Discuss with leadership.",
  },
];
