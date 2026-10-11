# Akhil Kumar — Personal Portfolio

> **“Building products. Engineering the platforms behind them.”**

An editorial, minimalist personal portfolio website built with clean semantic HTML5, modern vanilla CSS tokens, and JavaScript, designed for direct deployment to [Vercel](https://vercel.com).

---

## 🏛️ Design System & Aesthetic

Inspired by architectural monographs and technical publications:
- **Canvas:** Warm off-white / ivory (`#FAF8F5`)
- **Accents:** Deep forest green (`#1B4332`, hover `#143326`) with muted sage (`#D8F3DC`) and terracotta (`#C85A32`) callouts
- **Typography:**
  - Headings: [Newsreader](https://fonts.google.com/specimen/Newsreader) (editorial serif)
  - Body Copy: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (clean sans-serif)
  - Technical Metadata & Tags: [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (monospace)
- **Icons:** Google Material Symbols Outlined

---

## 📁 Repository Structure

```
Vercel_Portfolio/
├── index.html                  # Core portfolio page & semantic layout
├── vercel.json                 # Vercel static routing configuration
├── assets/
│   ├── css/
│   │   └── style.css           # Standalone design tokens, typography & accessibility rules
│   ├── js/
│   │   └── main.js             # Mobile drawer, active link observer & toast notifications
│   ├── resumes/
│   │   ├── Akhil_Kumar_Product_Resume.pdf    # Product Management & Ops Resume (Verified)
│   │   └── Akhil_Kumar_Platform_Resume.pdf   # Cloud & Platform Resume (Pending upload)
│   └── favicon.svg             # Editorial AK monogram favicon
└── README.md                   # Project documentation & deployment guide
```

---

## 🚀 Vercel Deployment Guide

Deploying directly from GitHub to Vercel:

1. **Commit and Push to GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete editorial portfolio ready for Vercel"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Log into your [Vercel Dashboard](https://vercel.com/dashboard).
   - Click **Add New...** → **Project**.
   - Select your GitHub repository: `akhilkumar0024/Vercel_Portfolio`.

3. **Configure Project Settings:**
   - **Framework Preset:** `Other` (Static HTML)
   - **Root Directory:** `./`
   - **Build Command:** *(Leave empty)*
   - **Output Directory:** `.` *(or empty)*

4. **Deploy:**
   - Click **Deploy**. Your portfolio will be live on your Vercel domain in seconds.

---

## 📄 Resume Management

The portfolio references resumes using the following exact project-relative paths:
- `assets/resumes/Akhil_Kumar_Product_Resume.pdf` *(Integrated and active)*
- `assets/resumes/Akhil_Kumar_Platform_Resume.pdf` *(Integrated and active)*

To update or add resumes, place the corresponding PDF file into the `assets/resumes/` directory with the exact filename above.

---

## 🛠️ Local Development & Preview

You can open `index.html` directly in any web browser, or launch a lightweight local server:

```bash
# Python 3
python3 -m http.server 3000

# Open in browser:
# http://localhost:3000
```
