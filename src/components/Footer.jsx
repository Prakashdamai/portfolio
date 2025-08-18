import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f23] py-10 mt-16">
      <div className="section pt-0 text-center">
        <p className="font-display text-xl font-bold">Prakash Damai | Full Stack Developer</p>
        <a className="block text-accent mt-2" href="mailto:damaip7@gmail.com">damaip7@gmail.com</a>
        <div className="flex justify-center gap-5 mt-4">
          <a href="https://github.com/Prakashdamai" target="_blank" rel="noreferrer" aria-label="GitHub" className="nav-link">GitHub</a>
          <a href="https://www.linkedin.com/in/prakash-damai-1298452a7/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="nav-link">LinkedIn</a>
        </div>
        <p className="text-xs text-gray-500 mt-6">© {new Date().getFullYear()} Prakash Damai</p>
      </div>
    </footer>
  )
}
