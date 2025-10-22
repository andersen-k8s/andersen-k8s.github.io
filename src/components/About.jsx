import React from 'react'

export function About() {
  return (
    <section id="about" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-xl font-semibold text-white">About</h2>
        <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
          I design, containerize, and automate infrastructure on Kubernetes and cloud platforms.
          This portfolio is a living space — I'll add case studies and notes over time.
        </p>
      </div>
    </section>
  )
}
