# Snoopy Landing Page

A single-file "under construction" landing page featuring Charles M. Schulz's
Snoopy. Drop `index.html` on a web server, replace four placeholders, and you
have a holding page that adapts to light and dark mode.

There is no build step, no framework, and no dependency. The page is one HTML
file with an inline `<style>` block and two images beside it.

## Key features

- One file to deploy: `index.html`, plus `snoopy.png` and `gear.png`.
- Light and dark mode, following the visitor's system setting.
- Four placeholders to fill in: expected launch time, GitHub link, contact
  email, and the image.
- Ships as a Docker image serving the page through nginx.

## Quick start

```bash
docker run -d -p 8000:80 ghcr.io/willtheorangeguy/snoopy-landing-page:latest
```

Then open [http://localhost:8000/](http://localhost:8000/).

See [Getting started](getting-started.md) to deploy your own copy.

## Where to next

<div class="wt-grid" markdown>

[:material-rocket-launch: **Getting started**<br>Deploy and personalise in ten minutes](getting-started.md){ .wt-card }

[:material-download: **Installation**<br>Static files or Docker](installation.md){ .wt-card }

[:material-tune: **Configuration**<br>Every placeholder and how to change it](configuration.md){ .wt-card }

[:material-sitemap: **Architecture**<br>How the single file is put together](architecture.md){ .wt-card }

[:material-cog-sync: **CI/CD**<br>The workflows that publish it](ci-cd.md){ .wt-card }

[:material-hand-heart: **Contributing**<br>How to help](https://github.com/willtheorangeguy/.github/blob/main/CONTRIBUTING.md){ .wt-card }

</div>

## Support

More background is on the
[project wiki](https://github.com/willtheorangeguy/Snoopy-Landing-Page/wiki).

{{ support() }}
