# Internal Setup Checklist (For Developer)

Use this checklist to ensure everything is configured correctly before handing over the site to the client.

## 1. Prerequisites
- [ ] **GitHub Repo**: Code pushed to a private/public repo.
- [ ] **Vercel Project**: Connected to the repo.
- [ ] **Resend Account**: Account created and domain verified (if possible).

## 2. API Key Configuration
You need to generate the key and add it to Vercel.

1.  Go to [Resend Dashboard](https://resend.com/overview).
2.  Create API Key named `Website Production`.
3.  Copy the key.

## 3. Deployment Configuration (Vercel)
1.  In Vercel Project Settings > Environment Variables:
    *   `RESEND_API_KEY`: Paste the key.
    *   `CONTACT_EMAIL`: Set to the client's email (`michaelscottcontractorllc@gmail.com`).

## 4. Verification
1.  Deploy the site.
2.  Visit the live URL.
3.  Submit a test form.
4.  **Important**: Check that the email arrives at `michaelscottcontractorllc@gmail.com`.

## 5. Handoff
Once verified, send the **Client Handoff** document (refer to `CLIENT_HANDOFF.md`) to the client along with the live URL.

---

**Need Help?**
Contact your developer for assistance with these steps.
