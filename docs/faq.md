# FAQ

## Common questions

???+ question "Do I need Node, a build step, or a static site generator?"

    No. The page is one HTML file with its CSS in an inline `<style>` block,
    plus two images. Copy `index.html`, `snoopy.png`, and `gear.png` to any
    static host and it works. There is nothing to compile and no dependency to
    install.

??? question "Can I use the Snoopy image on my own site?"

    Not without checking. The bundled artwork depicts a copyrighted character,
    and this repository's MIT licence covers the code, not the character.

    Replace `snoopy.png` with artwork you have the right to use before
    deploying publicly, and update the image's `title` attribute to match.
    [Configuration](configuration.md#changing-the-image) covers the three
    attributes to change.

??? question "Why is the image missing after I uploaded it?"

    `index.html` references both images by relative path, so all three files
    must sit in the same directory on your server. Uploading `index.html`
    alone, or putting the images in an `images/` subfolder without updating
    `src`, gives you a page with broken images.

??? question "Which Docker tag should I use?"

    | Tag | Contents |
    |---|---|
    | `latest` | The most recent tagged release — use this unless you have a reason not to |
    | `master` | The current state of the default branch |
    | `nightly` | Scheduled build of the default branch |
    | `v1.4.0` | Pinned to a specific release |

    Note the image name is lowercase — `ghcr.io/willtheorangeguy/snoopy-landing-page`
    — even though the repository name is not. GHCR normalises image names.

??? question "Does the page work in dark mode?"

    Yes, automatically. Colours are declared twice in the inline stylesheet:
    once for light, and once inside a `prefers-color-scheme: dark` media query.
    The page follows the visitor's system setting with no JavaScript and no
    toggle.

    If you change the colours, change both sets. Editing only the light values
    leaves the page unreadable for roughly half your visitors.

??? question "Can I host it on GitHub Pages, Netlify, or S3?"

    Yes. Three static files with no server-side runtime will work on any static
    host. This repository publishes itself to GitHub Pages, with the docs you
    are reading nested underneath at `/docs/`.

## Troubleshooting

### The page still shows `%insert_time_here%`

**Cause.** The placeholders are literal text in `index.html`. Nothing replaces
them for you — there is no templating engine.

**Fix.** Find and replace all three:

```bash
grep -n "%insert_time_here%\|%link_to_GitHub_profile_here%\|%your_email%" index.html
```

Then edit each one. [Configuration](configuration.md#placeholders) lists what
each expects.

### The contact link opens a broken page instead of an email client

**Cause.** The `mailto:` prefix was removed along with the placeholder. The
markup is `href="mailto:%your_email%"`, and replacing the whole value turns it
into a relative page link.

**Fix.** Replace only the token, keeping the prefix:

```html
<a href="mailto:you@example.com">here.</a>
```

### My edits do not appear in the Docker container

**Cause.** The `Dockerfile` uses `COPY . /usr/share/nginx/html`, which bakes
the files in at build time. It does not mount them, so an edited `index.html`
on your machine has no effect on an already-built image.

**Fix.** Rebuild the image, or mount your directory over the served path while
you work:

```bash
docker run -d -p 8000:80 -v "$(pwd)":/usr/share/nginx/html nginx:stable
```

### Editing `index.html` did nothing after a push

**Cause.** The Pages deployment only runs when the workflow's `paths:` filter
matches. If you added a new asset with an extension that is not covered, the
site will not rebuild.

**Fix.** Add the path to the `paths:` list in `.github/workflows/docs.yml`, or
trigger the workflow by hand from the Actions tab. See [CI/CD](ci-cd.md#docs).

## Getting help

{{ support() }}

When reporting a problem, include:

- Whether you are using the static files or the Docker image, and which tag
- Your browser and whether it is set to light or dark mode
- The URL where the page is deployed, if it is public
