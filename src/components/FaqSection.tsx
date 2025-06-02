"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full p-5 flex flex-col items-center ">
      <div className="container">
        <h1 className="font-bold text-white mb-5 text-4xl md:text-5xl lg:text-6xl text-center">
          Frequently Asked Questions
        </h1>
        <p className="font-base text-lg md:text-xl mb-10 text-gray-400 text-center mt-4">
          Answers to the most common questions about 23 Ventures.
        </p>

        <div className="accordion w-full" id="faqAccordion">
          {faqData.map(({ question, answer }, i) => (
            <div
              key={i}
              className="accordion-item p-2"
              onClick={() => toggle(i)} // 🔁 Entire row is clickable
              style={{
                border: "1px solid  #424242",
                borderRadius: 10,
                marginBottom: 12,
                overflow: "hidden",
                boxShadow:
                  openIndex === i ? "0 2px 8px rgba(0,0,0,0.1)" : "none",
                cursor: "pointer",
              }}
            >
              <div className="flex flex-row items-center justify-between pr-5">
                <div
                  className="flex items-center gap-3 pl-5 py-4"
                  style={{ color: "#fff", fontWeight: 600, fontSize: 18 }}
                >
                  <FaQuestionCircle size={24} color="#6c757d" />
                  <span>{question}</span>
                </div>

                <FaChevronDown
                  className={`accordion-button ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  size={16}
                  style={{
                    transition: "transform 0.3s ease",
                    color: "#6c757d",
                  }}
                />
              </div>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      className="accordion-body"
                      style={{
                        padding: "1rem 1.25rem",
                        color: "#fff",
                        fontSize: 16,
                        lineHeight: 1.5,
                      }}
                    >
                      {answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
