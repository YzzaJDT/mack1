import React from "react";

export default function ContactAgent() {
  return (
    <section className="bg-white py-16">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-8">
        Tell us how to get in touch with you
      </h2>

      {/* Form Container */}
      <div className="bg-gray-100 rounded-2xl p-6 md:p-8 max-w-full">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Contact Number
            </label>
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-600 mb-2">
              Phone No
            </label>
            <input
              type="text"
              placeholder="Phone No"
              className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Full Address - FULL WIDTH */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-2">
              Full Address
            </label>
            <input
              type="text"
              placeholder="Full Address"
              className="w-full bg-white rounded-lg px-4 py-3 text-sm outline-none border border-gray-200 focus:ring-2 focus:ring-orange-400"
            />
          </div>

        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
             <button className="hidden md:block px-6 py-3 rounded-xl font-semibold text-white bg-linear-to-r from-[#345578] to-[#284769] shadow-lg hover:scale-105 transition-transform duration-300" >
                      Submit
                    </button>
          </div>

      </div>
    </section>
  );
}