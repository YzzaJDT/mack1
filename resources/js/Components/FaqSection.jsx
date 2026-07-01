import React, { useState } from "react";
import { FiChevronDown, FiArrowRight } from "react-icons/fi";

import { Link } from "@inertiajs/react";

const faqs = [
  {
    question: "What Is Mack1?",
    answer:
      "Mack1 is a modern real estate platform designed to help you easily find, compare, and connect with the right property.",
  },
  {
    question: "Does Mack1 offer both rental and for-sale listings?",
    answer:
      "Yes, Mack1 lets you easily search for both rental properties and homes for sale using smart filters.",
  },
  {
    question: "How frequently are property listings updated?",
    answer:
      "Listings are regularly refreshed to ensure you always see accurate and current property availability.",
  },
  // {
  //   question: "Do I Need An Account To Use Nextora?",
  //   answer:
  //     "You can browse listings without an account, but creating one allows you to save properties and contact agents.",
  // },
  {
    question: "Can I Contact An Agent Through Mack1?",
    answer:
      "Yes, you can directly contact through the contacts section.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-24 px-6" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          {/* Tag */}
          {/* <div className="inline-flex items-center gap-2 bg-gray-200 text-sm px-4 py-1 rounded-fullww">
            <div className="w-6 h-6 flex items-center justify-center bg-orange-400 text-white rounded-full">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0C15.522 0 20 4.47803 20 10C20 15.522 15.522 20 10 20C4.47803 20 0 15.522 0 10C0 4.47803 4.47803 0 10 0ZM14.7532 11.3298H14.7558V15.8304C14.7558 16.0074 14.6114 16.1518 14.4344 16.1518H11.5271C11.3501 16.1518 11.2057 16.0074 11.2057 15.8304V13.3833C11.2057 13.2063 11.0613 13.0619 10.8843 13.0619H9.11606C8.93906 13.0619 8.79465 13.2063 8.79465 13.3833V15.8304C8.79465 16.0074 8.65032 16.1518 8.47331 16.1518H5.56598C5.38898 16.1518 5.24457 16.0074 5.24457 15.8304V11.3298H5.24433L7.61512 8.91874L9.75677 6.74087C9.81953 6.67709 9.89654 6.64472 9.98606 6.64472C10.0754 6.64472 10.1524 6.67709 10.2152 6.74087L12.3569 8.91874L14.7532 11.3298ZM10.4598 4.04039L13.7787 7.41559L16.4806 10.1634C16.666 10.352 16.7172 10.6186 16.615 10.8626C16.5126 11.1066 16.2867 11.2569 16.022 11.2569H16.006C15.827 11.2569 15.673 11.1924 15.5476 11.0647L12.8587 8.33016L10.4392 5.86953C10.3137 5.74197 10.1598 5.67732 9.98079 5.67732C9.80181 5.67732 9.64787 5.74197 9.52236 5.86953L7.10268 8.33016C6.20654 9.24165 5.31008 10.1533 4.41394 11.0647C4.40512 11.0738 4.39638 11.0816 4.3878 11.0882C4.27591 11.1869 4.12906 11.2467 3.96819 11.2467C3.61764 11.2467 3.33323 10.9624 3.33323 10.6117C3.33323 10.418 3.42 10.2446 3.55685 10.1281L6.22402 7.41559L9.54291 4.04039C9.66843 3.91276 9.82236 3.84819 10.0014 3.84819C10.1803 3.84819 10.3343 3.91283 10.4598 4.04039Z"
                  />
                </svg>
              </div>
            FAQs
          </div> */}

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Frequently <span className="bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent">Asked</span>
            <br />
            Questions
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-4">
           We’re here to help answer your real estate questions and concerns.
          </p>

          {/* Contact Box */}
          <div className="mt-12">
            <h4 className="font-semibold text-lg">
              Still Have A Question?
            </h4>

            <p className="text-gray-500 mt-2">
              dont worry we’re free for consultation, just click button below.
            </p>
            
          <Link
            href="/Location"
            className="inline-flex items-center mt-5 gap-2 bg-linear-to-r from-[#345578] to-[#284769] text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg hover:scale-105 transition w-fit"
          >
            View All Locations
            <span className="text-base">→</span>
          </Link>
       
          </div>

        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >

              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                {faq.question}
                <FiChevronDown
                  className={`transition-transform ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <p className="text-gray-500 mt-3 pr-6">
                  {faq.answer}
                </p>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}