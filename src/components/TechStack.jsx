import React from 'react'
import { Boxes, Cloud, GitBranch, Shield } from 'lucide-react'

function Pill({ children }) {
  return <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">{children}</span>
}

export function TechStack() {
  return (
    <section id="stack" className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Boxes className="w-5 h-5" /> Orchestration & Containers
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-slate-300">
              <Pill>Kubernetes</Pill>
              <Pill>Helm</Pill>
              <Pill>Docker</Pill>
              <Pill>Kustomize</Pill>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Cloud className="w-5 h-5" /> Cloud & Infra as Code
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-slate-300">
              <Pill>Terraform</Pill>
              <Pill>Ansible</Pill>
              <Pill>GitOps</Pill>
              <Pill>ArgoCD</Pill>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5" /> CI/CD & Automation
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-slate-300">
              <Pill>GitLab CI/CD</Pill>
              <Pill>GitHub Actions</Pill>
              <Pill>Pre-commit</Pill>
              <Pill>Linting</Pill>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Shield className="w-5 h-5" /> Reliability & Security
            </h3>
            <div className="mt-3 flex flex-wrap gap-2 text-slate-300">
              <Pill>Monitoring</Pill>
              <Pill>Prometheus/Grafana</Pill>
              <Pill>Policy as Code</Pill>
              <Pill>OPA/Gatekeeper</Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
