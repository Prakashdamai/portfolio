import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true) // Hook up to a backend or service like Formspree later
  }

  if (sent) return <p className="text-center text-lg">Thanks for reaching out! I’ll get back to you soon.</p>

  return (
    <div>
      <h2 className="h2 text-center">Have a cool idea? Let's make it happen.</h2>
      <form onSubmit={onSubmit} className="max-w-xl mx-auto mt-10 space-y-5">
        <div>
          <label>Name</label>
          <input name="name" value={form.name} onChange={onChange} required minLength={2} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={onChange} required minLength={10} />
        </div>
        <button className="btn w-full" type="submit">Reach Out</button>
      </form>
    </div>
  )
}
