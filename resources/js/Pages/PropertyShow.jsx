import React from "react";
import { usePage } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import ContactAgent from "../Components/ContactAgent";

import PropertyCards from "../Components/PropertyCards";

export default function PropertyShow() {
   const { property } = usePage().props;

const {
  image,
  price,
  per,
  address,
  sqft,
  beds,
  baths,
  tag,
  tagColor,
} = property || {};
  return (
    <>
      <Navbar />
  <section data-nav="light" className="min-h-screen bg-white mt-10">

    <div className="px-4 md:px-10 py-6 pt-24">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          
          <div className="text-sm text-gray-500">
            Home <span className="mx-2">-</span> Properties{" "}
            <span className="mx-2">-</span>{" "}
            <span className="text-gray-800 font-medium">
              Current Property
            </span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="agent"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                John Miller
              </p>
              <p className="text-xs text-gray-500">Agent</p>
            </div>
          </div>
        </div>

        {/* KEEP YOUR OTHER CODE SAME */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> 
           <div className="lg:col-span-2"> 
            <img
                src={image || "/images/house.jpg"}
                className="w-full h-[250px] sm:h-[350px] lg:h-[420px] object-cover rounded-2xl"
                 alt="main"
               />
            </div> {/* Side Images */} 
            <div className="grid grid-cols-2 gap-4"> 
              <img src="/images/interior1.jpg" className="w-full h-[120px] sm:h-[150px] object-cover rounded-xl" /> 
              <img src="/images/interior2.jpg" className="w-full h-[120px] sm:h-[150px] object-cover rounded-xl" /> 
              <img src="/images/interior3.jpg" className="w-full h-[120px] sm:h-[150px] object-cover rounded-xl" /> 
              <img src="/images/interior4.jpg" className="w-full h-[120px] sm:h-[150px] object-cover rounded-xl" /> 
              </div> 
            </div> 
              
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-6 gap-4"> 
                <div className="text-gray-600 text-lg flex flex-wrap gap-4"> 
                    <span>📍 {address}</span>
               <span>📐 {sqft}</span>
               <span>🛏 {beds}</span>
               <span>🛁 {baths}</span>
                 
             
                 </div>
                   {/* TAG */}
                      <div className="flex items-center gap-3">

                        <span className={`text-xs font-medium px-3 py-1 rounded-lg ${tagColor}`}>
                          {tag}
                        </span>

                        <div className="text-2xl font-bold text-gray-900">
                          {price} 
                          <span className="text-base font-normal text-gray-500 ml-1">
                            {per}
                          </span>
                        </div>

                      </div>
                  </div> 
                 <div className="mt-10 mx-24"> 
                  <h2 className="text-4xl font-bold text-gray-900 mb-4"> Description </h2>
                   <p className="text-gray-600 leading-relaxed text-md"> Based in Switzerland is a sleek and 
                    modern three-bed, two-bath getaway spread across 750 square feet of stylish comfort. Completed 
                    in 2025, it boasts contemporary architecture, room interiors, and premium finishes. The open 
                    living-dining layout sets the stage for relaxed hangouts or lively gatherings, while the 
                    generous windows flood the space with natural light, adding to its bright, airy feel. 
                    </p> 

                    <ContactAgent />
          </div>


{/* <PropertyCards /> */}
        
      </div>
      </section>
    </>
  );
}






// import React from "react";
// import { usePage } from "@inertiajs/react";
// import Navbar from "../Components/Navbar";
// import ContactAgent from "../Components/ContactAgent";
// import ViewMore from "../Components/ViewMore";

// export default function PropertyShow() {
//   const { property } = usePage().props;

//   const {
//     image,
//     price,
//     per,
//     address,
//     sqft,
//     beds,
//     baths,
//   } = property || {};

//   return (
//     <>
//       {/* NAVBAR (must be fixed inside Navbar component) */}
//       <Navbar />

//       {/* IMPORTANT: pt-24 prevents navbar overlap */}
//       <section className="min-h-screen bg-white pt-24">

//         <div className="px-4 md:px-10 py-6">

//           {/* TOP BAR */}
//           <div className="flex justify-between items-center mb-6">
//             <div className="text-sm text-gray-500">
//               Home - Properties - Current Property
//             </div>

//             <div className="flex items-center gap-3">
//               <img
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 className="w-10 h-10 rounded-full object-cover"
//                 alt="agent"
//               />
//               <div>
//                 <p className="text-sm font-semibold">John Miller</p>
//                 <p className="text-xs text-gray-500">Agent</p>
//               </div>
//             </div>
//           </div>

//           {/* IMAGES */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//             <div className="lg:col-span-2">
//               <img
//                 src={image || "/images/house.jpg"}
//                 className="w-full h-[250px] sm:h-[350px] lg:h-[420px] object-cover rounded-2xl"
//                 alt="main"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-4">
//               <img src="/images/interior1.jpg" className="rounded-xl" />
//               <img src="/images/interior2.jpg" className="rounded-xl" />
//               <img src="/images/interior3.jpg" className="rounded-xl" />
//               <img src="/images/interior4.jpg" className="rounded-xl" />
//             </div>

//           </div>

//           {/* DETAILS */}
//           <div className="flex flex-col lg:flex-row justify-between mt-6 gap-4">

//             <div className="text-gray-600 text-sm flex flex-wrap gap-4">
//               <span>📍 {address}</span>
//               <span>📐 {sqft}</span>
//               <span>🛏 {beds}</span>
//               <span>🛁 {baths}</span>
//             </div>

//             <div className="text-3xl font-bold text-gray-900">
//               {price}
//               {per && (
//                 <span className="text-base font-normal text-gray-500 ml-1">
//                   {per}
//                 </span>
//               )}
//             </div>

//           </div>

//           {/* DESCRIPTION */}
//           <div className="mt-10 mx-24">
//             <h2 className="text-4xl font-bold mb-4">Description</h2>

//             <p className="text-gray-600">
//               Based in Switzerland is a sleek and modern three-bed, two-bath
//               getaway spread across 750 square feet of stylish comfort.
//             </p>

//             <ContactAgent />
//           </div>

//           <ViewMore />

//         </div>
//       </section>
//     </>
//   );
// }