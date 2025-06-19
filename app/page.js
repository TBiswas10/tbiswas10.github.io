"use client";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { useTheme } from "./components/ThemeProvider";

function SunIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
    </svg>
  );
}
function MoonIcon({ className }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4"
      >
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#cbd5e1] dark:from-black dark:via-zinc-900 dark:to-black" />
        {/* Soft Vignette for Depth */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-b-3xl"
          style={{ boxShadow: "0 0 120px 60px rgba(0,0,0,0.25) inset" }}
        />
        {/* Radial Glow Behind Avatar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-radial from-fuchsia-500/40 via-blue-500/30 to-transparent blur-2xl -z-10" />
        <img
          src="/window.svg"
          alt="Avatar"
          className="w-32 h-32 rounded-full border-4 border-accent dark:border-white shadow-xl mb-6 bg-white/30 backdrop-blur-lg"
        />
        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-primary dark:text-white text-center">
          Hi, I'm{" "}
          <span className="text-accent dark:text-white">Tirtha Biswas</span>
        </h1>
        <p className="mt-4 text-xl text-text-secondary dark:text-gray-300 text-center max-w-2xl">
          Aspiring Software Engineer • AI & Quantum Computing Enthusiast
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-primary dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent dark:hover:bg-gray-200 transition text-lg"
          >
            See My Work
          </a>
          <a
            href="/resume.pdf"
            className="bg-accent dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold shadow hover:bg-primary dark:hover:bg-gray-200 transition text-lg"
            download
          >
            Download Resume
          </a>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-white dark:bg-black flex flex-col items-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
          About Me
        </h2>

        <p className="max-w-xl text-center text-lg text-text-secondary dark:text-gray-300 mb-6">
          I'm Tirtha, passionate about building impactful software and exploring
          the frontiers of AI and Quantum Computing. I love solving problems and
          collaborating on innovative projects.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            JavaScript
          </span>
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            React
          </span>
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            Next.js
          </span>
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            Python
          </span>
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            AI/ML
          </span>
          <span className="bg-blue-100 dark:bg-zinc-800 text-blue-700 dark:text-white px-4 py-2 rounded-full font-medium">
            Quantum
          </span>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background dark:bg-black px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-primary dark:text-white">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Project Card Example */}
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition">
            <img src="/file.svg" alt="Project 1" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
              Project One
            </h3>
            <p className="text-text-secondary dark:text-gray-300 mb-4">
              A brief description of your awesome project goes here. Highlight
              what makes it special!
            </p>
            <a
              href="#"
              className="text-accent dark:text-white font-medium hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition">
            <img src="/file.svg" alt="Project 2" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
              Project Two
            </h3>
            <p className="text-text-secondary dark:text-gray-300 mb-4">
              Another project description. You can add as many cards as you
              want!
            </p>
            <a
              href="#"
              className="text-accent dark:text-white font-medium hover:underline"
            >
              View Project
            </a>
          </div>
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition">
            <img src="/file.svg" alt="Project 3" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text dark:text-white">
              Project Three
            </h3>
            <p className="text-text-secondary dark:text-gray-300 mb-4">
              Describe your project, its tech stack, and what you learned or
              achieved.
            </p>
            <a
              href="#"
              className="text-accent dark:text-white font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#f8fafc] via-[#e0e7ef] to-[#cbd5e1] dark:from-black dark:via-zinc-900 dark:to-black text-primary dark:text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
        <p className="mb-6 text-lg">
          Interested in collaborating or just want to say hi? Reach out to me
          below.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white/10 dark:bg-white/10 text-primary dark:text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-white/20 dark:hover:bg-white/20 hover:text-primary dark:hover:text-white transition text-lg border border-white/10"
        >
          Contact Me
        </a>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-white dark:bg-black flex flex-col items-center px-4"
      >
        <h2 className="text-3xl font-bold mb-4 text-primary dark:text-white">
          Contact
        </h2>
        <p className="mb-6 text-lg text-text-secondary dark:text-gray-300 text-center max-w-xl">
          Email me at{" "}
          <a
            href="mailto:tirthabiswasm@gmail.com"
            className="text-accent dark:text-white underline"
          >
            tirtha@example.com
          </a>{" "}
          or connect with me on social media.
        </p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="/linkedin-light.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="/twitter-light.svg" alt="Twitter" className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <img src="/github-light.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="h-24 py-6 flex flex-col sm:flex-row items-center justify-between px-6 lg:px-12 bg-white dark:bg-black border-t border-muted dark:border-zinc-800 text-sm gap-2 sm:gap-0">
        <span className="text-text dark:text-white">© 2025 Tirtha Biswas</span>
        <div className="flex gap-4 items-center">
          <a
            href="#privacy"
            className="hover:underline text-text-secondary dark:text-gray-300"
          >
            Privacy
          </a>
          <a
            href="#terms"
            className="hover:underline text-text-secondary dark:text-gray-300"
          >
            Terms
          </a>
          {/* Theme Toggle Icons */}
        </div>
      </footer>
    </>
  );
}
