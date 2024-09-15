"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-full flex flex-col items-center justify-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid sm:grid-cols-2 items-start gap-14 p-12 mx-auto max-w-4xl mb-[100px] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md ">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Let&#39;s Talk</h1>
          <p className="text-sm text-gray-500 mt-4">
            Have a big idea or brand to develop and need help? Reach out! We&#39;d love to hear about your project and provide assistance..
          </p>

          <div className="mt-12">
            <h2 className="text-black text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Link href="mailto:drissboukdirbk@gmail.com">
                    <BiLogoGmail className="hover:text-2xl transition-all duration-200" />
                  </Link>
                </div>
                <a href="javascript:void(0)" className="text-[#080d13] text-sm ml-4">
                  <small className="block">Mail</small>
                  <Link href="mailto:drissboukdirbk@gmail.com">
                    <p className='font-bold'>drissboukdirbk@gmail.com</p>
                  </Link>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold mb-3">Socials</h2>
            <div className="ml-auto gap-5 text-2xl cursor-pointer flex md:flex text-black font-bold ">
              <Link href="mailto:drissboukdirbk@gmail.com">
                <AiFillInstagram className="hover:text-2xl transition-all duration-200" />
              </Link>
              <Link href="https://github.com/Idriss-Bk">
                <IoLogoGithub className="hover:text-2xl transition-all duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/idriss-boukdir-5120a6280/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=ma">
                <FaLinkedin className="hover:text-2xl transition-all duration-200" />
              </Link>
              <Link href="https://www.linkedin.com/in/idriss-boukdir-5120a6280/?original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=ma">
                <FaXTwitter className="hover:text-2xl transition-all duration-200" />
              </Link>
            </div>
          </div>
        </div>

        <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500"
            required
          />
          <textarea
            placeholder="Message"
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
            required
          />
          <button
            type="submit"
            className="text-black bg-gradient-to-b from-blue-100 to-red-100 hover:scale-105 hover:transition duration-200 rounded-md text-sm px-4 font-bold py-3 w-full !mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {submitMessage && <p className="text-center mt-4">{submitMessage}</p>}
        </form>
      </div>
    </motion.div>
  );
};

export default Contactpage;