# Configuration

Everything configurable lives in `index.html`. There is no config file, no
build step, and no environment variable — you edit the markup directly with a
text editor.

## Placeholders

Four values are marked with `%...%` tokens. Search for the token rather than
navigating to a line number: the line numbers shift whenever the file changes.

<div class="wt-reference" markdown>

| Token | Appears in | Replace with |
|---|---|---|
| `%insert_time_here%` | Body copy | When you expect to launch |
| `%link_to_GitHub_profile_here%` | `href` of the GitHub link | Your GitHub profile URL |
| `%your_email%` | `href` of the contact link | Your email address |

</div>

```html
We are hoping to be up and running by %insert_time_here% <br />
```

!!! warning "Keep the `mailto:` prefix"
    The email link is written as `href="mailto:%your_email%"`. Replace only the
    token. Removing `mailto:` turns it into a relative page link, and the
    visitor's mail client will not open.

### Finding them

```bash
grep -n "%insert_time_here%\|%link_to_GitHub_profile_here%\|%your_email%" index.html
```

## Changing the image

The main illustration is an `<img>` element referencing `snoopy.png`.

1. Add your image beside `index.html`, or upload it and copy its direct URL.
2. Find the `<img>` element:

    ```bash
    grep -n "snoopy.png" index.html
    ```

3. Update three attributes on it:

    | Attribute | Purpose |
    |---|---|
    | `src` | Path or URL of the image |
    | `title` | Copyright and attribution for the image |
    | `alt` | Description for screen readers and when the image fails to load |

!!! warning "Snoopy is not yours to redistribute"
    The bundled artwork depicts a copyrighted character. If you deploy this
    page publicly, replace the image with one you have the right to use, and
    update the `title` attribute to match.

## Changing the colours

The stylesheet is an inline `<style>` block near the top of `index.html`.
Colours are declared once for light mode and again inside a
`prefers-color-scheme: dark` media query.

Change both. Editing only the light values leaves the page unreadable for
visitors whose system is set to dark mode, which is roughly half of them.

```bash
grep -n "prefers-color-scheme" index.html
```

## After editing

Open `index.html` directly in a browser to check your changes, then re-upload
it. If you are running the Docker image, rebuild it so the edited file is
copied in — the image bakes the files in at build time rather than mounting
them.

## Invalid values

Nothing validates these edits. A malformed URL or a broken `src` path fails
silently in the browser rather than producing an error, so check the rendered
page after every change.

{{ support() }}
