// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const RadialProgressBar = ({
//   progress,
//   size = 120,
//   strokeWidth = 8,
//   duration = 0.5,
// }) => {
//   const center = size / 2;
//   const radius = center - strokeWidth / 2;
//   const circumference = 2 * Math.PI * radius;
//   const progressOffset = ((100 - progress) / 100) * circumference;

//   return (
//     <div className="relative inline-flex items-center justify-center">
//       <svg width={size} height={size} className="transform -rotate-90">
//         <circle
//           className="text-gray-200"
//           strokeWidth={strokeWidth}
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={center}
//           cy={center}
//         />
//         <motion.circle
//           className="text-blue-500"
//           strokeWidth={strokeWidth}
//           strokeDasharray={circumference}
//           strokeDashoffset={progressOffset}
//           strokeLinecap="round"
//           stroke="currentColor"
//           fill="transparent"
//           r={radius}
//           cx={center}
//           cy={center}
//           initial={{ strokeDashoffset: circumference }}
//           animate={{ strokeDashoffset: progressOffset }}
//           transition={{ duration: duration, ease: "easeInOut" }}
//         />
//       </svg>
//       <div className="absolute flex flex-col items-center justify-center">
//         <span className="text-2xl font-bold text-gray-700">{progress}%</span>
//       </div>
//     </div>
//   );
// };

// export default RadialProgressBar;
