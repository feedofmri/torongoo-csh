# 🚀 GitHub Pages Deployment Guide

## The Issue You Encountered

When you tried to open `index.html` directly in GitHub Pages, you got 404 errors because:

1. **Vite apps need to be BUILT first** - The source files need to be compiled
2. **Base path issue** - GitHub Pages serves from `/repository-name/` not root `/`
3. **Module imports** - Browser can't resolve React imports without bundling

## ✅ Solution: Proper Deployment

### Method 1: Automatic Deployment (Recommended)

I've created a GitHub Actions workflow that automatically builds and deploys when you push to the repository.

#### Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Click **Save**

#### Step 2: Update Base Path (if needed)

If your repository name is NOT `torongoo-csh`, update `vite.config.js`:

```javascript
base: '/YOUR-REPO-NAME/', // Replace with your actual repo name
```

#### Step 3: Push to GitHub

```powershell
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

#### Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Watch the deployment workflow run (takes 1-2 minutes)
3. Once complete, your app will be live at:
   ```
   https://YOUR-USERNAME.github.io/torongoo-csh/
   ```

---

### Method 2: Manual Deployment

If you prefer to deploy manually:

#### Step 1: Build the Project

```powershell
npm run build
```

This creates a `dist/` folder with compiled files.

#### Step 2: Deploy the `dist` folder

**Option A: Using GitHub Pages from a branch**

1. Create a `gh-pages` branch
2. Copy contents of `dist/` to root of that branch
3. Push to GitHub
4. Enable GitHub Pages in Settings → Pages → Source: `gh-pages` branch

**Option B: Using a deployment tool**

```powershell
# Install gh-pages package
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

---

## 🔧 Configuration Details

### Vite Config Updated

I've updated `vite.config.js` to include:

```javascript
base: '/torongoo-csh/'
```

This tells Vite to generate URLs like:
- ✅ `/torongoo-csh/assets/index.js`
- ❌ NOT `/assets/index.js` (which causes 404)

### GitHub Actions Workflow

Located at `.github/workflows/deploy.yml`:

- **Triggers**: On push to `main` branch
- **Steps**:
  1. Checkout code
  2. Install Node.js 20
  3. Install dependencies (`npm ci`)
  4. Build project (`npm run build`)
  5. Deploy to GitHub Pages

---

## 🎯 Quick Start (Automatic Deployment)

```powershell
# 1. Make sure vite.config.js has correct base path
# 2. Commit all changes
git add .
git commit -m "Setup GitHub Pages deployment"

# 3. Push to GitHub
git push origin main

# 4. Enable GitHub Pages in repo settings (Source: GitHub Actions)

# 5. Wait 1-2 minutes and visit:
# https://YOUR-USERNAME.github.io/torongoo-csh/
```

---

## 📋 Pre-Deployment Checklist

- [ ] `npm install` completed successfully
- [ ] `npm run build` works without errors
- [ ] `vite.config.js` has correct `base` path
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled in Settings
- [ ] Source set to "GitHub Actions"

---

## 🐛 Troubleshooting

### Issue: 404 on all pages
**Solution**: Check `base` in `vite.config.js` matches your repo name

### Issue: Blank page after deployment
**Solution**: 
1. Check browser console for errors
2. Verify `base` path is correct
3. Try hard refresh: `Ctrl + Shift + R`

### Issue: GitHub Actions workflow fails
**Solution**:
1. Check Actions tab for error details
2. Ensure GitHub Pages is enabled
3. Verify permissions in Settings → Actions → General

### Issue: "Failed to load module"
**Solution**: You're trying to open source files directly. Must build first!

---

## 🔄 Update Workflow

When you make changes:

```powershell
# 1. Make your changes to code
# 2. Test locally
npm run dev

# 3. Build to verify
npm run build

# 4. Commit and push
git add .
git commit -m "Your changes"
git push origin main

# 5. GitHub Actions automatically deploys!
```

---

## 🌐 Alternative Hosting Options

If GitHub Pages doesn't work for you:

### Vercel (Easiest - Recommended)
```powershell
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
- Free hosting
- Automatic HTTPS
- Auto-deploys on git push
- No base path issues!

### Netlify
```powershell
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Cloudflare Pages
1. Go to pages.cloudflare.com
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Build output: `dist`
5. Done!

---

## 📁 What Gets Deployed

After building, the `dist/` folder contains:

```
dist/
├── index.html         (Main HTML file)
├── assets/
│   ├── index-[hash].js    (Bundled React app)
│   ├── index-[hash].css   (Bundled styles)
│   └── ... (other assets)
└── vite.svg          (Icon)
```

**This is what GitHub Pages serves** - NOT your source files!

---

## ✨ Benefits of Automatic Deployment

- ✅ No manual build step
- ✅ Deploys on every push
- ✅ Always up-to-date
- ✅ Free hosting
- ✅ HTTPS included
- ✅ Fast CDN delivery

---

## 🎊 You're All Set!

Your app is now configured for GitHub Pages deployment!

**Next steps:**
1. Push code to GitHub
2. Enable GitHub Pages (Source: GitHub Actions)
3. Wait for deployment
4. Share your link: `https://YOUR-USERNAME.github.io/torongoo-csh/`

---

## 📞 Quick Reference

**Build locally:**
```powershell
npm run build
```

**Preview build:**
```powershell
npm run preview
```

**Deploy (automatic):**
```powershell
git push origin main
```

**Your live URL:**
```
https://YOUR-USERNAME.github.io/torongoo-csh/
```

---

**Happy Deploying! 🚀**

