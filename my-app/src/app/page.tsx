//my-app\src\app\page.tsx
'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roles = ['Frontend', 'Fullstack', 'Backend', 'Cloud  '];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="w-full max-w-3xl text-center bg-black/80 p-6 sm:p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-5xl sm:text-4xl xs:text-3xl font-bold text-white mb-2">{'Hi, I’m Duncan'}</h1>
        <h2 className="text-3xl sm:text-2xl xs:text-xl font-semibold text-green-300 mb-2">{'Welcome to my portfolio'}</h2>

        <div className="mb-6 text-xl sm:text-2xl text-white font-medium flex flex-wrap justify-center text-center sm:text-left">
          <span className="whitespace-normal text-center sm:text-left">
            I&apos;m currently looking for postgraduate opportunities in&nbsp;
          </span>
          <span
            key={roles[index]}
            className="text-purple-300 font-semibold min-w-[6rem] text-left inline-block transition-all duration-500 ease-in-out animate-fade-scale"
          >
            {roles[index]}
          </span>
        </div>

        <div className="flex justify-center items-center space-x-6 w-full max-w-3xl mx-auto">
          <a
            href="https://github.com/SpursFan21"
            target="_blank"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/duncan-turner-09b89318a/"
            target="_blank"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:duncanfrederic@gmail.com"
            className="text-white hover:text-green-300 text-xl transition-transform transform hover:scale-[1.3]"
          >
            <FaEnvelope />
          </a>
          <a
            href="/Duncan%20Turner%20resume.pdf"
            target="_blank"
            className="text-sm sm:text-base px-4 py-2 bg-green-700 rounded-md font-semibold text-white transition duration-300 transform hover:scale-[1.1] hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.7)]"
          >
            Resume
          </a>
        </div>
      </motion.div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
        className="max-w-4xl mt-16 bg-black/80 p-8 rounded-xl shadow-lg text-center"
      >
        <h2 className="text-3xl font-semibold text-purple-300 mb-4">About Me</h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          Hi, I’m Duncan — a final-year Software Engineering student with a strong focus on cloud technologies and modern web
          development. I specialize in building cloud-native applications and full-stack web solutions that are scalable, efficient,
          and user-friendly.
          <br />
          <br />
          Currently, I’m developing <strong>ScrapeSmith</strong>, a powerful SaaS platform for automated web scraping, data cleaning,
          and AI-driven analysis. Alongside this, I work with clients on various freelance projects.
          <br />
          <br />
          Outside of code, I work part-time as a Duty Manager at a fine wine store, balancing hands-on leadership with technical growth.
          I’m actively seeking full-time opportunities post-graduation where I can contribute as a backend, fullstack, or cloud
          engineer. Let’s connect and build something great together!
        </p>
      </motion.div>
    </div>
  );
}
