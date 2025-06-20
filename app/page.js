"use client";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "./components/ThemeProvider";

function TypingHero() {
  const fullText = "Hi, I'm Tirtha Biswas";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i <= fullText.length) {
        setDisplayed(fullText.slice(0, i));
        i++;
        setTimeout(type, 80);
      }
    };
    type();
    const cursorBlink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <h1 className="text-5xl lg:text-7xl font-heading font-bold text-black dark:text-white text-center ">
      <span>{displayed}</span>
      <span
        className="inline-block w-2 align-middle"
        style={{ color: showCursor ? undefined : "transparent" }}
      >
        |
      </span>
    </h1>
  );
}

// Animation variants
const fadeSlideUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};
const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <button
      onClick={toggleTheme}
      className="ml-2 p-2 rounded-full border border-muted dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {isDark ? (
        <SunIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <MoonIcon className="w-5 h-5 text-zinc-800" />
      )}
    </button>
  );
}

export default function Home() {
  return (
    <div className="">
      <Header />
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 to-blue-200 dark:bg-gradient-to-br dark:from-black dark:via-zinc-900 dark:to-black" />
        {/* Soft Vignette for Depth */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-b-3xl"
          style={{ boxShadow: "0 0 120px 60px rgba(0,0,0,0.25) inset" }}
        />
        {/* Radial Glow Behind Avatar */}

        <TypingHero />
        <motion.p
          className="mt-4 text-xl text-black dark:text-gray-300 text-center max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
          custom={0.8}
        >
          Aspiring Software Engineer • AI & Quantum Computing Enthusiast
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeSlideUp}
          custom={1.2}
        >
          <a
            href="#projects"
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent transition text-lg transform-gpu hover:scale-105 focus:scale-105"
          >
            See My Work
          </a>
          <a
            href="/resume.pdf"
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-lg font-semibold shadow hover:bg-accent transition text-lg transform-gpu hover:scale-105 focus:scale-105"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </motion.section>
      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 bg-slate-50 dark:bg-black flex flex-col items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-black dark:text-white"
          variants={fadeSlideUp}
          custom={0.1}
        >
          About Me
        </motion.h2>

        <p className="max-w-xl text-center text-lg text-black dark:text-gray-300 mb-6">
          I&apos;m Tirtha, passionate about building impactful software and
          exploring the frontiers of AI and Quantum Computing. I love solving
          problems and collaborating on innovative projects.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            JavaScript
          </span>
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            React
          </span>
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            Next.js
          </span>
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            Python
          </span>
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            AI/ML
          </span>
          <span className="bg-white dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-full font-medium transition hover:scale-105">
            Quantum
          </span>
        </div>
      </motion.section>
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 bg-slate-50 dark:bg-black px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-black dark:text-white"
          variants={fadeSlideUp}
          custom={0.1}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Project Card Example */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 flex flex-col items-start hover:scale-105 transition"
              variants={cardVariant}
            >
              <Image
                src="/file.svg"
                alt={`Project ${i + 1}`}
                width={64}
                height={64}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {i === 0
                  ? "Project One"
                  : i === 1
                    ? "Project Two"
                    : "Project Three"}
              </h3>
              <p className="text-black dark:text-gray-300 mb-4">
                {i === 0
                  ? "A brief description of your awesome project goes here. Highlight what makes it special!"
                  : i === 1
                    ? "Another project description. You can add as many cards as you want!"
                    : "Describe your project, its tech stack, and what you learned or achieved."}
              </p>
              <a
                href="#"
                className="text-accent dark:text-white font-medium hover:underline"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-black dark:via-zinc-900 dark:to-black text-black dark:text-white text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-4"
          variants={fadeSlideUp}
          custom={0.1}
        >
          Let&apos;s Connect!
        </motion.h2>
        <motion.p className="mb-6 text-lg" variants={fadeSlideUp} custom={0.2}>
          Interested in collaborating or just want to say hi? Reach out to me
          below.
        </motion.p>
        <motion.form
          className="w-full max-w-md mx-auto bg-white/80 dark:bg-zinc-900/80 p-6 rounded-xl shadow flex flex-col gap-4 text-left mb-0"
          variants={fadeSlideUp}
          custom={0.3}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Demo)");
          }}
        >
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-semibold mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold shadow hover:bg-accent transition text-lg transform-gpu hover:scale-105 focus:scale-105"
          >
            Send Message
          </button>
        </motion.form>
      </motion.section>
      {/* Contact Section */}
      <motion.section
        style={{ marginTop: "-3rem" }}
        id="contact"
        className="py-24 bg-slate-50 dark:bg-black flex flex-col items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-black dark:text-white"
          variants={fadeSlideUp}
          custom={0.1}
        >
          Contact
        </motion.h2>
        <p className="mb-6 text-lg text-black dark:text-gray-300 text-center max-w-xl">
          Email me at{" "}
          <a
            href="mailto:tirthabiswasm@gmail.com"
            className="text-accent dark:text-white underline"
          >
            tirthabiswasm@gmail.com
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
            <FaLinkedin className="w-8 h-8 text-[#0077b5] dark:text-white" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaTwitter className="w-8 h-8 text-[#1da1f2] dark:text-white" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub className="w-8 h-8 text-black dark:text-white" />
          </a>
        </div>
      </motion.section>
      {/* Footer */}
      <footer className="h-24 py-6 flex flex-col sm:flex-row items-center justify-between px-6 lg:px-12 bg-slate-100 dark:bg-black border-t border-muted dark:border-zinc-800 text-sm gap-2 sm:gap-0">
        <span className="text-black dark:text-white">
          © 2025 Tirtha Biswas
        </span>
        <div className="flex gap-4 items-center">
          <a
            href="#privacy"
            className="hover:underline text-black dark:text-gray-300"
          >
            Goals
          </a>

          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
