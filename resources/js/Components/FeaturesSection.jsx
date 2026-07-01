import React from "react";
import icon1 from "../../../public//images/icon1.png"
import icon2 from "../../../public//images/icon2.png"
import icon3 from "../../../public//images/icon3.png"
import icon4 from "../../../public//images/icon4.png"
import icon5 from "../../../public//images/icon5.png"
import icon6 from "../../../public//images/icon6.png"
const features = [
  {
    icon: icon1,
    title: "Find Your Perfect Home Faster",
    description:
      "Explore properties with smart search features that help you narrow down choices and save valuable time.",
  },
  {
    icon: icon2,
    title: "A Wide Range of Properties",
    description:
      "Browse thousands of trusted listings across various cities to discover homes that match your needs and lifestyle.",
  },
  {
    icon: icon3,
    title: "Connect with Trusted Experts",
    description:
      "Partner with skilled real estate professionals who understand the market and prioritize your needs.",
  },
  {
    icon: icon4,
    title: "Quick & Effortless Experience",
    description: "From exploring listings to finalizing your purchase, everything is designed to be smooth, fast, and hassle-free.",
  },
  {
    icon: icon5,
    title: "Fully Transparent Pricing",
    description: "We provide complete pricing information on every listing so you can decide with confidence.",
  },
  {
    icon: icon6,
    title: "Customer Support",
    description:
      "From questions to concerns, our support team is always here to assist you.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-7xl mx-auto ">
       {/* <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
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
              <span className="text-gray-700 text-sm font-medium">
                Properties Listing
              </span>
            </div>
          </div> */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
        Explore the{" "}
          <span className="bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent">Exceptional Services</span> <br />
        We Offer at Mack1
        </h2>

        <p className="text-gray-500 max-w-xl mx-auto mb-12 text-sm sm:text-base text-center">
        Combining innovation, local market knowledge, and personalized support to help you find the right property with ease.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mb-4 object-cover rounded-md "
              />
              <h3 className="font-semibold bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent mb-2 text-2xl">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}