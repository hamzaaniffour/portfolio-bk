"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Panel",
    description: "A comprehensive admin panel for managing user data and analytics.",
    date: "2024",
    link: "https://admin-panel-lyart-beta.vercel.app",
  },
  {
    title: "Coupons Pro",
    description: "An application for managing and distributing digital coupons.",
    date: "2023",
    link: "https://coupons-pro.vercel.app",
  },
  {
    title: "Naranj",
    description: "A sophisticated platform for online fruit and vegetable shopping.",
    date: "2022",
    link: "https://naranj.vercel.app",
  },
  {
    title: "Stripe Payments Integration",
    description: "Integrated Stripe payment system into e-commerce platforms.",
    date: "2023",
    link: "https://stripe-payments.vercel.app",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <motion.div
    className="h-full flex flex-col items-center p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 bg-gradient-to from-gray-50 to-white"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.8 }}
  >
      <div className="w-full max-w-5xl mx-auto h-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-[100px] md:text-[150px] lg:text-[200px] font-bold mb-4 text-black">My Work</h1>
          <p className="text-base md:text-lg lg:text-xl text-black">
            Explore a selection of my projects that showcase my skills and creativity in web development. Each project represents a unique challenge and solution that highlights my capabilities and passion for technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-black font-bold mb-2">{project.title}</h2>
              <p className="text-base text-black mb-4">{project.description}</p>
              <p className="text-sm text-gray-600 mb-4">Date: {project.date}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
