"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-16 py-4">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex items-center gap-3">
          <Button>Get Started</Button>
          <Menu className="w-6 h-6 cursor-pointer" />
        </div>
      </nav>

      {/* Main Section */}
      <div className="flex flex-1 items-center justify-between px-16">
        {/* Left Side Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold leading-tight">
            Build Your Future with{" "}
            <span className="inline-block min-w-[220px] align-baseline text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              <ReactTyped
                strings={["Style", "Confidence", "Innovation"]}
                typeSpeed={120}
                backSpeed={50}
                backDelay={2000}
                loop
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Empower your vision with modern design and scalable technology.
          </p>
        </div>

        {/* Right Side (Empty for now) */}
        <div className="w-1/2"></div>
      </div>

      {/* Cursor Style */}
      <style jsx global>{`
        .typed-cursor {
          font-weight: 300 !important;
          animation: blink 1.1s infinite;
          opacity: 0.7;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 0.7;
          }
          25%,
          75% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}
