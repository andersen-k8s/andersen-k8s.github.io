# Andersen Cloud Portfolio (React + Tailwind + Vite)

Clean, navy-themed, Kubernetes/Cloud-flavored portfolio designed for GitHub Pages.

## Quickstart

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (username.github.io)

This project is prepared for the special repository **andersen-k8s.github.io** (root Pages). Push the repo and enable GitHub Pages with GitHub Actions:

1. Create or use the repo `andersen-k8s.github.io`.
2. Copy this project into the repo.
3. Push to `main`. The included workflow builds and deploys to Pages automatically.

If you fork or use a project page (not username.github.io), set `base` in `vite.config.js` to `'/your-repo-name/'`.

## Update Profile Links

- In `Contact.jsx`, update the email and LinkedIn URL.

## Customization

- Colors are in `tailwind.config.js` (`brand.navy`, `brand.accent`).
- The hero tagline is in `Hero.jsx`.
- The repo list auto-loads from `andersen-k8s`. Change the username prop in `App.jsx` if needed.
