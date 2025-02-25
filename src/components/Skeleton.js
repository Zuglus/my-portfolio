// src/components/Skeleton.js
import React from 'react';

export default function Skeleton({ className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.875rem] md:rounded-[1.25rem] w-full h-full bg-white/5 animate-pulse-slow ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3624A6]/20 to-transparent animate-[shimmer_2s_infinite]" />
      <div className="grid h-full w-full place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#3624A6"
          className="h-12 w-12 opacity-50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </div>
  );
}