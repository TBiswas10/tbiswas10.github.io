"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
    <h1 className="text-5xl lg:text-7xl font-heading font-bold bg-gradient-to-l from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent text-center">
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
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
        {/* Aurora Effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-aurora1"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-aurora2"></div>
        </div>

        <TypingHero />
        <motion.p
          className="mt-4 text-xl text-gray-600 dark:text-gray-300 text-center max-w-2xl"
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
            className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform-gpu hover:scale-105 focus:scale-10"
          >
            See My Work
          </a>
          <a
            href="/resume.pdf"
            className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 dark:border-slate-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform-gpu hover:scale-105 focus:scale-105"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 flex flex-col items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          variants={fadeSlideUp}
          custom={0.1}
        >
          About Me
        </motion.h2>

        <p className="max-w-xl text-center text-lg text-gray-600 dark:text-gray-300 mb-6">
          I&apos;m Tirtha, passionate about building impactful software and
          exploring the frontiers of AI and Quantum Computing. I love solving
          problems and collaborating on innovative projects.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            JavaScript
          </span>
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            React
          </span>
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            Next.js
          </span>
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            Python
          </span>
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            AI/ML
          </span>
          <span className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md border border-gray-100 dark:border-slate-700">
            Quantum
          </span>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white"
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
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex flex-col items-start hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-slate-700"
              variants={cardVariant}
            >
              <Image
                src="/file.svg"
                alt={`Project ${i + 1}`}
                width={64}
                height={64}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {i === 0
                  ? "Project One"
                  : i === 1
                    ? "Project Two"
                    : "Project Three"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {i === 0
                  ? "A brief description of your awesome project goes here. Highlight what makes it special!"
                  : i === 1
                    ? "Another project description. You can add as many cards as you want!"
                    : "Describe your project, its tech stack, and what you learned or achieved."}
              </p>
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors duration-200"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 text-gray-900 dark:text-white text-center"
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
        <motion.p
          className="mb-6 text-lg text-gray-600 dark:text-gray-300"
          variants={fadeSlideUp}
          custom={0.2}
        >
          Interested in collaborating or just want to say hi? Reach out to me
          below.
        </motion.p>
        <motion.form
          className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col gap-4 text-left mb-0 border border-gray-100 dark:border-slate-700"
          variants={fadeSlideUp}
          custom={0.3}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! (Demo)");
          }}
        >
          <div>
            <label
              htmlFor="name"
              className="block font-semibold mb-1 text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-semibold mb-1 text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-semibold mb-1 text-gray-900 dark:text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg transform-gpu hover:scale-105 focus:scale-105 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
          >
            Send Message
          </button>
        </motion.form>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-24 flex flex-col items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeSlideUp}
        custom={0}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          variants={fadeSlideUp}
          custom={0.1}
        >
          Contact
        </motion.h2>
        <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl">
          Email me at{" "}
          <a
            href="mailto:tirthabiswasm@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
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
            className="hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin className="w-8 h-8 text-[#0077b5] dark:text-blue-400" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300"
          >
            <FaTwitter className="w-8 h-8 text-[#1da1f2] dark:text-blue-400" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300"
          >
            <FaGithub className="w-8 h-8 text-gray-900 dark:text-white" />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
