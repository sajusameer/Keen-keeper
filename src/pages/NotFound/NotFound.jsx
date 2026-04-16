import React from 'react';
import { FaHome } from 'react-icons/fa';

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        
        {/* Big 404 */}
        <h1 className="text-8xl font-extrabold text-[#244D3F]">404</h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-xl shadow"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}