// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import CountUp from "react-countup";

// // Define the Stat interface
// interface Stat {
//   value: string;
//   label: string;
// }

// const Features: React.FC = () => {
//   const [startCounting, setStartCounting] = useState(false);
//   const featuresRef = useRef<HTMLElement | null>(null);

//   // Define the stats array
//   const stats: Stat[] = [
//     { value: "10", label: "Years OF Experience" },
//     { value: "1000", label: "Camping Destination" },
//     { value: "8000", label: "Happy Customer" },
//     { value: "4000", label: "Overall Rating" },
//   ];

//   useEffect(() => {
//     if (typeof window !== 'undefined') { // Check if it's in the browser
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setStartCounting(true);
//             }
//           });
//         },
//         { threshold: 0.5 }
//       );

//       if (featuresRef.current) {
//         observer.observe(featuresRef.current);
//       }

//       return () => {
//         if (featuresRef.current) {
//           observer.unobserve(featuresRef.current);
//         }
//       };
//     }
//   }, []);

//   return (
//     <section
//       id="about"
//       ref={featuresRef}
//       className="relative z-10 mt-20 md:mt-24 bg-gray-100"
//     >
//       {/* Statistics Section */}
//       <div className="bg-blue-500 py-12">
//         <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {stats.map((stat: Stat, index: number) => (
//             <div key={index} className="text-white">
//               <h3 className="text-4xl md:text-5xl font-extrabold">
//                 {startCounting ? (
//                   <CountUp end={parseFloat(stat.value)} duration={2.5} />
//                 ) : (
//                   "0"
//                 )}
//               </h3>
//               <p className="text-sm md:text-base mt-2">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;



"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface Stat {
  value: string;
  label: string;
}

const Features: React.FC = () => {
  const [startCounting, setStartCounting] = useState(false);
  const featuresRef = useRef<HTMLElement | null>(null);

  const stats: Stat[] = [
    { value: "10", label: "Years OF Experience" },
    { value: "1000", label: "Camping Destination" },
    { value: "8000", label: "Happy Customer" },
    { value: "4000", label: "Overall Rating" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setStartCounting(true);
            }
          });
        },
        { threshold: 0.5 }
      );

      const currentRef = featuresRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, []);

  return (
    <section
      id="about"
      ref={featuresRef}
      className="relative z-10 mt-20 md:mt-24 bg-gray-100"
    >
      <div className="bg-blue-500 py-12">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat: Stat, index: number) => (
            <div key={index} className="text-white">
              <h3 className="text-4xl md:text-5xl font-extrabold">
                {startCounting ? (
                  <CountUp end={parseFloat(stat.value)} duration={2.5} />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-sm md:text-base mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
