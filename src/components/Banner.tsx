// components/StickyBanner.tsx
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const StickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 z-50 w-full bg-[#499478] text-white px-4 py-2">
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left px-6">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <p className="text-sm md:text-base">
            🚀 <strong>Cohort 2 is live!</strong> Join the next wave of builders
            and innovators.
          </p>
          <Link
            href="https://deformity.ai/d/0FQReup5wsCr"
            className="bg-white text-[#499478] font-semibold px-3 py-1.5 rounded hover:bg-gray-100 transition text-sm md:text-base"
          >
            Apply Now
          </Link>
        </div>

        {/* Close button in top-right corner */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-gray-200 transition"
          aria-label="Close banner"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default StickyBanner;
