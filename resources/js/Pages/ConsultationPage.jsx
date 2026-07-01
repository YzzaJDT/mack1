// import React from "react";

// export default function ConsultationPage() {
//   const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
//   const dates = [
//     "","","","","",1,2,
//     3,4,5,6,7,8,9,
//     10,11,12,13,14,15,16,
//     17,18,19,20,21,22,23,
//     24,25,26,27,28,29,30,
//     31
//   ];

//   const activeDates = [8,11,12,13,14,15,16];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

//         {/* LEFT SIDE */}
//       <div className="p-10 border-r">
//   {/* <h4 className="text-gray-500 font-semibold tracking-wide">
//     Hannah Strong
//   </h4> */}

//   <h1 className="text-3xl font-extrabold text-gray-900 mt-2 leading-snug">
//     Free Initial Consultation Program
//   </h1>

//   <div className="flex items-center gap-2 mt-6 text-gray-700 font-medium">
//     <span>🕒</span>
//     <span className="text-sm font-semibold">15 min</span>
//   </div>

//   <div className="flex items-start gap-2 mt-4 text-gray-700">
//     <span>📹</span>
//     <p className="text-sm font-medium">
//       Web conferencing details provided upon confirmation.
//     </p>
//   </div>

//  <p className="text-gray-700 mt-6 leading-relaxed text-sm">
//   <span className="font-semibold">
//     Your consultation with our team
//   </span>{" "}
//   is designed to understand your property goals and guide you through the{" "}
//   <span className="font-semibold">
//     buying, selling, or investment process
//   </span>{" "}
//   with confidence. We’ll help you find the right opportunities and ensure you{" "}
//   <span className="font-semibold">
//     make smart and informed real estate decisions.
//   </span>
//   </p>
// </div>

//         {/* RIGHT SIDE */}
//         <div className="p-10 relative">

//           {/* Ribbon */}
//           {/* <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs px-4 py-2 rotate-45 translate-x-10 -translate-y-2 shadow">
//             Powered by Calendly
//           </div> */}

//           <h2 className="text-xl font-semibold text-gray-800 mb-6">
//             Select a Date & Time
//           </h2>

//           {/* Month */}
//           <div className="flex items-center justify-between mb-4 text-gray-700">
//             <button>‹</button>
//             <span className="font-medium">May 2026</span>
//             <button>›</button>
//           </div>

//           {/* Days */}
//           <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
//             {days.map((day) => (
//               <div key={day} className="text-center">{day}</div>
//             ))}
//           </div>

//           {/* Dates */}
//           <div className="grid grid-cols-7 gap-y-3 text-center">
//             {dates.map((date, i) => (
//               <div key={i} className="h-10 flex items-center justify-center">
//                 {date !== "" && (
//                   <div
//                     className={`w-10 h-10 flex items-center justify-center rounded-full text-sm cursor-pointer
//                       ${activeDates.includes(date)
//                         ? "bg-blue-100 text-blue-600 font-semibold"
//                         : "text-gray-700"}`}
//                   >
//                     {date}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Timezone */}
//           <div className="mt-8 text-sm text-gray-600">
//             <p className="font-medium">Time zone</p>
//             <div className="flex items-center gap-2 mt-2">
//               <span>🌐</span>
//               <span>Philippine Time (9:58pm)</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ConsultationPage() {
    const [slots, setSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    useEffect(() => {
        axios
            .get("/api/calendly/event-types")
            .then((res) => {
                setSlots(res.data.data.collection || []);
            })
            .catch((err) => console.error(err));
    }, []);

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatKey = (date) =>
        `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

    const availableDates = new Set(
        slots.map((slot) => {
            const d = new Date(slot.start_time);
            return formatKey(d);
        })
    );

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const dates = [
        ...Array(firstDay).fill(""),
        ...Array.from({ length: totalDays }, (_, i) => i + 1),
    ];

    const selectedSlots = slots.filter((slot) => {
        const d = new Date(slot.start_time);

        return (
            d.getFullYear() === year &&
            d.getMonth() === month &&
            d.getDate() === selectedDate
        );
    });

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

                {/* LEFT */}
                <div className="p-10 border-r">
                    <h1 className="text-3xl font-bold">
                        Free Initial Consultation Program
                    </h1>
                </div>

                {/* RIGHT */}
                <div className="p-10">

                    {/* CALENDAR */}
                    <div className="grid grid-cols-7 gap-2">
                        {dates.map((date, index) => {
                            if (!date) return <div key={index}></div>;

                            const cellDate = new Date(year, month, date);
                            cellDate.setHours(0, 0, 0, 0);

                            const isPast = cellDate < today;
                            const key = formatKey(cellDate);

                            const available =
                                availableDates.has(key) && !isPast;

                            return (
                                <button
                                    key={index}
                                    disabled={!available}
                                    onClick={() =>
                                        available && setSelectedDate(date)
                                    }
                                    className={`h-10 w-10 rounded-full mx-auto transition
                                        ${
                                            isPast
                                                ? "bg-gray-50 text-gray-300"
                                                : selectedDate === date
                                                ? "bg-blue-600 text-white"
                                                : available
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-gray-100 text-gray-400"
                                        }`}
                                >
                                    {date}
                                </button>
                            );
                        })}
                    </div>

                    {/* TIME SLOTS */}
                    {selectedDate && (
                        <div className="mt-8">
                            <h3 className="font-semibold mb-4">
                                Available Times
                            </h3>

                            <div className="grid grid-cols-2 gap-3">
                                {selectedSlots.map((slot, index) => {
                                    const date = new Date(slot.start_time);

                                    const time =
                                        date.toLocaleTimeString("en-PH", {
                                            hour: "numeric",
                                            minute: "2-digit",
                                            hour12: true,
                                        });

                                    const isAM = date.getHours() < 12;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                axios
                                                    .post(
                                                        "/api/calendly/book-slot",
                                                        {
                                                            start_time:
                                                                slot.start_time,
                                                        }
                                                    )
                                                    .then(() => {
                                                        alert(
                                                            "Reservation successful!"
                                                        );

                                                        setSlots((prev) =>
                                                            prev.filter(
                                                                (s) =>
                                                                    s.start_time !==
                                                                    slot.start_time
                                                            )
                                                        );

                                                        setSelectedDate(null);
                                                    })
                                                    .catch((err) => {
                                                        if (
                                                            err.response
                                                                ?.status === 409
                                                        ) {
                                                            alert(
                                                                "Slot already taken"
                                                            );
                                                        } else {
                                                            alert(
                                                                "Failed to reserve slot"
                                                            );
                                                        }
                                                    });
                                            }}
                                            className={`border rounded-lg py-3 transition
                                                ${
                                                    isAM
                                                        ? "border-green-300"
                                                        : "border-purple-300"
                                                }
                                                hover:bg-blue-600 hover:text-white`}
                                        >
                                            {time}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}