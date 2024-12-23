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
  <!-- Stability -->
  <img alt="Docker Build State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/docker-publish.yml/badge.svg">
  <!-- Stability -->
  <img alt="GitHub Pages State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/pages.yml/badge.svg">
  <!-- Gitleaks -->
  <img alt="Gitleaks State" src="https://github.com/willtheorangeguy/Snoopy-Landing-Page/actions/workflows/gitleaks.yml/badge.svg">
  <!-- Version -->
  <img alt="GitHub Version" src="https://img.shields.io/github/v/release/willtheorangeguy/Snoopy-Landing-Page">
  <!-- Issues -->
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/willtheorangeguy/Snoopy-Landing-Page">
  <!-- Pull Requests -->
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/willtheorangeguy/Snoopy-Landing-Page">
  <!-- Discord -->
  <img alt="Discord Server ID" src="https://img.shields.io/discord/960376610240987176">
  <!-- Downloads -->
  <img alt="Downloads" src="https://img.shields.io/github/downloads/willtheorangeguy/Snoopy-Landing-Page/total">
  <!-- Language Count -->
  <img alt="GitHub Languages" src="https://img.shields.io/github/languages/count/willtheorangeguy/Snoopy-Landing-Page">
</div>

<!-- Navigation -->
<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#download">Download</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#support">Support</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#changelog">Changelog</a> •
  <a href="#credits">Credits & Contributors</a>
</p>

<!-- Screenshot(s) -->

![screenshot](https://raw.githubusercontent.com/willtheorangeguy/Snoopy-Landing-Page/master/docs/images/landing.png)

## Key Features

- Display a colorful and informative welcome text.
- Display a large, memorable Snoopy image.
- Includes links to GitHub profile and email.
- Includes a projected completion date.
- Cross platform, browser based.

## Download

You can **[download](https://github.com/willtheorangeguy/Snoopy-Landing-Page/releases/latest) the source code** to modify the code and create your own landing page.

You can also access the **production version the website**, available on all platforms, **[here](https://willtheorangeguy.github.io/Snoopy-Landing-Page/)**.

## How To Use

To clone and run this website, you'll need [Git](https://git-scm.com/downloads) installed on your computer. If you would rather not use Git, you can just download the code from GitHub above. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/willtheorangeguy/Snoopy-Landing-Page.git

# Go into the repository
$ cd Snoopy-Landing-Page

# Run the webpage
$ index.html
```

You can also pull the [Docker](https://www.docker.com/) image from GitHub Packages. From your command line:

```bash
# Pull image
$ docker pull ghcr.io/willtheorangeguy/snoopy-landing-page:master

# Run container
$ docker run -d -p 8000:80 ghcr.io/willtheorangeguy/snoopy-landing-page:master

# Now, navigate to localhost in your browser to see the webpage
```

However, **if you want to edit the page and make it your own**, follow the steps below:

1. Copy the following files into the root of your web server:

- `index.html`
- `snoopy.png`

2. Edit the `index.html` file using a [text editor](https://code.visualstudio.com/) in the following three places:

   - _Line 143, Column 45_: Where it says `%insert_time_here%`, replace the placeholder with the time you expect your website to be done. I suggest an approximate date like "the end of the year" or "in the spring".
   - _Line 145, Column 16_: Where it says `%link_to_GitHub_profile_here%`, replace the placeholder with a link to your GitHub page.
   - _Line 146, Column 43_: Where is says `%your_email%`, replace the placeholder with your email address. Make sure to leave the `mailto:` in front of the address, so it opens in the visitor's email client.

3. Save the file and upload it to the root of your website server.
4. You're all set!

## Support

Further customization options for colors, images and text can be found in [`CUSTOMIZATION`](https://github.com/willtheorangeguy/Snoopy-Landing-Page/blob/master/docs/CUSTOMIZATION.md). More documentation is available in the **[Documentation](https://github.com/willtheorangeguy/Snoopy-Landing-Page/tree/main/docs)** and on the **[Wiki](https://github.com/willtheorangeguy/Snoopy-Landing-Page/wiki)**. If more support is required, please open a **[GitHub Discussion](https://github.com/willtheorangeguy/Snoopy-Landing-Page/discussions/new)** or join our **[Discord](https://discord.gg/TXR962YrGV)**.

## Contributing

Please contribute using [GitHub Flow](https://guides.github.com/introduction/flow). Create a branch, add commits, and [open a pull request](https://github.com/willtheorangeguy/Snoopy-Landing-Page/compare).

Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the process for submitting pull requests to us.

## Changelog

See the [`CHANGELOG`](CHANGELOG.md) file for details.

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

## You may also like...

- [Running Calculator](https://github.com/willtheorangeguy/Running-Calculator) - A running speed calculator for any unit of distance.
- [PyWorkout](https://github.com/willtheorangeguy/PyWorkout) - A minimal CLI to keep you inspired during your workout! Easily used and customized, with support for multiple workout plans, different muscle groups and video workouts.
- [PyAvatar](https://github.com/willtheorangeguy/PyAvatar) - Easily display all of your creative avatars to keep them consistent across websites.

## License

This project is licensed under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html) - see the [`LICENSE`](LICENSE.md) file for details. See the [Privacy Policy](https://github.com/willtheorangeguy/Snoopy-Landing-Page/blob/main/docs/legal/PRIVACY.md) and [Terms and Conditions](https://github.com/willtheorangeguy/Snoopy-Landing-Page/blob/main/docs/legal/TERMS.md) for legal information.
