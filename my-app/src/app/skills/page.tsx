//my-app\src\app\skills\page.tsx
'use client';
import React from 'react';

import {
  SiJavascript, SiTypescript, SiPython, SiGo, SiCss3, SiHtml5,
  SiMongodb, SiPostgresql, SiReact, SiNextdotjs, SiNodedotjs,
  SiTailwindcss, SiDjango, SiAmazon, SiVercel, SiDocker, SiGit, SiRedux
} from 'react-icons/si';

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 py-20 text-white bg-transparent">

      <div className="h-0 sm:h-10 md:h-12 lg:h-16" />  {/* spacer */}


      <div className="bg-black/80 rounded-2xl p-10 max-w-7xl min-h-[60vh] mx-auto shadow-lg">
        <h1 className="text-4xl font-bold text-green-300 mb-12 text-center">Tech Stack</h1>

        {/* Section: Technical Languages */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Technical Languages</h2>
          <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SkillCard icon={<SiTypescript />} label="TypeScript" />
            <SkillCard icon={<SiJavascript />} label="JavaScript" />
            <SkillCard icon={<SiPython />} label="Python" />
            <SkillCard icon={<SiGo />} label="Golang" />
            <SkillCard icon={<SiCss3 />} label="CSS" />
            <SkillCard icon={<SiHtml5 />} label="HTML" />
          </div>
        </section>

        {/* Section: Technologies & Frameworks */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-purple-300 mb-6">Technologies & Frameworks</h2>
          <div className="grid justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SkillCard icon={<SiReact />} label="React" />
            <SkillCard icon={<SiNextdotjs />} label="Next.js" />
            <SkillCard icon={<SiNodedotjs />} label="Node.js" />
            <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
            <SkillCard icon={<SiDjango />} label="Django" />
            <SkillCard icon={<SiAmazon />} label="AWS" />
            <SkillCard icon={<SiVercel />} label="Vercel" />
            <SkillCard icon={<SiDocker />} label="Docker" />
            <SkillCard icon={<SiMongodb />} label="MongoDB" />
            <SkillCard icon={<SiPostgresql />} label="PostgreSQL" />
            <SkillCard icon={<SiGit />} label="Git" />
            <SkillCard icon={<SiRedux />} label="Redux" />
          </div>
        </section>
      </div>
    </div>
  );
}

// Reusable card component
type SkillCardProps = {
  icon: React.ReactNode;
  label: string;
};

function SkillCard({ icon, label }: SkillCardProps) {
  return (
    <div className="bg-black/50 p-4 rounded-xl shadow-md flex flex-col items-center justify-center hover:scale-105 transform transition duration-300">
      <div className="w-16 h-16 flex items-center justify-center text-green-300 mb-2 bg-black/70 rounded-lg">
        <div className="text-3xl">{icon}</div>
      </div>
      <p className="text-m font-normal text-center">{label}</p>
    </div>
  );
}
