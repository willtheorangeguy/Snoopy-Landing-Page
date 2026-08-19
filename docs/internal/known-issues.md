# Known Issues — Snoopy-Landing-Page

Concrete defects and gaps found while writing this repository's documentation in
August 2026. **Nothing here was changed** — each one needs a code, configuration, or
licensing decision rather than a documentation one.

Ordered by severity. See [`docs/roadmap.md`](../roadmap.md) for the narrative version,
which also covers deliberate non-goals.

**9 open:** 3 medium, 6 low.

## 1. The Docker image copies the entire repository into the web root

**Severity:** Medium  
**Where:** `Dockerfile`

**What:** The whole file is `FROM nginx:stable` followed by `COPY . /usr/share/nginx/html`. There is no `.dockerignore`, so the build context is everything git and the working tree hold: `.git/`, `docs/` including its Markdown sources, `mkdocs.yml`, `.mkdocs-shared/`, `overrides/`, `CHANGELOG.md`, `PLANNING.md`, `LICENSE.md`, and any local `site/` build output. nginx serves that directory, so all of it is reachable over HTTP at the matching paths.

**Why it matters:** The landing page needs exactly two files, `index.html` and `snoopy.png`. Everything else is published as a side effect. `.git/` is the part that matters: a served `.git` directory hands out the full commit history, including anything ever committed and later removed, which is the standard way secrets thought deleted get found. Nothing sensitive is known to be in this history -- gitleaks runs on the repository -- but the exposure is structural rather than about today contents, and it grows every time something new is committed. It also makes the image far larger than the two files it exists to serve.

**Suggested fix:** Add a `.dockerignore` covering at least `.git`, or better, replace the wildcard with explicit copies: `COPY index.html snoopy.png /usr/share/nginx/html/`. The explicit form cannot pick up a new file by accident, which is the failure mode here.

## 2. The published site shows the unreplaced placeholders to every visitor

**Severity:** Medium  
**Where:** `index.html` lines 145-148; `README.md` (reworded in this pass)

**What:** `index.html` still contains `%insert_time_here%`, `%link_to_GitHub_profile_here%`, and `%your_email%` as literal text. `.github/workflows/docs.yml` publishes the repository root to GitHub Pages with the documentation one level down, so the page served at the project's Pages URL renders 'We are hoping to be up and running by %insert_time_here%' and an email link pointing at `mailto:%your_email%`. The README described that URL as 'the production version of the website'.

**Why it matters:** The placeholders being literal is correct and deliberate -- `docs/architecture.md` explains that choice, and a template with pre-filled values would be worse. The problem is what gets published: the live page is the first thing anyone sees of this project, and it currently reads as a site whose templating engine failed rather than as a template awaiting values. Someone evaluating whether to use it sees a broken page, and someone who clicks the email link gets a mail client addressed to a literal percent sign.

**Suggested fix:** Either publish a demo copy with plausible values filled in -- 'the end of the year', a link to the repository, a real contact address -- or leave the placeholders and stop calling the URL a production version. The README wording is corrected in this pass; the published page is a deployment decision. A third option is a short banner in the deployed copy saying it is a template preview, which keeps one source of truth.

## 3. The README linked a customization guide that was deleted

**Severity:** Medium  
**Where:** `README.md` (corrected in this pass) -> Support section

**What:** The Support section pointed at `https://github.com/willtheorangeguy/Snoopy-Landing-Page/blob/master/docs/CUSTOMIZATION.md`. That file was removed in commit `c80c102`, 'Add MkDocs documentation site alongside the landing page', when its content moved into `docs/configuration.md`. The link had been returning a 404 since.

**Why it matters:** It was the README's only pointer to the one thing a user of this project actually needs -- how to change the colours, the image, and the text -- so the single most likely click on the page went nowhere. The replacement content exists and is better; nothing connected the two. This is the ordinary failure mode of moving documentation into a site: the site's internal links get updated because the build checks them, and the README's do not because nothing checks a README.

**Suggested fix:** Corrected in this pass -- the README now links `docs/configuration.md` and the published site. Worth adding the README to whatever the `docs-lint` workflow checks, since it is currently the only unchecked document in the repository.

## 4. The Dockerfile has a comment concatenated onto its last instruction

**Severity:** Low  
**Where:** `Dockerfile`, final line

**What:** The last line is a `LABEL org.opencontainers.image.authors=...` whose closing quote is immediately followed by `# syntax=docker/dockerfile:1`, with no separating newline and no trailing newline after it. That directive is already present, correctly, as line 1. A `#` inside an instruction is not a comment, so the fragment is parsed as part of the label value.

**Why it matters:** The image therefore carries an authors label with a stray syntax directive glued to the end of the email address, which is wrong in metadata that tooling reads. It is also a clear fingerprint of a bad edit -- the first line duplicated and pasted at the end of the file -- and the sort of thing that makes a reader distrust the rest of the file. Builds succeed, which is why it survived.

**Suggested fix:** Delete the fragment and end the file with a newline.

