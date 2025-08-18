import React from 'react'

const skillTags = ['Html', 'Css', 'Javascript', 'React.js', 'Node.js', 'Git & GitHub']

export default function Skills() {
  return (
    <div>
      <h2 className="h2 text-center">My Skills</h2>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        {skillTags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}
