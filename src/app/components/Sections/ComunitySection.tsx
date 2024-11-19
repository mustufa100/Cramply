// import React from "react";

// const CommunitySection: React.FC = () => {
//   return (
//     <section id="community" className="bg-gray-100 py-16 px-6">
//       <div className="container mx-auto flex flex-col lg:flex-row items-center">
//         {/* Text Section */}
//         <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0 px-4 sm:px-8">
//           <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
//             Community Service <br />
//             <span className="text-indigo-500">Is Calling, No Need For Stalling.</span>
//           </h1>
//           <p className="text-gray-600 mb-6 text-sm sm:text-base">
//             Want more fun camping? Join our community to find friends and experience unforgettable adventures.
//           </p>
//           <button className="bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base">
//             Join Community
//           </button>
//         </div>

//         {/* Graphic Section */}
//         <div className="relative lg:w-1/2 px-4 sm:px-8 flex justify-center">
//           {/* Main Avatar */}
//           <div className="w-28 sm:w-32 h-28 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center relative z-10 shadow-md animate-main-avatar">
//             <img
//               src="/images/main-avatar.webp"
//               alt="Main Avatar"
//               className="w-20 sm:w-24 h-20 sm:h-24"
//             />
//             <div className="absolute -top-6 left-20 bg-white px-3 py-1 rounded-full shadow-md text-xs sm:text-sm">
//               Welcome!!
//             </div>
//           </div>

//           {/* Small Avatars with Bouncing Animation */}
//           <div className="absolute left-0 top-16 w-12 sm:w-14 h-12 sm:h-14 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-100">
//             <img src="/images/avatar-1.png" alt="Avatar 1" className="w-8 sm:w-10 h-8 sm:h-10" />
//           </div>

//           <div className="absolute right-0 top-16 w-12 sm:w-14 h-12 sm:h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-200">
//             <img src="/images/avatar-2.webp" alt="Avatar 2" className="w-8 sm:w-10 h-8 sm:h-10" />
//           </div>

//           <div className="absolute bottom-0 left-0 w-12 sm:w-14 h-12 sm:h-14 bg-green-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-300">
//             <img src="/images/avatar-3.png" alt="Avatar 3" className="w-8 sm:w-10 h-8 sm:h-10" />
//           </div>

//           <div className="absolute bottom-0 right-0 w-12 sm:w-14 h-12 sm:h-14 bg-yellow-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-400">
//             <img src="/images/avatar-1.png" alt="Avatar 4" className="w-8 sm:w-10 h-8 sm:h-10" />
//           </div>

//           {/* Social Media Icons */}
//           <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce">
//             <img src="/images/twitter-icon.png" alt="Twitter" />
//           </div>
//           <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce delay-200">
//             <img src="/images/instagram-icon.png" alt="Instagram" />
//           </div>
//           <div className="absolute bottom-4 right-1/4 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce delay-400">
//             <img src="/images/tiktok-icon.png" alt="TikTok" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;


import React from "react";
import Image from "next/image";

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0 px-4 sm:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
            Community Service <br />
            <span className="text-indigo-500">Is Calling, No Need For Stalling.</span>
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Want more fun camping? Join our community to find friends and experience unforgettable adventures.
          </p>
          <button className="bg-black text-white py-2 px-6 rounded-full text-sm sm:text-base">
            Join Community
          </button>
        </div>

        <div className="relative lg:w-1/2 px-4 sm:px-8 flex justify-center">
          <div className="w-28 sm:w-32 h-28 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center relative z-10 shadow-md animate-main-avatar">
            <Image
              src="/images/main-avatar.webp"
              alt="Main Avatar"
              width={96}
              height={96}
              className="w-20 sm:w-24 h-20 sm:h-24"
            />
            <div className="absolute -top-6 left-20 bg-white px-3 py-1 rounded-full shadow-md text-xs sm:text-sm">
              Welcome!!
            </div>
          </div>

          {/* Avatar 1 */}
          <div className="absolute left-0 top-16 w-12 sm:w-14 h-12 sm:h-14 bg-orange-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-100">
            <Image
              src="/images/avatar-1.png"
              alt="Avatar 1"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 2 */}
          <div className="absolute right-0 top-16 w-12 sm:w-14 h-12 sm:h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-200">
            <Image
              src="/images/avatar-2.webp"
              alt="Avatar 2"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 3 */}
          <div className="absolute bottom-0 left-0 w-12 sm:w-14 h-12 sm:h-14 bg-green-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-300">
            <Image
              src="/images/avatar-3.png"
              alt="Avatar 3"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 4 */}
          <div className="absolute bottom-0 right-0 w-12 sm:w-14 h-12 sm:h-14 bg-yellow-200 rounded-full flex items-center justify-center shadow-md animate-bounce delay-400">
            <Image
              src="/images/avatar-1.png"
              alt="Avatar 4"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Social Media Icons */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce">
            <Image src="/images/twitter-icon.png" alt="Twitter" width={40} height={40} />
          </div>
          <div className="absolute bottom-4 left-1/4 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce delay-200">
            <Image src="/images/instagram-icon.png" alt="Instagram" width={40} height={40} />
          </div>
          <div className="absolute bottom-4 right-1/4 transform -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center shadow-md animate-bounce delay-400">
            <Image src="/images/tiktok-icon.png" alt="TikTok" width={40} height={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
