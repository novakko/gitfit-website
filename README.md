<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1s6em4M_jXBjWvxh8OOGydnYADtAPRxw5

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploying (important)

This is a Vite + React site. The hosting provider must serve the **built** output from `dist/`.

If you deploy the repository files directly (without running the build), you can get a blank page because `index.html` won’t load the React entry module.

Build locally:

- `npm install`
- `npm run build`

Then deploy the contents of `dist/` to your static host.

### GitHub Pages (recommended)

GitHub Pages cannot run Vite/React source files directly (it will serve `index.html`/`index.tsx` as-is, and the browser cannot execute TSX/TypeScript). You must publish the **built** site.

This repo includes a workflow at `.github/workflows/deploy-pages.yml` that builds the site and deploys the `dist/` folder to Pages.

1. In GitHub, open your repo → **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or re-run the workflow under the **Actions** tab).

Custom domain: the file `public/CNAME` is included in the build output so Pages keeps using `gitfit.health`.
