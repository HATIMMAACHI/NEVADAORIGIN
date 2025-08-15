# NevadaOrigin - Portfolio Design Website

A sleek, modern, and creative website for NevadaOrigin, a personal brand dedicated to designing and building standout digital portfolios for individuals and creatives.

## ✨ Features

- **Modern Design**: Clean, minimal, portfolio-first design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Layout**: Mobile-friendly design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Instagram Feed**: Embedded Instagram posts showcase
- **Contact Form**: Functional contact form with validation
- **Portfolio Gallery**: Filterable portfolio showcase with live demos
- **Pricing Plans**: Clear pricing tiers with features
- **Newsletter Subscription**: Email subscription functionality
- **Testimonials**: Client testimonials and reviews
- **SEO Optimized**: Meta tags and structured content

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Lucide React** - Beautiful icons
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar with dark mode toggle
│   ├── Footer.js       # Footer with links and social media
│   ├── HeroSection.js  # Hero section with CTA
│   ├── InstagramFeed.js # Instagram posts showcase
│   ├── Testimonials.js # Client testimonials
│   └── Newsletter.js   # Email subscription component
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── About.js        # About page with story and mission
│   ├── Portfolio.js    # Portfolio gallery with filtering
│   ├── Services.js     # Services and pricing
│   └── Contact.js      # Contact form and info
├── App.js              # Main app component with routing
├── index.js            # React entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Color Scheme**: Neutral colors with accent purple/blue gradients
- **Typography**: Inter and Poppins fonts for modern look
- **Animations**: Smooth scroll animations and hover effects
- **Gradients**: Beautiful gradient backgrounds and text effects
- **Cards**: Glass-morphism inspired card designs
- **Buttons**: Interactive buttons with hover animations

## 📱 Pages & Sections

### Home Page
- Hero section with "Craft Your Unique Portfolio" message
- Instagram feed showcase
- Features section highlighting benefits
- Call-to-action sections
- Testimonials
- Newsletter subscription

### About Page
- Story behind NevadaOrigin
- Mission and values
- Work process explanation
- Team information

### Portfolio Page
- Gallery of past portfolio builds
- Filter by category (Designer, Developer, Artist, etc.)
- Live demo links for each project
- Detailed project modals

### Services Page
- Custom portfolio building services
- Pricing tiers (Starter, Pro, Premium)
- Add-on services (hosting, SEO, CV writing)
- Service features and benefits

### Contact Page
- Contact form with validation
- Contact information cards
- Social media links
- Business hours
- Location and contact details

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nevada-origin
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { /* blue colors */ },
  accent: { /* purple colors */ },
  neutral: { /* gray colors */ }
}
```

### Content
Update the content in each component file to match your brand:
- Update contact information in `Contact.js`
- Modify portfolio projects in `Portfolio.js`
- Change pricing in `Services.js`
- Update testimonials in `Testimonials.js`

### Images
Replace placeholder images with your own:
- Update Instagram feed images in `InstagramFeed.js`
- Replace portfolio project images in `Portfolio.js`
- Add your logo and brand images

## 📧 Contact Information

- **Email**: hello@nevadaorigin.com
- **Phone**: +1 (555) 123-4567
- **Location**: Las Vegas, NV
- **Instagram**: @nevadaorigin
- **Twitter**: @nevadaorigin
- **LinkedIn**: linkedin.com/company/nevadaorigin

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Unsplash for beautiful placeholder images
- Lucide for amazing icons
- Framer Motion for smooth animations
- TailwindCSS for the utility-first CSS framework

---

**NevadaOrigin** - Crafting exceptional digital portfolios that tell your unique story. 