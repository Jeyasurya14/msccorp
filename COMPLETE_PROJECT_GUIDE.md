# MSCCORP Website - Complete Project Guide

Welcome to the documentation for your professional website. This document provides a complete overview of the project, including how it is structured, how to run it, and how to deploy it.

## 1. Project Overview

This website is a high-performance, modern web application built for **Michael Scott Contractor LLC**. It is designed to be fast, secure, and SEO-friendly.

### Technology Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: JavaScript (React 19)
- **Styling**: Tailwind CSS v4 & Lucide React Icons
- **Forms**: React Hook Form + Zod Validation
- **Email Service**: Resend (for reliable contact form delivery)
- **Animations**: Framer Motion

---

## 2. File Structure Explanation

Here is a guide to the most important files and folders in your project:

- **`app/`**: This is the heart of your application.
  - **`page.js`**: The Homepage content.
  - **`layout.js`**: The main wrapper for your site (contains Navbar, Footer, and Fonts).
  - **`globals.css`**: Global design styles and Tailwind configuration.
  - **`api/contact/route.js`**: The backend code that handles contact form emails.
  - **`services/page.js`, `about/page.js`, `contact/page.js`**: Specific pages of your website.

- **`components/`**: Reusable building blocks.
  - **`ui/`**: Basic UI elements like Buttons, Inputs, and Cards.
  - **`Navbar.jsx` & `Footer.jsx`**: The navigation and footer bars.

- **`public/`**: Static assets like images, logos, and icons.
  - Images placed here are accessible via `yourdomain.com/image.png`.

- **`.env`**: (Hidden file) Stores sensitive keys like API passwords. **Never share this file publically.**
- **`package.json`**: Lists all the software libraries your project needs to run.

---

## 3. Environment Variables (Configuration)

This project requires a few special "keys" to function correctly, specifically for sending emails. These are stored in a `.env` file locally and in the "Environment Variables" section of your hosting provider.

| Variable Name          | Description                                                                 | Example / Default |
|------------------------|-----------------------------------------------------------------------------|-------------------|
| `RESEND_API_KEY`       | **Required**. The API key from Resend.com to allow sending emails.          | `re_12345678...`  |
| `CONTACT_EMAIL`        | The email address where you want to receive contact form inquiries.           | `michaelscottcontractorllc@gmail.com` |
| `NEXT_PUBLIC_SITE_URL` | The live URL of your website. Used for SEO and links.                       | `https://msccorp.co` |

> **Note:** If `CONTACT_EMAIL` is not set, it defaults to `michaelscottcontractorllc@gmail.com`.

---

## 4. Installation & Local Development

If you or a developer wants to run this website on a personal computer:

1.  **Install Node.js**: Download and install [Node.js](https://nodejs.org/) (Version 18 or higher).
2.  **Open the Project**: Open this folder in a code editor like VS Code.
3.  **Install Dependencies**: Open the terminal and run:
    ```bash
    npm install
    ```
4.  **Set Environment Variables**: Create a file named `.env` in the root folder and add your keys (see Section 3).
5.  **Start the Server**:
    ```bash
    npm run dev
    ```
6.  **View Site**: Open your browser and go to `http://localhost:3000`.

---

## 5. Complete Deployment Guide

The easiest and recommended way to deploy this Next.js application is using **Vercel** (the creators of Next.js).

### Step-by-Step Deployment

1.  **Push to GitHub**: Ensure your project code is uploaded to a GitHub repository.
2.  **Create Vercel Account**: Go to [vercel.com](https://vercel.com/signup) and sign up.
3.  **Import Project**:
    - Click "Add New..." > "Project".
    - Select your GitHub repository (`msccorp`).
4.  **Configure Project**:
    - **Framework Preset**: Should automatically detect "Next.js".
    - **Root Directory**: Leave as `./`.
    - **Environment Variables**: Expand this section and add the keys from Section 3 (`RESEND_API_KEY`, `CONTACT_EMAIL`, `NEXT_PUBLIC_SITE_URL`).
5.  **Deploy**: Click "Deploy".
    - Vercel will build your site. This takes about 1-2 minutes.
6.  **Success**: Once finished, you will get a live URL (e.g., `msccorp.vercel.app`).
    - You can connect your custom domain (`msccorp.co`) in the Vercel project settings under "Domains".

---

## 6. Making Updates

To change simple text or content:
1.  Open the file corresponding to the page (e.g., `app/page.js` for Home).
2.  Find the text you want to change within the code.
3.  Edit the text, save the file, and commit/push the changes to GitHub.
4.  Vercel will **automatically** re-deploy your site with the new changes.
