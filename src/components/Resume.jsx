import React from 'react'

export default function Resume() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="h2">Resume</h2>
      <p className="text-gray-300">Download my resume as PDF.</p>
      <a className="btn mt-6 inline-block" href="Prakash.docx" target="_blank" rel="noreferrer">
        Download Resume
      </a>
      <p className="mt-4 text-sm text-gray-400">Replace <code>public/resume.pdf</code> with your file.</p>
    </div>
  )
}
