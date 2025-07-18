# Ten-Ten Music Streaming Platform

A modern music streaming platform built with HTML, CSS, JavaScript, and Tailwind CSS v4.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/reda-alilouch/ten-ten.git
cd ten-ten
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the new simplified setup:

- **Configuration**: `tailwind.config.js`
- **Main CSS**: `css/tailwind.css`
- **Build Tool**: Vite with `@tailwindcss/vite` plugin

### Project Structure

```
ten-ten/
├── css/
│   ├── tailwind.css          # Tailwind CSS v4 main file
│   ├── style.css             # Custom styles
│   ├── base/                 # Base styles
│   ├── components/           # Component styles
│   └── variables/            # CSS variables
├── js/                       # JavaScript files
├── img/                      # Images
├── *.html                    # HTML pages
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies and scripts
```

### Using Tailwind Classes

You can now use Tailwind utility classes directly in your HTML:

```html
<!-- Example: Modern button with Tailwind -->
<button class="btn-primary">Play Music</button>

<!-- Example: Music card with Tailwind -->
<div class="music-card p-4">
  <img src="album-cover.jpg" class="w-full h-48 object-cover rounded-lg" />
  <h3 class="text-lg font-semibold mt-2">Album Title</h3>
  <p class="text-gray-600">Artist Name</p>
</div>
```

### Custom Components

The project includes custom Tailwind components in `css/tailwind.css`:

- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.card` - Basic card component
- `.music-card` - Music-specific card component

### Dark Mode

Tailwind's dark mode is configured and ready to use:

```html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Content that adapts to dark mode
</div>
```

## 🎨 Customization

### Adding Custom Colors

Edit `tailwind.config.js` to add custom colors:

```javascript
theme: {
  extend: {
    colors: {
      'custom-blue': '#1e40af',
      'custom-purple': '#7c3aed',
    }
  }
}
```

### Adding Custom Animations

```javascript
theme: {
  extend: {
    animation: {
      'bounce-slow': 'bounce 2s infinite',
    }
  }
}
```

## 📦 Build for Production

To build the project for production:

```bash
npm run build
```

This will create a `dist` folder with optimized assets.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `npm run dev`
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
