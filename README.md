# TakASnap Photography Portfolio

## 📁 Folder Structure

```
TakASnap/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript functionality
├── config.js           # Portfolio configuration (EDIT THIS!)
├── README.md           # This file
└── images/             # Your photos go here
    ├── featured/       # Featured/best work
    ├── landscapes/     # Landscape photos
    ├── wildlife/       # Wildlife/animal photos
    ├── portraits/      # Portrait photos
    ├── urban/          # Urban/street photos
    └── nature/         # Nature/macro photos
```

## 🚀 How to Add Your Photos

### Step 1: Add Photos to Folders
1. Copy your photos into the appropriate category folders in `images/`
2. Supported formats: JPG, JPEG, PNG
3. Recommended: Optimize images for web (compress to reduce file size)

### Step 2: Update config.js
Open `config.js` and add your images to each category:

```javascript
landscapes: {
    name: "LANDSCAPES",
    active: true,
    images: [
        { src: 'images/landscapes/mountain-sunset.jpg', title: 'MOUNTAIN SUNSET' },
        { src: 'images/landscapes/ocean-view.jpg', title: 'OCEAN VIEW' },
        { src: 'images/landscapes/forest-path.jpg', title: 'FOREST PATH' }
    ]
}
```

### Step 3: Customize Categories
- **Hide categories with few images:** Set `active: false`
- **Rename categories:** Change the `name` property
- **Reorder categories:** Rearrange them in config.js

Example - hiding a category:
```javascript
portraits: {
    name: "PORTRAITS",
    active: false,  // This category won't show in navigation
    images: []
}
```

## 🎨 Professional Tips

### For Mixed Content:
1. **Use "FEATURED"** - Put your best 6-12 photos here, regardless of category
2. **Combine similar categories** - If you only have 2-3 wildlife photos, combine with nature
3. **Hide sparse categories** - Better to have 3 strong categories than 6 weak ones

### Recommended Category Counts:
- ✅ **6-15 photos** per category = Professional
- ⚠️ **3-5 photos** = Consider combining categories
- ❌ **1-2 photos** = Hide this category for now

### Image Quality:
- Resolution: 1920px on longest side
- File size: Under 500KB per image
- Format: JPG (best for photos)

## 📝 Customization

### Change Site Name:
In `config.js`:
```javascript
siteTitle: "Your Name Photography"
```

### Update About Section:
```javascript
about: {
    title: "ABOUT",
    content: [
        "Your first paragraph here...",
        "Your second paragraph here..."
    ]
}
```

### Update Contact Info:
```javascript
contact: {
    email: "your@email.com",
    instagram: "@yourhandle"
}
```

## 🌐 Viewing Your Site

### Locally:
```bash
open index.html
```

Or double-click `index.html` in Finder

### On the Web:
To publish your site, you can use:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)

## 🔧 Quick Start Example

1. **Add 3 landscape photos:**
   ```
   images/landscapes/photo1.jpg
   images/landscapes/photo2.jpg
   images/landscapes/photo3.jpg
   ```

2. **Edit config.js:**
   ```javascript
   landscapes: {
       name: "LANDSCAPES",
       active: true,
       images: [
           { src: 'images/landscapes/photo1.jpg', title: 'MOUNTAIN VISTA' },
           { src: 'images/landscapes/photo2.jpg', title: 'SUNSET BEACH' },
           { src: 'images/landscapes/photo3.jpg', title: 'FOREST TRAIL' }
       ]
   }
   ```

3. **Refresh browser** - Your photos now appear!

## 📱 Features

✅ Responsive design (works on all devices)
✅ Touch-friendly navigation
✅ Image lazy loading
✅ Smooth animations
✅ Professional minimalist design
✅ Easy to customize

## 🆘 Troubleshooting

**Images not showing?**
- Check file paths in config.js match actual file locations
- Make sure image files are in the correct folders
- Check for typos in filenames

**Category not appearing?**
- Make sure `active: true` in config.js
- Check that category has at least one image or allow empty galleries

**Need help?**
Open config.js - there are helpful comments throughout!
