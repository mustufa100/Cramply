"use client";
import React from "react";
import Image from "next/image";

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="bg-gray-100 py-8 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 mb-6 lg:mb-0 px-3 sm:px-6">
          <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-3 leading-snug">
            Community Service <br />
            <span className="text-indigo-500">Is Calling, No Need For Stalling.</span>
          </h1>
          <p className="text-gray-600 mb-4 text-xs sm:text-base">
            Want more fun camping? Join our community to find friends and experience unforgettable adventures.
          </p>
          <button className="bg-black text-white py-2 px-4 sm:px-6 rounded-full text-xs sm:text-base">
            Join Community
          </button>
        </div>

        {/* Image Section */}
        <div className="relative lg:w-1/2 px-4 sm:px-8 flex justify-center">
          {/* Main Avatar */}
          <div className="w-20 sm:w-28 h-20 sm:h-28 bg-blue-100 rounded-full flex items-center justify-center relative z-10 shadow-md">
            <Image
              src="/images/main-avatar.webp"
              alt="Main Avatar"
              width={64}
              height={64}
              className="w-16 sm:w-20 h-16 sm:h-20"
            />
            <div className="absolute -top-4 left-12 bg-white px-2 py-1 rounded-full shadow-md text-xs sm:text-sm">
              Welcome!!
            </div>
          </div>

          {/* Avatar 1 */}
          <div className="absolute left-4 top-16 w-10 sm:w-14 h-10 sm:h-14 bg-orange-200 rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/images/avatar-1.png"
              alt="Avatar 1"
              width={32}
              height={32}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 2 */}
          <div className="absolute right-4 top-16 w-10 sm:w-14 h-10 sm:h-14 bg-pink-200 rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/images/avatar-2.webp"
              alt="Avatar 2"
              width={32}
              height={32}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 3 */}
          <div className="absolute bottom-8 left-4 w-10 sm:w-14 h-10 sm:h-14 bg-green-200 rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/images/avatar-3.png"
              alt="Avatar 3"
              width={32}
              height={32}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Avatar 4 */}
          <div className="absolute bottom-8 right-4 w-10 sm:w-14 h-10 sm:h-14 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
            <Image
              src="/images/avatar-1.png"
              alt="Avatar 4"
              width={32}
              height={32}
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
          </div>

          {/* Social Media Icons */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-md">
            <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} />
          </div>
          <div className="absolute bottom-2 left-1/4 transform -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-md">
            <Image src="/images/instagram-icon.png" alt="Instagram" width={24} height={24} />
          </div>
          <div className="absolute bottom-2 right-1/4 transform -translate-x-1/2 w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center shadow-md">
            <Image src="/images/tiktok-icon.png" alt="TikTok" width={24} height={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
