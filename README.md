# Personal Portfolio Website - A. Mohamed Abul Hassan

A modern, responsive portfolio website built with React and Tailwind CSS featuring a sleek black theme design.

## 🚀 Features

- **Modern Black Theme**: Fully black-themed design with white typography and subtle accent colors
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Vertical sidebar navigation (desktop) and collapsible mobile navbar
- **Interactive Components**: Hover effects, transitions, and smooth scrolling
- **Professional Sections**:
  - Hero section with introduction and call-to-action buttons
  - About me with statistics
  - Skills with progress bars and categorization
  - Featured projects with tech stacks
  - Professional certifications
  - Work experience timeline
  - Achievements and awards
  - Contact form with social links
  - Clean footer

## 🛠️ Technologies Used

- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: React Icons (Font Awesome + Simple Icons)
- **Fonts**: Poppins and Inter from Google Fonts
- **Build Tool**: Create React App

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.js` - Name, tagline, and social links
- `src/components/About.js` - Personal description and statistics
- `src/components/Contact.js` - Contact details and social links
- `src/components/Footer.js` - Footer information

### Skills & Projects
- `src/components/Skills.js` - Add/modify your technical skills
- `src/components/Projects.js` - Update with your projects
- `src/components/Experience.js` - Add your work experience
- `src/components/Achievements.js` - List your achievements
- `src/components/Certifications.js` - Add your certifications

### Theme Customization
Tailwind colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'black-primary': '#000000',
  'black-secondary': '#111111', 
  'gray-accent': '#333333',
  'white-text': '#ffffff',
  'gray-text': '#cccccc',
}
```

## 📱 Mobile Responsiveness

- **Desktop**: Fixed left sidebar navigation
- **Mobile**: Collapsible top navigation bar
- **Responsive breakpoints**: Tailwind CSS standard breakpoints
- **Touch-friendly**: Optimized button sizes and spacing

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure domain (optional)

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📄 Resume Integration

To add your resume download functionality:
1. Place your PDF resume in the `public` folder as `resume.pdf`
2. The "Download Resume" button in the Hero section will automatically work

## 🎯 Performance Features

- **Smooth Scrolling**: CSS scroll-behavior and JavaScript intersection observers
- **Optimized Images**: Placeholder gradients for project previews
- **Lazy Loading**: React components load efficiently
- **Responsive Design**: Mobile-first approach

## 🐛 Troubleshooting

### Common Issues:

1. **Icons not displaying**: Make sure `react-icons` is installed
2. **Styles not applying**: Verify Tailwind CSS is properly configured
3. **Build errors**: Check all imports and dependencies

### Development Commands:

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build

# Eject (advanced users only)
npm run eject
```

## 📧 Contact

A. Mohamed Abul Hassan
- Email: mohammedabulhassan298@gmail.com
- Phone: +91 9342161322
- LinkedIn: [mohammedabulhassan298](https://linkedin.com/in/mohammedabulhassan298)
- GitHub: [mohammedabulhassan298](https://github.com/mohammedabulhassan298)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React & Tailwind CSS**
