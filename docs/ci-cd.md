# CI/CD

Three workflows run in this repository: one publishes the site, one publishes
the Docker image, and one scans for leaked secrets.

## Workflows

<div class="wt-reference" markdown>

| Workflow | Trigger | Purpose |
|---|---|---|
| `docs.yml` | Push to `master` | Publishes the landing page and this documentation site |
| `docs-lint.yml` | Pull request | Markdown style, strict docs build, link check |
| `docker-publish.yml` | Version tag `v*.*.*` | Builds and pushes the image to GHCR |
| `gitleaks.yml` | Push, pull request, manual | Scans for committed secrets |

</div>

## Docs

`docs.yml` publishes **both** halves of this repository's GitHub Pages site:

- The landing page at the root, `https://williamvdg.me/Snoopy-Landing-Page/`
- This documentation at `https://williamvdg.me/Snoopy-Landing-Page/docs/`

It contains no build logic. It calls a reusable workflow in
[willtheorangeguy/mkdocs](https://github.com/willtheorangeguy/mkdocs), passing
`docs_subpath: docs`, which tells that workflow to copy the repository to the
artifact root and nest the built documentation underneath.

!!! warning "Only one workflow may deploy to Pages"
    This workflow replaced `pages.yml`, which uploaded the repository root
    directly. Restoring it would make two workflows contend for the same Pages
    deployment, and one would fail intermittently. If the landing page needs to
    republish, extend the `paths:` filter on `docs.yml` instead.

Because this workflow owns the landing page as well as the docs, its `paths:`
filter includes `index.html` and `*.png` — a change to the page itself must
trigger a redeploy, not just a docs change.

## Docs lint

Runs on pull requests and never deploys. It checks markdown style with
markdownlint, runs `mkdocs build --strict` so that broken internal links and
bad anchors fail the build, and checks external links with lychee.

## Docker publish

Triggered by pushing a tag matching `v*.*.*`. It builds the `Dockerfile` and
pushes to `ghcr.io/willtheorangeguy/snoopy-landing-page`, with tags derived by
`docker/metadata-action` — the version, plus `latest` for the newest release.

The registry path is lowercase even though the repository name is not, because
GHCR normalises image names.

## GitLeaks

Runs on every push and pull request, and can be triggered manually. It scans
the repository for committed credentials.

## Release process

1. Update `CHANGELOG.md`.
2. Tag the commit `vX.Y.Z` and push the tag.
3. `docker-publish.yml` builds and pushes the image.
4. Publish the GitHub release.

Pushing to `master` publishes the site; only a version tag publishes an image.

{{ support() }}
