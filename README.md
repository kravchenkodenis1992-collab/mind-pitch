# MIND Investor Landing

Static landing page derived from the MIND pitch deck. Investor audience, no fundraising specifics.

**Live URL:** https://kravchenkodenis1992-collab.github.io/mind-pitch/

## Local preview

```bash
npx serve .
# or open index.html directly in a browser
```

## Deploy

Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## Initial setup (one-time, already done)

```bash
git init
git add .
git commit -m "Initial scaffolding"
gh repo create kravchenkodenis1992-collab/mind-pitch --public --source=. --remote=origin
git push -u origin main
# Then in GitHub UI: Settings → Pages → Source: GitHub Actions
```

## Source spec

See `docs/superpowers/specs/2026-05-05-investor-landing-design.md` in the parent workspace (mind-ai-tutor design docs).
