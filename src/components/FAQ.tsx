import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What services does BCX offer?",
      answer: "BCX provides a wide range of IT services, including PC support, PC backups, reinstalling PCs, software installations, security updates, and data recovery. We handle all technical matters related to your computer."
    },
    {
      question: "How can I contact BCX?",
      answer: "You can contact us by email at huslert292@gmail.com. We'll respond to your inquiry as soon as possible."
    },
    {
      question: "How long does it take for my PC to be ready after a reinstallation?",
      answer: "The time it takes depends on the type of service and your PC's hardware. Typically, reinstalling a PC takes between 1 and 3 hours."
    },
    {
      question: "Does BCX offer remote support?",
      answer: "Yes, we offer remote support for many IT issues to help you quickly and efficiently."
    },
    {
      question: "How can I back up my data regularly?",
      answer: "We recommend setting up regular backups for your data. BCX can help you set up a reliable backup system that automatically backs up your important data."
    },
    {
      question: "Is my data safe with BCX?",
      answer: "Yes, we take data protection seriously. We use secure methods and encryption to ensure your data is protected."
    },
    {
      question: "What payment methods does BCX accept?",
      answer: "We accept bank transfers. Other payment methods can be arranged upon request."
    },
    {
      question: "Is there a warranty on the work performed by BCX?",
      answer: "Yes, we offer a warranty on all work performed. If any issues arise within a certain period after the service, we will address them."
    }
  ];

  return (
    <div id="faq" className="bg-navy-800 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-navy-900/50 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;