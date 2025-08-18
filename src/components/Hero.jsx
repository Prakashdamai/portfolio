// src/components/Hero.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    // <section className="section min-h-screen flex items-center justify-center text-center">
    <section className="section min-h-[80vh] flex items-center justify-center text-center !py-8">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <p className="uppercase tracking-widest text-gray-400">Hello, my name is</p>
        <h1 className="text-5xl md:text-7xl font-extrabold font-display mt-4">
          Prakash <span className="text-accent">Damai</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed">
         <strong> I’m a Full Stack Developer </strong>
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a href="#contact" className="btn">Get In Touch</a>
          <a href="#projects" className="btn !bg-transparent border border-accent text-accent hover:bg-accent hover:text-white">
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}
