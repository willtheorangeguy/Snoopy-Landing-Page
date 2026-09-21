<!-- Logo -->
<h1 align="center">
  <img src="https://raw.githubusercontent.com/willtheorangeguy/Snoopy-Landing-Page/master/docs/images/logo.png" height="250px" width="400px" alt="Snoopy Landing Page">
  <br>
  Snoopy Landing Page
  <br>
</h1>

<!-- Copy -->
<h4 align="center">A simple under construction landing page that features Charles M. Schulz's iconic Snoopy Beagle.</h4>

<!-- Badges -->
<div align="center">
  <!-- Docker -->
  <img alt="Docker Build State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/docker-publish.yml/badge.svg">
  <!-- Docs -->
  <img alt="Docs State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/docs.yml/badge.svg">
  <!-- Docs Lint -->
  <img alt="Docs Lint State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/docs-lint.yml/badge.svg">
  <!-- Gitleaks -->
  <img alt="Gitleaks State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/gitleaks.yml/badge.svg">
  <!-- Version -->
  <img alt="GitHub Version" src="https://img.shields.io/github/v/release/willtheorangeguy/Snoopy-Landing-Page">
  <!-- Issues -->
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/willtheorangeguy/Snoopy-Landing-Page">
  <!-- Pull Requests -->
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/willtheorangeguy/Snoopy-Landing-Page">
  <!-- License -->
  <img alt="License" src="https://img.shields.io/github/license/willtheorangeguy/Snoopy-Landing-Page">
</div>

<!-- Navigation -->
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#support">Support</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

<!-- Screenshot -->

![screenshot](https://raw.githubusercontent.com/willtheorangeguy/Snoopy-Landing-Page/master/docs/images/landing.png)

## Key Features

- A colourful, friendly "under construction" message with a projected completion date.
- A large, memorable Snoopy image as the centrepiece.
- Links to a GitHub profile and an email address.
- Three plain-text placeholders are the only things you need to edit — no build step, no framework, no dependencies.
- One HTML file and one image: copy them to any web root and you are done.
- Ships as a Docker image, so it can also be run as a container.

## Installation

The page is a single static file. Clone it and open `index.html` in a browser:

```bash
git clone https://github.com/willtheorangeguy/Snoopy-Landing-Page.git
cd Snoopy-Landing-Page
```

Or run it as a container:

```bash
docker run -d -p 8000:80 ghcr.io/willtheorangeguy/snoopy-landing-page:master
```

Then open `http://localhost:8000`. Every install path is in [`docs/installation.md`](docs/installation.md).

## Usage

To make it your own, copy `index.html` and `snoopy.png` into the root of your web server, then replace three placeholders in `index.html`:

```bash
grep -n "%insert_time_here%\|%link_to_GitHub_profile_here%\|%your_email%" index.html
```

| Placeholder                     | Replace with                                                                                               |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `%insert_time_here%`            | When you expect to launch — an approximate date like "the end of the year" reads better than a precise one |
| `%link_to_GitHub_profile_here%` | A link to your GitHub page                                                                                 |
| `%your_email%`                  | Your email address, keeping the `mailto:` prefix so it opens in the visitor's mail client                  |

Save, upload, done. [`docs/configuration.md`](docs/configuration.md) covers the placeholders in full, along with changing the colours, the image, and the copy.

## Documentation

Full documentation is published as a site at **[williamvdg.me/Snoopy-Landing-Page/docs](https://williamvdg.me/Snoopy-Landing-Page/docs/)**, and its source lives in [`docs/`](docs/index.md):
[Getting Started](docs/getting-started.md) · [Installation](docs/installation.md) · [Configuration](docs/configuration.md) · [Architecture](docs/architecture.md) · [CI/CD](docs/ci-cd.md) · [FAQ](docs/faq.md)

## Support

Open a [GitHub Discussion](https://github.com/willtheorangeguy/Snoopy-Landing-Page/discussions/new) or file an [issue](https://github.com/willtheorangeguy/Snoopy-Landing-Page/issues/new/choose).

## Contributing

Contributions welcome. See the org-wide [Contributing Guide](https://github.com/willtheorangeguy/.github/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/willtheorangeguy/.github/blob/main/CODE_OF_CONDUCT.md).

## Credits

This software uses the following open source packages, projects, services or websites:

<!-- Credits Table -->
<table>
  <tr>
    <th align="center"><img src="https://applets.imgix.net/https%3A%2F%2Fassets.ifttt.com%2Fimages%2Fchannels%2F2107379463%2Ficons%2Fmonochrome_large.png?w=240&h=240&s=8a19bbc158996d098e2fb18310ba7f33" width="150" height="150" alt="GitHub"/></th>
    <th align="center"><img src="https://www.w3.org/assets/logos/w3c/w3c-no-bars.svg" width="150" height="150" alt="W3C"/></th>
    <th align="center"><img src="https://videos.w3schools.com/files/images/w3schools_logo_500_04AA6D.png" width="150" height="150" alt="W3Schools"/></th>
    <th align="center"><img src="https://schulzmuseum.org/wp-content/uploads/2019/06/SchulzMuseum.jpg" width="150" height="150" alt="Nginx"/></th>
  </tr>
  <tr>
    <td align="center">GitHub</td>
    <td align="center">W3C</td>
    <td align="center">W3Schools</td>
    <td align="center">Peanut Comic Strips</td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/">Web</a> - <a href="https://github.com/pricing">Plans</a></td>
    <td align="center"><a href="https://www.w3.org">Web</a> - <a href="https://www.w3.org/support/">Donate</a></td>
    <td align="center"><a href="https://www.w3schools.com">Web</a> - <a href="https://www.w3schools.com/pro/index.php">Pro</a></td>
    <td align="center"><a href="https://www.peanuts.com/">Web</a> - <a href="https://www.simonandschuster.com/series/Peanuts">Buy Books</a></td>
  </tr>
</table>

## Contributors

- [@willtheorangeguy](https://github.com/willtheorangeguy) - Sponsor on [PayPal](https://paypal.me/wvdg44?country.x=CA&locale.x=en_US)

## License

This project is licensed under the [MIT License](https://mit-license.org/) - see the [`LICENSE`](LICENSE.md) file for details.

**Snoopy, Peanuts, and the associated characters are copyright and trademarks of Peanuts Worldwide LLC.** The image is used here in tribute to Charles M. Schulz; this project is not affiliated with, endorsed by, or sponsored by Peanuts Worldwide LLC or the Charles M. Schulz Museum. Replace `snoopy.png` with your own artwork before using this page commercially.
