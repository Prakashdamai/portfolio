# React + Tailwind Portfolio (Production Ready)

A modern, responsive portfolio built with **React 18**, **Vite**, and **Tailwind CSS**.
Styled to match the dark theme + pink accent layout you requested.

## ✨ Features
- Sections: **Hero**, **About Me**, **Skills**, **Projects**, **Resume**, **Contact**, **Footer**
- **Responsive** on mobile/tablet/desktop
- **Lazy loaded components** via `React.lazy` + `Suspense`
- **Lazy loaded images** via `<img loading="lazy" />`
- Production build with **code splitting**, **minified JS/CSS** (Vite)
- Accessible semantics and keyboard-focusable controls


## ✨ Features More Info
- Hero section with animated introduction  
- About Me section (learning Full Stack with Python, completed HTML, CSS, JS, React so far)  
- Projects showcase (Weather App, Todo List App, TextUtils, Portfolio Website)  
- Skills section with progress bars  
- Resume download link (PDF)  
- Contact form with validation  

---

## 🛠️ Tech Stack
- **React.js** – UI development  
- **Tailwind CSS** – Styling  
- **Framer Motion** – Animations  
- **React Router** – Page navigation  
- **Netlify / GitHub Pages** – Deployment  

---

## 🚀 Deployment
- Live Site 👉 [Portfolio Website](https://your-portfolio.netlify.app)  
- Source Code 👉 [GitHub Repo](https://github.com/Prakashdamai/portfolio)  

---

## ⚡ Development Process
1. Built reusable React components (`Hero`, `About`, `Projects`, `Skills`, `Resume`, `Contact`).  
2. Styled using Tailwind CSS and added animations with Framer Motion.  
3. Ensured responsive design across devices (desktop, tablet, mobile).  
4. Optimized performance with lazy loading and minimized JS/CSS.  
5. Generated a production build and deployed to Netlify.  

---

## 🧩 Challenges & Solutions
- **Footer not sticking at bottom** → Fixed using `flex` layout with `min-height: 100vh`.  
- **Excessive gap between Hero and About sections** → Adjusted margins/padding with Tailwind.  
- **Deployment issues with GitHub Pages** → Switched to Netlify for easier and faster CI/CD.  
- **Image lazy loading not working** → Used `loading="lazy"` for images and dynamic imports for components.  

---

## 📌 Future Improvements
- Add blog section with Markdown support.  
- Backend integration (Node.js + MongoDB) for projects and contact form.  
- Dark/Light mode toggle.  


## 🗂 Project Structure
```
my-portfolio/
  public/
    profile.jpg
    resume.pdf
  src/
    components/ (Hero, About, Skills, Projects, Resume, Contact, Footer)
    App.jsx (lazy loads the components)
    index.css
    main.jsx
  package.json
  tailwind.config.js
  postcss.config.js
  index.html
```
Replace **public/profile.jpg** and **public/resume.pdf** with your own files.

## 🚀 Getting Started
```bash
npm install
npm run dev
```

### 🧱 Build (Production)
```bash
npm run build
```
Vite will output an optimized **`dist/`** folder:
- JS and CSS are **minified and hashed**
- Assets are **tree‑shaken and code‑split**

### 🔎 Preview Production Build
```bash
npm run preview
```
Open the local URL to verify everything works as expected.

## 🧩 Performance Techniques Used
1. **Lazy loading** for all major sections/components: `React.lazy(() => import(...))`
2. **Lazy images**: `<img loading="lazy" />`
3. **Vite optimizations**: minified JS/CSS, code splitting, asset hashing

## ☁️ Deploy
### Netlify (recommended)
1. Connect your GitHub repo or drag‑and‑drop `dist/` after `npm run build`
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add a **custom domain** and enable **HTTPS** (Netlify provides free SSL).

### Vercel
1. Import project from GitHub in Vercel
2. Framework preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`

### GitHub Pages
```bash
npm i -D gh-pages
# Add to package.json:
# "homepage": "https://<your-username>.github.io/<repo-name>/"
# "scripts": { "predeploy": "npm run build", "deploy": "gh-pages -d dist" }
npm run deploy
```

## ✅ Testing
- **Cross‑browser**: test in Chrome, Firefox, Edge, Safari
- **Responsive**: DevTools → Device toolbar → test common sizes (360px, 768px, 1024px, 1440px)
- **Accessibility**: Tab through, check color contrast, add alt text to images

## 📦 Submit
- Push to **GitHub** and share the repository link
- Include:
  - Live deployed link (Netlify/Vercel/GitHub Pages)
  - **Screenshots**
  - This **README.md** with notes on challenges/solutions

### 📝 Example Challenges & Solutions
- **Layout shifts on mobile** → Fixed with consistent spacing and responsive grid/classes
- **Long bundle times** → Used `React.lazy` to code‑split sections, reduced initial load
- **Large images** → Compressed and used `loading="lazy"`

---
© 2025 Prakash Damai
