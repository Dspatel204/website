import React, { useState } from "react";
const faqData = [
  {
    question: "What are my payment options?",
    answer:
      "We accept all major credit cards: Visa, MasterCard, Discover, American Express cards, as well as PayPal.",
  },
  {
    question: "My payment is not processing, what is the reason?",
    answer:
      "Please ensure your billing details are correct and contact your bank if the issue persists.",
  },
  {
    question: "How long will it take to receive my order?",
    answer:
      "Your order will be processed and shipped within 3-5 business days, depending on your location.",
  },
  {
    question: "How are our parcels shipped?",
    answer:
      "We use trusted couriers such as FedEx and UPS for secure delivery.",
  },
  {
    question: "Do you offer repairs if something happens to my jewelry?",
    answer:
      "Yes, we provide repair services. Please contact our support team for assistance.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#E7B89526" width="20px" height="20px" viewBox="0 0 20 20"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z"/></svg>
              {item.question}
              </div>
              <span className="toggle-icon">
                {activeIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#E7B89526"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="#786158"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.16992 14.8299L14.8299 9.16992"
                      stroke="#786158"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.8299 14.8299L9.16992 9.16992"
                      stroke="#786158"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#E7B89526"
                  >
                    <path
                      d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
                      stroke="#858585"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
