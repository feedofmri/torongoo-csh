# 🚀 Quick Start Guide - Torongoo CSH

## Step 1: Install Dependencies

Open your terminal (PowerShell) in the project directory and run:

```powershell
npm install
```

This will install all required packages:
- React 18.3.1
- React DOM 18.3.1
- Vite 5.4.2
- Tailwind CSS 3.3.6
- Lucide React (icons)
- React Hot Toast (notifications)

## Step 2: Start Development Server

After installation completes, run:

```powershell
npm run dev
```

The app will start on `http://localhost:5173`

## Step 3: Open in Browser

Navigate to the URL shown in the terminal (usually http://localhost:5173)

## 🎯 How to Use the App

### Browse Products
- The homepage displays all 5 products in a grid layout
- Each card shows: Product emoji, name, category badge, and price

### Search Functionality
- Use the sticky search bar at the top
- Search by:
  - Product name (e.g., "Bunny", "Mirror", "Torch")
  - Category (e.g., "Gadget", "Decor", "Lighting")
  - Script content (e.g., "Price", "Gift", "Color")

### View & Copy Scripts
1. Click any product card to open the detail modal
2. Browse through all reply scripts for that product
3. Click the blue "Copy" button next to any script
4. The script is copied to your clipboard
5. A "Copied!" toast notification appears
6. Paste the script in WhatsApp/Messenger

## 📱 Mobile Optimization

- The app is mobile-first designed
- Large tap targets (buttons are 48px+ minimum)
- Modal slides up from bottom on mobile
- Works seamlessly on phones while using messaging apps

## 🎨 Features Implemented

✅ Product Dashboard with Grid Layout
✅ Global Search (searches products, categories, and scripts)
✅ Product Detail Modal with Smooth Animations
✅ One-Click Copy to Clipboard
✅ Toast Notifications for Copy Feedback
✅ Responsive Design (Mobile/Tablet/Desktop)
✅ Torongoo Brand Colors
✅ Category Color Coding
✅ Bengali Script Support

## 🛠️ Build for Production

When ready to deploy:

```powershell
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📂 Project Structure

```
torongoo-csh/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx          # Product card component
│   │   ├── SearchBar.jsx            # Search input component
│   │   └── ProductDetailModal.jsx   # Modal with scripts
│   ├── data/
│   │   └── products.js              # Product data (5 products)
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Tailwind imports
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── tailwind.config.js               # Tailwind configuration
├── postcss.config.js                # PostCSS config
└── vite.config.js                   # Vite configuration
```

## 🎨 Customization

### To Add More Products:
Edit `src/data/products.js` and add new product objects.

### To Change Colors:
Edit `tailwind.config.js` - all brand colors are defined there.

### To Add More Script Categories:
Simply add more script objects to any product in `products.js`.

## 💡 Tips

- Keep the app open while chatting with customers
- Use Ctrl+F in browser to quickly find specific keywords
- The search is case-insensitive and searches everywhere
- Scripts maintain Bengali formatting when copied

## 🐛 Troubleshooting

**If `npm install` fails:**
- Make sure Node.js 16+ is installed
- Delete `node_modules` folder and try again

**If the app doesn't open:**
- Check if port 5173 is available
- Try `npm run dev -- --port 3000` to use a different port

**If copy doesn't work:**
- Make sure you're using HTTPS or localhost
- Check browser clipboard permissions

---

Built with ❤️ for Torongoo Customer Support Team

