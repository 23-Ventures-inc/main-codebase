"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What is the mission of 23 Ventures?",
    answer:
      "The mission of 23 Ventures is to help more startups enter that 1% success bracket from the 99% that typically fail. We aim to guide promising ideas to achieve their full potential and thrive.",
  },
  {
    question: "What kind of ventures does 23 Ventures focus on?",
    answer:
      "We are focused on tech, web3, gaming, consumer-facing businesses, creator-led content brands, AI, and integrating the latest technologies. We also emphasize organic marketing and community-driven growth strategies.",
  },
  {
    question: "How does 23 Ventures support entrepreneurs?",
    answer:
      "We don't charge a penny for the education and guidance we provide. Our model is results-driven: we charge after you start seeing results. We take 6% equity and 10% of revenue in the first year, 7% in the second year, and 4% in the third year, after your company reaches milestones. We also connect SaaS-based entrepreneurs to the right networks.",
  },
  {
    question: "What's the equity model at 23 Ventures?",
    answer:
      "We take 6% equity in each startup that is part of 23 Ventures and actively supported in its growth journey.",
  },
  {
    question: "How do I apply to become part of a venture?",
    answer:
      "Fill out the form we have for everyone. All applicants go through two screening phases to ensure they are a good fit for the program.",
  },
  {
    question:
      "What sets 23 Ventures apart from other incubators or accelerators?",
    answer:
      "We invest in ventures with the potential to deliver measurable results. We focus on building communities and believe that understanding every entrepreneur's story is as important as building their business. Our process is gamified, making it an exclusive and dynamic experience for both founders and mentors. Only 15% of applicants are selected in the screening phase, and this reduces to 5-7% after completing the course.",
  },
  {
    question: "Can I collaborate with 23 Ventures without founding a company?",
    answer:
      "Yes, you can collaborate with us as a volunteer if you don't yet have an idea. We can help you identify a venture that aligns with your strengths and interests. You can also join as an advisor or workshop facilitator by reaching out to us at business@23ventures.in.",
  },
  {
    question: "What industries does 23 Ventures focus on?",
    answer:
      "We focus on tech, AI, community-driven marketing, content, finance, quantum computing, cloud technologies, AI SaaS, subscription-based models, web3, and consumer-facing, content-led businesses.",
  },
  {
    question: "How much funding do ventures typically receive?",
    answer:
      "Only 5% of the applicants are invited to pitch on Pitch Day. If the idea garners good user interest and investment potential, you can secure funding ranging from $50k to $500k in seed or angel rounds. This funding is released in phases based on milestones.",
  },
  {
    question: "What is the long-term vision for 23 Ventures?",
    answer:
      "Our long-term vision is to evolve into a venture capital firm that actively participates in idea-based or early-stage startups, shaping the careers of founders who lack resources. We aim to become a global brand, focusing on the advancements shaping the future, while expanding our impact worldwide.",
  },
  {
    question:
      "Are there any additional costs for students or entrepreneurs involved with 23 Ventures?",
    answer:
      "The only minimal costs at the early stage are for essential services like domain registration and other startup necessities. These costs will not exceed $100 per month, ensuring that the financial commitment remains manageable while setting up your business for success.",
  },
];

export default function FaqSection() {
  return (
    <section className="w-full h-auto md:py-14">
      <div className="max-w-[80%] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <AnimatePresence>
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div
      className="rounded-lg overflow-hidden"
      initial={false}
      transition={{ duration: 0.3 }}
      onClick={() => {
        setOpen((perv) => !perv);
      }}
    >
      <button className="flex justify-between items-center w-full p-4 text-left focus:outline-none">
        <span className="font-semibold text-lg">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="p-4 text-gray-300">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