## 5. A README badge points at a workflow that was deliberately deleted

**Severity:** Low  
**Where:** `README.md` (corrected in this pass); `.github/workflows/`

**What:** The badge row included `actions/workflows/pages.yml/badge.svg`. There is no `pages.yml`: the workflow directory holds `docker-publish.yml`, `docs.yml`, `docs-lint.yml`, and `gitleaks.yml`. `docs.yml`'s own header comment records the reason -- 'Only one workflow may deploy to Pages. pages.yml was deleted when this was added; restoring it would make the two contend for the same deployment.' The badge was not updated with it.

**Why it matters:** A badge for a non-existent workflow renders as an inert 'no status' image, so the README showed a permanently blank build indicator among working ones. Minor on its own, but badges exist precisely to be glanced at rather than read, and one that never changes state is worse than absent -- it looks like a job that never runs. The deletion was deliberate and well-reasoned; only the badge was left behind.

**Suggested fix:** Corrected in this pass: the row now carries `docs.yml` and `docs-lint.yml`. The Discord badge was also dropped, per the org-wide removal of Discord links.

## 6. The README's edit instructions cited line numbers that had drifted

**Severity:** Low  
**Where:** `README.md` (corrected in this pass); `index.html`

**What:** The instructions read '_Line 143, Column 45_', '_Line 145, Column 16_', and '_Line 146, Column 43_' for the three placeholders. They are at lines 145, 147, and 148. The documentation site had already stopped citing positions -- `docs/configuration.md` and `docs/faq.md` both tell the reader to run `grep -n "%insert_time_here%\|%link_to_GitHub_profile_here%\|%your_email%" index.html` instead.

**Why it matters:** Two lines out is enough to send someone editing the wrong element in a file they are seeing for the first time, and the column numbers imply a precision that was never going to survive an edit to the markup above. It is a small instance of a general point: a line number is a reference that goes stale silently, and this repository had already solved it correctly in the docs while the README kept the old form.

**Suggested fix:** Corrected in this pass -- the README now uses the same `grep -n` the docs use, which cannot drift.

## 7. The Docker instructions omit the port that was just published

**Severity:** Low  
**Where:** `README.md` (corrected in this pass)

**What:** The snippet ran `docker run -d -p 8000:80 ...` and then said 'Now, navigate to localhost in your browser to see the webpage'. Plain `localhost` is port 80, which is not where the container is published.

**Why it matters:** The reader follows the instruction, gets nothing or whatever else is on port 80, and has no reason to suspect the instruction rather than the image. It is a two-character omission with a disproportionate effect, because it fails at the exact moment the user is deciding whether the container works.

**Suggested fix:** Corrected in this pass to `http://localhost:8000`.

## 8. The credits table mislabels the Schulz Museum entry

**Severity:** Low  
**Where:** `README.md` -> the credits table

**What:** The fourth column's image carries `alt="Nginx"` while its source is `schulzmuseum.org/.../SchulzMuseum.jpg`, and the entry is titled 'Peanut Comic Strips'. The strip is _Peanuts_; 'Peanut' is not its name. Left as-is in this pass -- the house rule for this sweep is to carry the credits table through verbatim.

**Why it matters:** Alt text is what a screen reader announces, so a blind visitor to this README is told the Schulz Museum logo is Nginx -- a wrong answer rather than a missing one, and Nginx is not credited anywhere here at all, which suggests the row was copied from another repository's table. The 'Peanut' spelling is the sort of thing that reads as carelessness about the work being credited, on a page whose whole subject is someone else's character.

**Suggested fix:** Change the alt text to 'Charles M. Schulz Museum' and the label to 'Peanuts'. Both are one-word edits inside the table, which is why they were left for a deliberate decision rather than folded into a documentation pass.

## 9. PLANNING.md is a three-line stub pointing at a retired GitHub feature

**Severity:** Low  
**Where:** `PLANNING.md`

**What:** The whole file is a heading and one sentence directing readers to the Issues page and to `https://github.com/willtheorangeguy/Snoopy-Landing-Page/projects?type=classic`. Classic Projects were retired by GitHub, so that URL no longer reaches a working board.

**Why it matters:** A file at the repository root implies content, and this one has none beyond two links, one of which is dead. Its practical effect is to add a row to the root listing that a reader will open once and learn nothing from. There is no planning material anywhere else in the repository, so nothing is lost by removing it -- but nothing is gained by keeping it either, which is the definition of a file worth deleting.

**Suggested fix:** Delete it, or replace it with a real roadmap. If the intent was somewhere to keep future ideas, GitHub Issues already serves that and is where the file points anyway.

---

## Also, across every repository

**`.bandit` is present on disk but untracked in git.** Verified in PyWorkout, treklogger,
skyscanner-cli, booking-cli, piggy, and aibot — the config file exists locally in each but
`git ls-files` does not know about it, so none of it reached GitHub.

The August 2026 security sweep therefore looks complete locally and landed nowhere. Worth
checking across all 44 repositories it covered.
