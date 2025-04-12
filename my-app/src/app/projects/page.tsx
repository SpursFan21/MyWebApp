//my-app\src\app\projects\page.tsx
'use client';
import React from 'react';
import { DiPostgresql } from 'react-icons/di';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-20 text-white bg-transparent">
      <div className="bg-black/80 rounded-2xl p-10 max-w-7xl mx-auto shadow-lg">
        <h1 className="text-4xl font-bold text-green-300 mb-12 text-center">Projects</h1>

        {/* ScrapeSmith Feature Block */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-purple-300 mb-4 text-center">ScrapeSmith</h2>
          <p className="text-center text-gray-300 mb-6 italic">
            “A blacksmith for the web – forge your data, sharpen your insights.”
          </p>
          <p className="text-center text-sm text-gray-300 mb-10 max-w-4xl mx-auto">
            ScrapeSmith is a professional, cloud-native SaaS platform for scalable web data extraction,
            intelligent data processing, and AI-powered analysis. Built for automation and flexibility,
            it supports both real-time and scheduled workloads—making it ideal for large-scale scraping
            pipelines, AI reporting, and custom job execution. The platform offers a growing library of
            prebuilt and fully customizable analysis scripts to meet virtually any use case—from sentiment analysis
            to anomaly detection and beyond.

            <br /><br />
            ScrapeSmith is designed to handle data extraction across a wide range of modern and legacy web architectures,
            ensuring compatibility with dynamic, static, and JavaScript-heavy sites. The platform is currently in
            active development and is scheduled for public release later this year.
            </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend Card */}
            <div className="bg-black/60 p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-4 text-center">
              <h3 className="text-xl font-semibold text-green-300">Frontend</h3>
              <p className="text-sm text-gray-300">
                Built using Next.js (App Router), styled with Tailwind CSS and enhanced with Headless UI, Framer Motion, and custom components.
                Authentication is managed with JWT and Redux token refreshing.
              </p>
              <ul className="text-xs text-purple-200 space-y-1">
                <li>Framework: Next.js</li>
                <li>Language: TypeScript</li>
                <li>Styling: Tailwind CSS, Headless UI</li>
                <li>State Management: Redux Toolkit</li>
                <li>HTTP Client: Axios</li>
                <li>UI: Framer Motion, ShadCN, custom components</li>
                <li>Auth: JWT (refresh logic with Redux)</li>
              </ul>
              <a
                href="https://github.com/SpursFan21/ScrapeSmith-Frontend"
                target="_blank"
                className="inline-flex items-center justify-center text-white hover:text-green-300 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>

            {/* Backend Card */}
            <div className="bg-black/60 p-6 rounded-xl shadow-md hover:shadow-xl transition space-y-4 text-center">
              <h3 className="text-xl font-semibold text-green-300">Backend / Microservices</h3>
              <p className="text-sm text-gray-300">
                A microservice-based architecture powered by Go and Node.js. Services are containerized with Docker
                and communicate through REST APIs behind Kong API Gateway.
              </p>
              <ul className="text-xs text-purple-200 space-y-1">
                <li>Languages: Go (Fiber), Node.js (Express), TypeScript</li>
                <li>Databases: PostgreSQL, MongoDB Atlas</li>
                <li>Gateway: Kong API Gateway</li>
                <li>Containerization: Docker</li>
                <li>Payments: Stripe + voucher support</li>
                <li>Auth: JWT access & refresh tokens</li>
                <li>Scheduling: Custom cron/timer job runner</li>
                <li>AI: GPT-based analysis (WIP)</li>
              </ul>
              <a
                href="https://github.com/SpursFan21/ScrapeSmith-Microservice"
                target="_blank"
                className="inline-flex items-center justify-center text-white hover:text-green-300 transition"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects */}
        <h2 className="text-2xl font-semibold text-green-300 mb-6 text-center">Other Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                title: 'ScrapeCity',
                description: 'React & Django-based web scraping and data cleaning tool with user accounts, jwt auth, payments and dashboard. A precursor to ScrapeSmith',
                tech: ['React', 'Django', 'PostgreSQL', 'Vercel', 'AWS'],
                github: 'https://github.com/SpursFan21/scrapecity',
                },
                {
                title: 'Sol Dance Festival',
                description: 'Client site for a US music festival built with Next.js and Tailwind CSS. Moving to production on Vercel soon.',
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
                github: 'https://github.com/SpursFan21/sol-dance',
                demo: 'https://soldance.vercel.app/',
                },
                {
                title: 'Virtual Vault',
                description: 'Full-stack Flask-based e-commerce app with user accounts, product store, auth, cart, and checkout.',
                tech: ['Python', 'Flask', 'HTML', 'CSS', 'SQLite', 'Rye'],
                github: 'https://github.com/SpursFan21/Virtual-Vault',
                },
                {
                title: 'Book Review App',
                description: 'T3 Stack-based book review and cataloging site with user accounts, auth, multiple dashboards, deployed to Vercel.',
                tech: ['Next.js', 'Tailwind CSS', 'tRPC', 'Prisma', 'Drizzle', 'NextAuth', 'PostgreSQL'],
                github: 'https://github.com/SpursFan21/Book-Review-App',
                },
                {
                title: 'Covid Passport',
                description: 'C# MVVM desktop app mimicking the NZ vaccine passport, backed by Node.js. Operates with a hybrid cloud architecture.',
                tech: ['C#', 'MVVM', 'Node.js', 'TypeScript', 'Cloudflare'],
                github: 'https://github.com/SpursFan21/Covid-Passport',
                },
                {
                title: 'InventoryOne',
                description: 'Microservices-based inventory system with Go backend, and React frontend. This project is unfinished without plans to complete.',
                tech: ['Go', 'React', 'TypeScript', 'MongoDB', , 'Docker'],
                github: 'https://github.com/SpursFan21/InventoryOne',
                },
            ].map((project, index) => (
                <div
                key={index}
                className="bg-black/60 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between text-center"
                >
                <div>
                    <h3 className="text-xl font-semibold text-green-300 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                    <div className="text-xs text-purple-200 mb-4">{project.tech.join(', ')}</div>
                </div>
                <div className="flex justify-center space-x-4 mt-auto">
                    <a href={project.github} target="_blank" className="text-white hover:text-green-300 transition">
                    <FaGithub className="w-5 h-5" />
                    </a>
                    {project.demo && (
                    <a href={project.demo} target="_blank" className="text-white hover:text-green-300 transition">
                        <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                    )}
                </div>
                </div>
            ))}
            </div>

      </div>
    </div>
  );
}
