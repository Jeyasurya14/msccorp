# MSC Corp Website Maintenance Guide

This guide provides instructions on how to manage and maintain the MSC Corp website.

## 1. Updating Content

### Editing Text
Most of the website's text content is located in the `app` directory.

- **Homepage**: Edit `app/page.js`. Look for sections like "Hero Section", "Services Overview", or "Why Choose Us".
- **About Page**: Edit `app/about/page.js`.
- **Services Page**: Edit `app/services/page.js`.
- **Contact Page**: Edit `app/contact/page.js`.
- **Footer**: Edit `components/Footer.js` to change the footer text, links, or contact info.

### Updating Images
Images are stored in the `public` folder.

1.  **Replace an image**: Save the new image with the *exact same name* as the old one in the `public` folder. This will automatically update it on the site.
2.  **Add a new image**:
    - Add the file to the `public` folder.
    - Open the relevant page file (e.g., `app/page.js`).
    - Update the `src` or `image` path to point to your new file (e.g., `/my-new-image.jpg`).

## 2. Managing Projects

To update the "Companies we’ve contracted with" section on the homepage:

1.  Open `app/page.js`.
2.  Search for the "Project Gallery" section.
3.  You will see a list of projects in the code, like this:
    ```javascript
    { name: "Perfumania", image: "/project-perfumania.png" },
    ```
4.  **Add a project**: Add a new line with the name and image path.
5.  **Remove a project**: Delete the corresponding line.

## 3. Deployment

When you have made changes and are ready to publish:

1.  **Test Locally**: Run `npm run dev` in your terminal to preview changes.
2.  **Build**: Run `npm run build` to ensure there are no errors.
3.  **Deploy**: Push your changes to your Git repository (GitHub/GitLab). If you have Vercel or Netlify connected, it will automatically deploy the alterations.

## 4. Updates & Security

-   **Dependencies**: Periodically run `npm update` to keep software libraries secure and up-to-date.
-   **Backups**: Ensure your code is pushed to a remote repository (like GitHub) so you always have a copy.

For further technical details, refer to `client_handoff.md` or `complete_project_guide.md`.
