import React from 'react'

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="rounded-2xl p-6 bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Let’s build reliable systems.</h3>
            <p className="text-slate-300 mt-1">Open for freelance projects & collaborations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com/andersen-k8s" target="_blank" className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-400/20 hover:bg-sky-500/20">GitHub</a>
            <a href="mailto:andersen@example.com" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Email</a>
            <a href="https://www.linkedin.com" target="_blank" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
