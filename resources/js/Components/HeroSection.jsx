// resources/js/Components/HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-[#f6f6f6] py-20" data-aos="fade-up" data-aos-delay="100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Top Badge */}
        {/* <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-4">
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
          Properties Listing
        </div> */}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
          Shaping the{" "}
          <span className="bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent">Future</span> of Real
          <br />
          Estate & Architecture
        </h1>

        {/* Subtitle */}
        <p className="bg-linear-to-r from-[#345578] to-[#284769] bg-clip-text text-transparent mt-4 max-w-2xl mx-auto text-sm md:text-base">
         Delivering modern, high-quality spaces with innovation, transparency, and a focus on our customers.
        </p>

        {/* Image */}
        <div className="mt-10">
          <img
            src="/images/bg4.jpg"
            alt="house"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          
    
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-md transition">
            <span className="text-orange-500 font-semibold text-sm">01</span>
            <h3 className="font-semibold mt-2 text-gray-900">
              Premium Architecture & Real Estate Expertise
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              We create functional, beautiful spaces using expert real estate insights.
            </p>
          </div>

         
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-md transition">
            <span className="text-orange-500 font-semibold text-sm">02</span>
            <h3 className="font-semibold mt-2 text-gray-900">
              Crafting Every Space Around Your Vision
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              We focus on your vision, offering clear guidance and personalized solutions.
            </p>
          </div>

       
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-left hover:shadow-md transition">
            <span className="text-orange-500 font-semibold text-sm">03</span>
            <h3 className="font-semibold mt-2 text-gray-900">
              Advanced Technology & 3D Visualization
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              We use advanced digital tools to visualize ideas clearly before execution.
            </p>
          </div>

        </div> */}

      </div>
    </section>
  );
}