import React from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { TechStack } from './components/TechStack'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-300/20 selection:text-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Andersen Cloud</a>
          <nav className="hidden sm:flex gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#stack" className="hover:text-white">Tech</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects username="andersen-k8s" />
        <TechStack />
      </main>
      <Contact />
      <footer className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-slate-400">
          © {new Date().getFullYear()} Andersen Cloud — Built with React & Tailwind · Deployed on GitHub Pages
        </div>
      </footer>
    </div>
  )
}
