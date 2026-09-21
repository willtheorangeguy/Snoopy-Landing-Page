# Getting started

By the end of this page you will have the landing page running locally, with
your own launch date, GitHub link, and contact address in place.

## Prerequisites

| Requirement | Minimum version | Check with |
|---|---|---|
| A text editor | any | — |
| Docker | any | `docker --version` |

Docker is only needed to preview the page locally. Deploying to a web server
needs nothing but the ability to upload files.

## Run it locally

```bash
docker run -d -p 8000:80 ghcr.io/willtheorangeguy/snoopy-landing-page:latest
```

```text
http://localhost:8000/
```

Open that address and you should see Snoopy, a heading, and placeholder text
where your details will go.

## Personalise it

1. Get your own copy of the files.

    ```bash
    git clone https://github.com/willtheorangeguy/Snoopy-Landing-Page.git
    cd Snoopy-Landing-Page
    ```

2. Open `index.html` in a text editor and search for `%insert_time_here%`.
    Replace it with when you expect to launch. An approximate phrase reads
    better than a date: "the end of the year", "in the spring".

3. Search for `%link_to_GitHub_profile_here%` and replace it with your GitHub
    profile URL.

4. Search for `%your_email%` and replace it with your email address. Leave the
    `mailto:` prefix in front of it, or the link will not open a mail client.

5. Save the file and open it directly in a browser to check your changes.

    Every placeholder is documented in [Configuration](configuration.md),
    along with how to change the image and the colours.

## Deploy it

Copy `index.html`, `snoopy.png`, and `gear.png` to your web server, keeping all
three in the same directory. There is no build step.

## What just happened

The page is a single HTML file with its CSS in an inline `<style>` block and
two images beside it. The placeholders are plain text in the markup, which is
why a find-and-replace in any editor is enough to personalise it — there is no
templating engine involved.

## Next steps

- [Configuration](configuration.md) — every placeholder, colour, and image
- [Installation](installation.md) — static files or Docker
- [Architecture](architecture.md) — how the file is structured

{{ support() }}
