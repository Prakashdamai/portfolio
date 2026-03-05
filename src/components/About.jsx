import React from 'react'

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <img
        src='/Profile/Profile.jpg'
        alt="Prakash portrait"
        loading="lazy"
        className="rounded-2xl border border-[#222] object-cover w-full"
      />
      <div>
        <h2 className="h2">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend Developer <span className="text-accent font-semibold"></span><br /><br />
          I’m a Frontend Developer in progress, currently focused on Python, django for backend development.  
So far, I’ve built projects using HTML, CSS, JavaScript, and React, and I’m excited to keep expanding my skills toward full stack web applications.

        </p>
        <a href="#contact" className="btn mt-8 inline-block">Let's Talk</a>
      </div>
    </div>
  )
}
