"use client";
import React from "react";
import { motion } from "framer-motion";


const Aboutpage = () => {
  const Skills = [
    
    { title: "Javascript" },
    { title: "Typescript" },
    { title: "React.js" },
    { title: "Next.js" },
    { title: "Tailwind Css" },
    { title: "Flutter" },
    { title: "MySQL" },
    { title: "MongoDB" },
    { title: "Git" },
    { title: "Github" },
    { title: "WordPress" },
   

  ];

  return (
    <motion.div
    className="h-200vh flex flex-col items-center p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 bg-gradient-to from-gray-100 to-white"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 0.8 }}
  >
      <div className="w-full max-w-4xl mx-auto h-auto">
        {/* Intro */}
        <div className="mb-12 text-center text-black">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Biography</h1>
          <div>
          <div className="drop-blur-xl rounded-lg p-6">
          <p className="">
            Hi, I&#39;m IDRISS BOUKDIR, a full-stack developer passionate about creating seamless digital experiences. Since starting my coding journey in 2020, I&#39;ve worked on various projects, from personal websites to complex web applications. I specialize in building responsive, user-friendly interfaces and scalable server-side systems. Always eager to connect and explore new opportunities in web development, feel free to check out my projects and reach out if you&#39;d like to collaborate.
          </p>
          
          </div>
          
          </div>
        </div>
        {/* Skills */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-black">Skills</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {Skills.map((skill) => (
              <motion.div
                key={skill.title}
                className="bg-black text-white p-3 rounded-md hover:bg-white hover:text-black transition duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {skill.title}
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Experience */}
        <div className="text-black">
          <h1 className="text-2xl md:text-3xl font-bold p-5 text-black">Experience</h1>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Freelance Web Developer</h2>
              <p className="text-base mt-2">Jul 2024 – Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Increased user engagement by 25% through custom Next.js and React.js apps</li>
                <li>Improved mobile compatibility with Tailwind CSS, boosting accessibility</li>
                <li>Managed Mongo DB backend, ensuring 99.9% uptime</li>
                <li>Delivered tailored web solutions with a 95% client satisfaction rate</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Intern - Junior Full-Stack Developer</h2>
              <p className="text-base mt-2">Aug 2023 - May 2024</p>
              <p className="mt-2">Menara Technologies Bilgisaier, Marrakech, Morocco</p>
              <ul className="list-disc list-inside mt-2">
                <li>Contributed to 10+ websites, raising client satisfaction by 30%</li>
                <li>Enhanced mobile performance by 20% using SCSS and Tailwind CSS</li>
                <li>Developed dynamic UIs with React.js and Next.js</li>
                <li>Applied industry best practices and used Git for version control</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Education & Certifications */}
        <div className="mt-12 text-black pl-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Education & Certifications</h1>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Bachelor’s Degree</h2>
              <p className="text-base mt-2">Computer Development - Oct 2023 / Jul 2024</p>
              <p>School ISGA, Fes, Morocco</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Vocational School Diploma</h2>
              <p className="text-base mt-2">Computer Development - Oct 2021 / Jul 2023</p>
              <p>School Racine, Marrakech, Morocco</p>
            </div>
          </div>
        </div>
        <div className="mt-12"></div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
