import React, { useEffect, useState } from 'react'
import { ExternalLink, Star, GitFork } from 'lucide-react'

function ProjectCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition shadow-soft"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="text-base sm:text-lg font-semibold text-white group-hover:underline">
            {repo.name}
          </h3>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-200" />
        </div>
        {repo.description && (
          <p className="mt-2 text-sm text-slate-300 line-clamp-2">{repo.description}</p>
        )}
        <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1">
            <Star className="w-4 h-4" /> {repo.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1">
            <GitFork className="w-4 h-4" /> {repo.forks_count}
          </span>
          {repo.language && <span>{repo.language}</span>}
          {repo.topics?.slice(0,3).map(t => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function Projects({ username }) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        const data = await res.json()
        const filtered = (Array.isArray(data) ? data : []).filter(r => !r.fork)
        const scored = filtered.map(r => ({
          ...r,
          _score: [
            /k8s|kubernetes|helm/i.test(r.name) ? 2 : 0,
            /terraform|ansible|infrastructure/i.test(r.description || '') ? 1 : 0
          ].reduce((a,b)=>a+b,0)
        }))
        scored.sort((a,b) => b._score - a._score || b.stargazers_count - a.stargazers_count)
        setRepos(scored.slice(0, 6))
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [username])

  return (
    <section id="projects" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Projects</h2>
          <a href={`https://github.com/${username}?tab=repositories`} className="text-sm text-sky-300 hover:underline">
            View all on GitHub
          </a>
        </div>

        {loading ? (
          <p className="mt-4 text-slate-400">Loading repositories…</p>
        ) : repos.length === 0 ? (
          <p className="mt-4 text-slate-400">No public repositories yet. Stay tuned!</p>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {repos.map(repo => <ProjectCard key={repo.id} repo={repo} />)}
          </div>
        )}
      </div>
    </section>
  )
}
