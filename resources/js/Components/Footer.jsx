import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import house from "../../../public//images/house.jpg"

export default function Footer() {
  return (
    <footer className="relative bg-black text-white pt-32 pb-10 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={house}
          alt="background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">

        {/* Top Card */}
        <div className="bg-linear-to-r from-[#11161b] via-[#1a222a] to-[#11161b] text-gray-800 rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row justify-between gap-10 mb-20">
          
          {/* Left */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#345578] text-white p-2 rounded-full"></div>
             <img
                  src="/images/mainlogo.png"
                  alt="Mack1 Logo"
                  className="h-15 w-auto object-contain"
                />
            </div>

            <p className="text-sm text-white leading-relaxed">
              Quality homes built to suit your lifestyle, offering comfort, space, and flexibility.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-3 text-white">Address</h4>
            <p className="text-sm text-white leading-relaxed">
               1097 lido Drive Howey in the Hills, 34737
            </p>
          </div>

          {/* Contact */}
          

            <div>
              <h4 className="font-semibold mb-3 text-white">Contact</h4>

              <p className="text-sm text-white leading-relaxed">
                Email: mack1@mack1realtygroup.com <br />
                Phone: (352) 346-2105 / (855) 622-5001
              </p>

              <div className="flex items-center gap-4 mt-3">
                <a
                  href="https://www.facebook.com/mack1realtygroup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 transition"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="https://www.instagram.com/mack1_realty/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500 transition"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
        </div>

        {/* Middle Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">

          <div className="md:col-span-2 w-full">
            <h3 className="font-semibold mb-5">
              Subscribe To Our Newsletter
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
              />

              <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-medium">
                Submit
              </button>
            </div>
          </div>

       
          <div>
            <h4 className="font-semibold mb-5">Navigation</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Properties</li>
              <li>Locations</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>

     
          <div>
            <h4 className="font-semibold mb-5">Template</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Style Guide</li>
              <li>Instructions</li>
              <li>License</li>
              <li>Changelog</li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-semibold mb-5">Legal</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>

        </div> */}


        {/* <div className="flex justify-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
            MAC1
          </h1>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Mack1. All Rights Reserved</p>

          <p className="mt-2 md:mt-0">
           Built, Owned, and Powered by Our Team.
          </p>
        </div>

      </div>
    </footer>
  );
}