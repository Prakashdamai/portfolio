import React from 'react'

const projects = [
  
]

export default function Projects() {
  return (
    <div>
      <h2 className="h2">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map(p => (
          <article key={p.title} className="card flex flex-col">
            <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-300 flex-1">{p.description}</p>
            <div className="flex gap-3 mt-4">
              <a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn !bg-transparent border border-accent text-accent" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
