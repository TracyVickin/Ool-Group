import React, { useState } from 'react';
import faq from '../assets/faq.jpg';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-sm md:text-lg font-medium font-heebo text-gray-800 focus:outline-none focus:ring-0 border-none"
      >
        <span>{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: 'What documents do I need to rent a car?',
      answer: 'To rent a car, you will need a valid driver\'s license, a national ID card or passport, and a valid credit card in your name for the security deposit.',
    },
    {
      question: 'Can I buy a car and have it delivered to another state?',
      answer: 'Absolutely! We offer nationwide delivery for all car purchases. Your new vehicle can be safely transported to your location anywhere in Nigeria.',
    },
    {
      question: 'What are the requirements for renting or buying a property?',
      answer: 'For property rentals or purchases, you will need a valid means of identification, proof of income, and references. Our team will guide you through the specific documentation required for each property.',
    },
    {
        question: 'Do you offer long-term car rentals?',
        answer: 'Yes, we provide flexible long-term rental options at competitive rates. Please contact us to discuss your needs, and we will create a customized plan for you.',
    },
    {
        question: 'Are the properties listed for sale and rent verified?',
        answer: 'Yes, every property listed with us undergoes a thorough verification process to ensure its legitimacy and your peace of mind. We only deal with genuine and verified properties.',
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-lato">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col justify-between p-0 focus:outline-none border-none">
            {faqData.map((item, index) => (
              <FaqItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="hidden md:block h-[420px] w-[400px] rounded-lg mx-auto">
            <img 
              src={faq} 
              alt="FAQ" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq; 