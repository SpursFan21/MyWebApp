// src/app/transcript/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function TranscriptPage() {
  return (
    <div className="min-h-screen bg-black/70 flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 py-10 text-white max-w-7xl mx-auto">
      {/* Toast container */}
      <Toaster position="bottom-center" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black/80 rounded-xl p-6 sm:p-10 w-full max-w-6xl shadow-lg space-y-6"
      >
        <h1 className="text-4xl font-bold text-center mb-4">Academic Transcript</h1>

        {/* Embedded PDF Viewer */}
        <div className="w-full h-[80vh] border-2 border-yellow-500 rounded-lg overflow-hidden shadow-md hover:shadow-yellow-400/40 transition-shadow duration-300">
          <iframe
            src="/transcript_y_1-2.pdf"
            className="w-full h-full"
            title="Transcript PDF"
          ></iframe>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Link
            href="/transcript_y_1-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => toast.success("Download started!", { duration: 2000 })}
            className="inline-block mt-4 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md shadow hover:bg-yellow-400 hover:scale-105 transition-all duration-300"
          >
            ⬇️ Download PDF
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
