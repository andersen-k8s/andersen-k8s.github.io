import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white"
        >
          Cloud & DevOps Engineer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl"
        >
          Automating the Cloud, One Cluster at a Time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 text-sm text-slate-300 bg-white/5 border border-white/10 rounded-full px-3 py-1">
            <BadgeCheck className="w-4 h-4" />
            Kubernetes • GitLab CI/CD • Terraform
          </span>
        </motion.div>
      </div>
    </section>
  )
}
