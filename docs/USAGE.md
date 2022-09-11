# Snoopy Landing Page Usage

To install and run the Snoopy Landing Page, you can run the scripts from GitHub, or run a [Docker](https://www.docker.com/) container from [GitHub Packages](https://github.com/users/willtheorangeguy/packages/container/package/snoopy-landing-page).

## GitHub Scripts

1. To install the Snoopy Landing Page, download the latest `.zip` file from [GitHub Releases](https://github.com/willtheorangeguy/Snoopy-Landing-Page/releases/latest) page.
2. Extract the `.zip` file using a program like [7-Zip](https://www.7-zip.org/).
3. Copy the `index.html` file to the location on your website server where you want the landing page.
4. Edit the `index.html` file following the instructions in [`CUSTOMIZATION`](CUSTOMIZATION.md).
5. Save the file and upload it to your website server.
6. You're all set!

## Docker Container

1. Download and install [Docker](https://www.docker.com/products/docker-desktop/).
2. Open a terminal and pull the container: `docker pull ghcr.io/willtheorangeguy/Snoopy-Landing-Page:main`.
3. Start the container: `docker run -d -p 8000:80 ghcr.io/willtheorangeguy/Snoopy-Landing-Page:main`.
4. Head to [http://localhost:8000/](http://localhost:8000/).
5. Enjoy the website!
