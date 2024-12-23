# Snoopy Landing Page Customization

The Snoopy Landing Page has been designed to be heavily customizable. Images and colors can be changed, and the greeting text can fit the project timeline.

All of these instructions require [a text editor](https://code.visualstudio.com/) to be installed.

## Personalize the Timeline

This project is designed to have a personalized timeline, with variables already in place that can be easily changed.

1. Open the `index.html` file with a text editor.
2. Navigate to _Line 143_:
   - Where it says `%insert_time_here%`, replace the placeholder with the time you expect your website to be done.
   - I suggest an approximate date like "the end of the year" or "in the spring".
3. Navigate to _Line 145_:
   - Where it says `%link_to_GitHub_profile_here%`, replace the placeholder with a link to your GitHub page.
4. Navigate to _Line 146_:
   - Where is says `%your_email%`, replace the placeholder with your email address.
   - **Make sure to leave the `mailto:` in front of the address, so it opens in the visitor's email client.**
5. Save the file and upload changes to your web server.

## Change Font Colors

Changing the font colors requires a quick switch of the color values.

1. Open the `index.html` file with a text editor.
2. Navigate to the `<style>` tag.
3. Mess around with the CSS until you find colors that match your branding for light and dark modes.
4. Save the file and upload changes to your web server.

## Change the Image

Changing the image requires that you copy and paste a new image link, or change the file.

1. Upload a new image file to your web server.
2. Copy the direct link to the image file.
3. Open the `index.html` file with a text editor.
4. Navigate to _Line 138_:
   - Change the link between the `src="..."` element to the link of the new image.
   - Change the copyright information for the image between the `title="..."` element.
   - Change the alternate, accessibility text for the image between the `alt="..."` element.
5. Save the file and upload changes to your web server.
