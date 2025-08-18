import React, { Suspense, lazy } from 'react'

const Hero = lazy(() => import('./components/Hero.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Resume = lazy(() => import('./components/Resume.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))
const Footer = lazy(() => import('./components/Footer.jsx'))

const Loader = () => (
  <div className="text-center py-12">Loading…</div>
)

export default function App() {
  return (
    <div>
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-dark/70 border-b border-[#1f1f23]">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-black">Portfo<span className="text-accent">lio</span></a>
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#projects">Projects</a></li>
            <li><a className="nav-link" href="#skills">Skills</a></li>
            <li><a className="nav-link" href="#resume">Resume</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="btn hidden sm:inline-flex">Contact Me</a>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <section id="hero"><Hero /></section>
        <section id="about" className="section"><About /></section>
        <section id="skills" className="section"><Skills /></section>
        <section id="projects" className="section"><Projects /></section>
        <section id="resume" className="section"><Resume /></section>
        <section id="contact" className="section"><Contact /></section>
        <Footer />
      </Suspense>
    </div>
  )
}
