# ✈️ TravelMate AI — Deployment-Ready Website

India's smartest AI-powered travel guide & booking platform.

## 🚀 Deploy in 60 Seconds

### Option 1: Netlify (Recommended — Free)
1. Go to [netlify.com](https://netlify.com) → **Sign up free**
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag & drop the entire `travelmate/` folder
4. ✅ Live in ~15 seconds!

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --dir . --prod
```

### Option 2: Vercel (Free)
1. Go to [vercel.com](https://vercel.com) → Sign up
2. Click **"Add New Project"** → **"Deploy from file"**
3. Upload the folder or connect GitHub repo
4. ✅ Done!

Or via CLI:
```bash
npm install -g vercel
vercel --prod
```

### Option 3: GitHub Pages (Free)
1. Create a new GitHub repo
2. Upload all files to repo root
3. Go to **Settings → Pages → Source: main branch**
4. ✅ Live at `yourusername.github.io/reponame`

### Option 4: Any Static Host
Just upload `index.html` to any static host:
- **Render.com** — Static site, free tier
- **Surge.sh** — `surge . yourdomain.surge.sh`
- **Firebase Hosting** — `firebase deploy`
- **AWS S3** + CloudFront
- **Cloudflare Pages**

---

## 📁 File Structure

```
travelmate/
├── index.html        ← Complete website (single file, no build needed)
├── netlify.toml      ← Netlify config (redirects + headers)
├── vercel.json       ← Vercel config
├── 404.html          ← GitHub Pages SPA redirect
└── README.md         ← This file
```

---

## ✅ Features Included

| Feature | Status |
|---------|--------|
| Glassmorphism Navbar | ✅ |
| Dark / Light Mode Toggle | ✅ |
| Animated Hero Section | ✅ |
| Search with Budget Filter | ✅ |
| Skeleton Loading States | ✅ |
| Destination Cards + Wishlist | ✅ |
| AI Budget Recommendations | ✅ |
| Features Section | ✅ |
| Pricing with Annual Toggle | ✅ |
| Testimonials | ✅ |
| Auth Modal (Login/Signup) | ✅ |
| Toast Notifications | ✅ |
| Mobile Responsive | ✅ |
| Scroll Animations | ✅ |
| SEO Meta Tags | ✅ |
| Security Headers | ✅ |
| No Dependencies / Build Step | ✅ |

---

## 🔌 Backend Integration

To connect a real backend, update these functions in `index.html`:

```javascript
// Search API
async function doSearch() {
  const res = await fetch(`/api/places?city=${city}&budget=${selectedBudget}`);
  const data = await res.json();
  renderDestinations(data);
}

// Auth
async function handleAuth(e, type) {
  const res = await fetch(`/api/auth/${type}`, {
    method: 'POST', headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ email, password })
  });
  const { token } = await res.json();
  localStorage.setItem('token', token);
}
```

---

## 📊 Tech Stack
- **Zero dependencies** — Pure HTML + CSS + Vanilla JS
- **Google Fonts** — Clash Display + Sora
- **No build step** — Works directly from the browser

---

© 2025 TravelMate AI. Made with ❤️ for Indian travelers.
