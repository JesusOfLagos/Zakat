'use client';


import { ArrowDownIcon } from "lucide-react";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: "How do I calculate the Zakat payable on my assets through ZakatChain?",
    answer: "ZakatChain provides a built-in calculator for determining Zakat based on your assets and liabilities.",
  },
  {
    question: "How can I track Zakat payments and donations collected and disbursed by ZakatChain?",
    answer: "You can view detailed transaction history in the 'Payments' section of your dashboard.",
  },
  {
    question: "Can I get a refund when I make an error in donations?",
    answer: "Refund policies depend on the specific circumstances. Please contact support for assistance.",
  },
  {
    question: "How can charity organizations register and collaborate with ZakatChain to receive disbursed funds for their projects?",
    answer: "Organizations can register through the platform by submitting a verification form.",
  },
  {
    question: "Can I choose specific charity causes to donate to on ZakatChain?",
    answer: "Yes, ZakatChain allows users to select specific causes to support.",
  },
  {
    question: "Can I save or lock assets on ZakatChain?",
    answer: "The platform allows asset saving and locking for planned Zakat contributions.",
  },
  {
    question: "How will the platform handle fluctuations in cryptocurrency values when receiving donations?",
    answer: "ZakatChain converts cryptocurrency donations into stablecoins to handle volatility.",
  },
  {
    question: "Are there any minimum or maximum limits for cryptocurrency donations on the platform?",
    answer: "Yes, minimum and maximum limits are set depending on the type of cryptocurrency.",
  },
];

export const FAQS: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      <h1 className="text-4xl text-center md:text-5xl font-bold mb-5">
        {/* Meet our */}
        <span className="text-orange-400">Frequently Asked Questions</span>
      </h1>
      <div className="min-h-screen bg-[#17163E] flex items-center justify-center p-4">
        <div className="w-full max-w-3xl space-y-4 mb-8">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full bg-white flex justify-between items-center p-4 text-left text-[#17163E] font-medium focus:outline-none"
              >
                {faq.question}
                {/* <span className="ml-4 text-gray-500">
                {activeIndex === index ? "▲" : "▼"}
              </span> */}
                <ArrowDownIcon className={`ml-4 w-4 h-4 ${activeIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

