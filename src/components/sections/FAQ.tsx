
import React, { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem = ({ question, answer, isOpen, toggleOpen }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg md:text-xl font-medium text-white pr-16">{question}</h3>
        {isOpen ? (
          <ChevronUp className="text-revup-red flex-shrink-0" />
        ) : (
          <ChevronDown className="text-revup-red flex-shrink-0" />
        )}
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100 pb-5 pr-16" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-revup-gray">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqData = [
    {
      question: "What's included in my registration?",
      answer: "Your registration includes full access to all three days of the event, a comprehensive workbook, lunch and refreshments each day, access to the exclusive networking reception, and a 30-day follow-up coaching call to ensure you're implementing what you've learned."
    },
    {
      question: "Is this seminar only for salespeople?",
      answer: "While the RevUp Sales Summit is specifically designed for internet sales professionals, the principles and techniques taught are applicable across various sales industries. However, all examples and case studies will be from the automotive sector for maximum relevance."
    },
    {
      question: "What if I'm a complete beginner in sales?",
      answer: "This event is designed for sales professionals at all levels. Beginners will build a solid foundation of sales skills, while experienced sellers will refine their techniques and learn advanced strategies. No one is too new or too experienced to benefit."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Absolutely! We offer a 100% satisfaction guarantee. If by the end of the first day you don't feel the event will deliver value, simply return your materials and we'll refund your registration fee in full."
    },
    {
      question: "Can I bring my sales team?",
      answer: "Yes! In fact, we encourage it and offer special group rates. Teams who attend together see the most dramatic results, as they can implement the strategies collectively. Contact us for team pricing options."
    },
    {
      question: "Will there be recording or virtual attendance options?",
      answer: "The RevUp Sales Summit is an immersive in-person experience only. No recordings will be available as the interactive nature of the training is crucial to the transformative results. We recommend securing your seat early as the event always sells out."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="revup-section">
      <div className="revup-container">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about the RevUp Sales Summit"
        />
        
        <div className="max-w-3xl mx-auto bg-revup-dark-gray rounded-lg overflow-hidden shadow-lg">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFAQ(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-revup-gray mb-4">Still have questions?</p>
          <a href="mailto:info@revupsummit.com" className="text-revup-red hover:underline font-medium">Contact us at info@revupsummit.com</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
