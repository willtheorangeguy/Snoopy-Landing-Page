# Installation

The landing page deploys as three static files, or as a Docker image serving
them through nginx.

## Requirements

| Requirement | Version | Notes |
|---|---|---|
| A web server | any | Static hosting is enough; no server-side runtime |
| Docker | any | Only for the container install |

## Install

=== "Static files"

    1. Download the latest `.zip` from the
       [releases page](https://github.com/willtheorangeguy/Snoopy-Landing-Page/releases/latest),
       or clone the repository.
    2. Extract it.
    3. Copy `index.html`, `snoopy.png`, and `gear.png` to your web server,
       keeping all three in the same directory.
    4. Edit `index.html` as described in [Configuration](configuration.md).

    All three files must sit together — `index.html` references the two images
    by relative path.

=== "Docker"

    ```bash
    docker pull ghcr.io/willtheorangeguy/snoopy-landing-page:latest
    ```

    ```bash
    docker run -d -p 8000:80 ghcr.io/willtheorangeguy/snoopy-landing-page:latest
    ```

    Then open [http://localhost:8000/](http://localhost:8000/).

    The image is `nginx:stable` with the repository copied into
    `/usr/share/nginx/html`, so it serves the page on port 80 inside the
    container.

### Available image tags

| Tag | Contents |
|---|---|
| `latest` | The most recent tagged release |
| `master` | The current state of the default branch |
| `nightly` | Scheduled build of the default branch |
| `v1.4.0` | A specific release |

## Verify the installation

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8000/
```

```text
200
```

## Upgrading

=== "Static files"

    Download the new release and replace the three files. Reapply your
    placeholder edits — they live in `index.html`, which is overwritten.

=== "Docker"

    ```bash
    docker pull ghcr.io/willtheorangeguy/snoopy-landing-page:latest
    ```

## Uninstalling

Delete the three files from your web server, or remove the container:

```bash
docker rm -f <container-id>
```

{{ support() }}
