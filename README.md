"# WebCreateAi" 
"# Ai-Website-Generate" 
"# Ai-Website-Generate" 
📂 Project Appendix
GenWeb.ai: The primary name used for the platform in the UI.
Credits System: Users spend credits to generate or update websites.
OpenRouter: The AI backbone used for generating raw JSON/HTML code for the websites.
Stripe Webhooks: Used to asynchronously update user credits upon successful payment.
👥 Authors
Sathwik Devireddy - Lead Developer & Architect.


🎨 Color Reference
Color	Hex	Component
Background	#040404	Main App Background
Primary Gradient	from-purple-400 to-blue-400	Hero Text & Accents
Zinc Gray	#A1A1AA (Zinc-400)	Secondary Text
Border	rgba(255, 255, 255, 0.1)	Cards & Modals
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the Project.
Create your Feature Branch (git checkout -b feature/AmazingFeature).
Commit your Changes (git commit -m 'Add some AmazingFeature').
Push to the Branch (git push origin feature/AmazingFeature).
Open a Pull Request.
📺 Demo

🚀 Deployment
Frontend: Optimized for Vercel or Netlify (Vite build).
Backend: Can be hosted on Render, Railway, or DigitalOcean.
Database: MongoDB Atlas (Managed Cloud).
📖 Documentation
GenWeb.ai is a full-stack AI-powered website builder. It uses the DeepSeek-V3 model via OpenRouter to transform text prompts into production-ready React/HTML code. It features a tiered pricing model, secure authentication via Firebase/Google, and a real-time website editor.

🔑 Environment Variables
To run this project, you will need to add the following environment variables to your .env files:

Server (/server/.env): PORT, MONGODB_URI, OPENROUTER_API_KEY, STRIPE_SECRET_KEY, JWT_SECRET, STRIPE_WEBHOOK_SECRET, FRONTEND_URL

Client (/client/.env): VITE_FIREBASE_API_KEY

❓ FAQ
Q: How do I get more credits? A: Navigate to the /pricing page and select a Pro or Enterprise plan.

Q: Can I export the code? A: Yes, generated websites are stored as raw code strings which can be copied and used anywhere.

✨ Features
AI Code Generation: Instant creation of responsive layouts.
Stripe Integration: Secure payment processing for Pro features.
Firebase Auth: Google Sign-In support.
Credit System: Controlled usage with Free/Pro/Enterprise tiers.
Live Editor: Real-time preview and modification of generated sites.
💬 Feedback
Feedback is highly appreciated! Please open an issue on the GitHub repository or reach out via the support links.

👤 GitHub Profile Sections
About Me: A passionate Full-Stack Developer focused on bridging the gap between AI and Web Development.
Introduction: Hello! I'm Sathwik. I build tools like GenWeb.ai that empower users to create digital experiences without writing a single line of code.
Links: LinkedIn | Portfolio | Twitter
Other: I enjoy exploring LLM architectures and optimizing high-performance React applications.
Skills: React 19, Node/Express, MongoDB, Framer Motion, Tailwind CSS, AI Integration (OpenRouter/OpenAI).
⚙️ Installation
bash
# Clone the repo
git clone https://github.com/Sathwik-Devireddy/WebCreateAi.git
# Client setup
cd client
npm install
# Server setup
cd ../server
npm install
🧠 Lessons
AI Prompting: Learning how to structure system prompts to ensure the AI only returns valid JSON/code.
Webhooks: Managing real-time data synchronization between Stripe and MongoDB.
React 19: Implementing the latest React features and Tailwind 4 for maximum performance.




⚡ Optimizations
Vite 8: Ultra-fast HMR and build times.
Tailwind 4: CSS-first configuration for smaller bundle sizes.
Framer Motion: Hardware-accelerated animations for smooth transitions.
🔗 Related
StitchMCP - UI Component Design.
OpenRouter SDK - AI Integration.
🗺️ Roadmap
 Custom Domain mapping.
 Multi-page website support.
 Drag-and-drop component library.
 SEO Optimization tools for generated sites.
💻 Run Locally
Start the Server: cd server && npm run dev (Runs on port 8000).
Start the Client: cd client && npm run dev (Runs on port 5173).


🛠️ Tech Stack
Frontend: React 19, Vite 8, Redux Toolkit, Tailwind CSS 4, Framer Motion.
Backend: Node.js, Express, Mongoose.
Services: Firebase (Auth), Stripe (Payments), OpenRouter (AI).
🧪 Running Tests
npm run lint (Frontend linting with ESLint).
📝 Usage/Examples
Login: Sign in using your Google account.
Describe: Enter a prompt like "A sleek landing page for a coffee shop".
Generate: Click generate and watch the AI build your site.
Deploy: Use the preview link to view your live creation.

