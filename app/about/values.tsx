'use client';

import { motion } from "framer-motion";
import React from "react";

export const CoreValues: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <div className="bg-gradient-to-b min-h-screen p-8 relative mb-20">
      <div className="relative flex flex-col items-center space-y-16 mt-24">
        <div className="relative w-full flex justify-end items-center">
          <div className="absolute left-1/2 w-1 h-full bg-gray-700"></div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <h1 className="text-5xl font-bold text-white">Our</h1>
            <h2 className="text-5xl font-bold text-[#384b6b]">Core Values</h2>
          </div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-12 w-3/4 md:w-1/2 relative"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
            We believe in the power of innovation to revolutionize the way charity and giving are experienced. By leveraging cutting-edge blockchain technology, we ensure transparency, efficiency, and accessibility, transforming how Zakat is collected and distributed in ways that foster greater trust and impact.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="absolute left-1/2 w-1 bg-gray-700 h-16"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 bg-gray-700 h-1"></div>
        </div>

        <div className="relative w-full flex justify-start items-center">
          <div className="absolute left-1/2 w-1 h-full bg-gray-700"></div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-12 w-3/4 md:w-1/2 relative"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Compassion</h3>
            <p className="text-gray-600">
            At the heart of ZakatChain is a deep sense of compassion. We are driven by the belief that every individual deserves a chance to lead a dignified life. Our platform ensures that zakat reaches those who need it most, empowering communities with the resources they need to thrive.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full flex items-center justify-center">
          <div className="absolute left-1/2 w-1 bg-gray-700 h-16"></div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-10 bg-gray-700 h-1"></div>
        </div>

        <div className="relative w-full flex justify-end items-center">
          <div className="absolute left-1/2 w-1 h-full bg-gray-700"></div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-12 w-3/4 md:w-1/2 relative"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Empowerment</h3>
            <p className="text-gray-600">
            At ZakatChain, empowerment means equipping individuals and communities with the tools, resources, and support they need to create meaningful change and realize their full potential. By fostering independence and growth, we help build stronger, self-reliant communities.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

