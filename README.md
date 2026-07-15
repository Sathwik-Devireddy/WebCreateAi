# WebCreateAi 🚀

> **Intelligent Web Creation Platform Powered by AI**

A full-stack web application that leverages artificial intelligence to streamline and enhance the web development process. WebCreateAi combines modern web technologies with AI capabilities to provide an intelligent platform for creating web applications.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [New Updates & Features](#-new-updates--features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [API Integration](#api-integration)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Author](#author)

---

## 🎯 Overview

WebCreateAi is an innovative platform designed to assist developers in creating web applications with AI-powered features. The application features a sophisticated frontend built with React and Vite, with a robust backend powered by Express.js and MongoDB.

### Use Cases

- **Rapid Prototyping**: Generate web components and layouts with AI assistance
- **Code Generation**: Intelligent code suggestions and completions
- **Interactive Development**: Real-time preview and editing with Monaco Editor
- **User Management**: Secure authentication and user account handling
- **Payment Processing**: Integrated payment solutions for premium features
- **Multi-Model AI Access**: Choose from multiple AI models via OpenRouter
- **Template Generation**: Create project templates and boilerplate code
- **Collaboration Features**: Share code snippets and projects with team members

---

## ✨ Key Features

### Frontend Features
- **Monaco Editor Integration**: Professional code editing experience with syntax highlighting
- **Real-time Code Preview**: Instant visual feedback for your code changes
- **Redux State Management**: Centralized state management for predictable app behavior
- **Responsive Design**: Tailwind CSS for modern, responsive UI components
- **Smooth Animations**: Framer Motion for polished user interactions
- **Firebase Integration**: Real-time database and authentication support
- **Multi-model AI Selection**: Switch between different AI models seamlessly
- **Code Sharing**: Share generated code with custom URLs
- **Dark Mode Support**: Theme switching for better UX
- **Project History**: Keep track of all created projects and templates

### Backend Features
- **Express.js Server**: Lightweight and scalable API server
- **MongoDB Database**: NoSQL database for flexible data storage
- **JWT Authentication**: Secure token-based authentication
- **OpenRouter AI Integration**: Access to multiple AI models and capabilities
- **Stripe Payment Integration**: Secure payment processing
- **CORS Support**: Cross-origin resource sharing for seamless frontend-backend communication
- **Rate Limiting**: Prevent API abuse with request throttling
- **Error Handling**: Comprehensive error handling and logging
- **Caching Layer**: Optimize performance with strategic caching
- **WebSocket Support**: Real-time updates and notifications

---

## 🆕 New Updates & Features

### Recent Enhancements (v1.1.0)

#### 🎨 UI/UX Improvements
- **Enhanced Code Editor**: Improved Monaco Editor integration with custom themes
- **Better Dashboard**: Redesigned dashboard with project cards and statistics
- **Responsive Layout**: Improved mobile responsiveness across all screens
- **Dark Mode**: Complete dark theme with system preference detection
- **Toast Notifications**: Real-time feedback for user actions

#### 🤖 AI Capabilities
- **Model Selection**: Switch between multiple AI models (GPT-4, Claude, Mistral, etc.)
- **Custom Prompts**: Save and reuse custom AI prompts
- **Code Templates**: Pre-built templates for common patterns
- **Context Awareness**: Better understanding of code context for smarter suggestions
- **Multi-language Support**: Generate code in multiple programming languages

#### 👥 User Features
- **User Profiles**: Comprehensive user profile management
- **API Key Management**: Secure management of API keys
- **Usage Statistics**: Track AI model usage and costs
- **Project Collections**: Organize projects into collections
- **Export Options**: Export generated code in multiple formats (HTML, JSX, Vue, etc.)

#### 🔐 Security Enhancements
- **Enhanced JWT Validation**: Improved token validation and expiration
- **Input Sanitization**: XSS protection and input validation
- **Rate Limiting**: API rate limiting per user
- **Audit Logging**: Track all user activities
- **HTTPS Support**: Full SSL/TLS support for production

#### 📊 Performance Improvements
- **Code Splitting**: Optimized bundle size with dynamic imports
- **Lazy Loading**: Components and routes load on demand
- **Image Optimization**: Automatic image optimization
- **Database Indexing**: Improved query performance with proper indexing
- **CDN Integration**: Static assets served via CDN

#### 🔄 Integration Updates
- **Stripe Webhook Events**: Real-time payment status updates
- **Firebase Realtime Sync**: Better data synchronization
- **OpenRouter Model Updates**: Latest AI model support
- **GitHub Integration**: Import and export projects from GitHub
- **Webhook Support**: Custom webhooks for external services

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 19.2.5 |
| **Vite** | Build Tool & Dev Server | 8.0.9 |
| **Tailwind CSS** | Utility-first CSS Framework | 4.3.0 |
| **Redux Toolkit** | State Management | 2.11.2 |
| **Monaco Editor** | Code Editor Component | 4.7.0 |
| **Framer Motion** | Animation Library | 12.38.0 |
| **React Router** | Client-side Routing | 7.15.0 |
| **Axios** | HTTP Client | 1.16.1 |
| **Firebase** | Auth & Database | 12.13.0 |
| **Styled Components** | CSS-in-JS | 6.4.1 |
| **Zustand** | Lightweight State Management | 4.4.1 |
| **React Query** | Server State Management | 3.39.3 |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Express.js** | Web Framework | 5.2.1 |
| **Node.js** | Runtime Environment | 16.x+ |
| **MongoDB** | Database | 5.x+ |
| **Mongoose** | ODM | 9.5.0 |
| **OpenRouter SDK** | AI API Integration | 0.12.35 |
| **Stripe** | Payment Processing | 22.1.1 |
| **JWT** | Authentication | 9.0.3 |
| **Cookie Parser** | Cookie Middleware | 1.4.7 |
| **CORS** | Cross-Origin Support | 2.8.6 |
| **Nodemon** | Development Tool | 3.1.14 |
| **Express Rate Limit** | Rate Limiting | 7.1.5 |
| **Helmet** | Security Middleware | 7.1.0 |
| **Socket.io** | Real-time Communication | 4.7.2 |
| **Dotenv** | Environment Variables | 16.3.1 |

---

## 📁 Project Structure

```
WebCreateAi/
├── client/                         # React frontend application
│   ├── src/
│   │   ├── components/             # Reusable React components
│   │   │   ├── CodeEditor.jsx      # Monaco Editor wrapper
│   │   │   ├── Preview.jsx         # Live code preview
│   │   │   ├── ModelSelector.jsx   # AI model selection component
│   │   │   ├── ProjectCard.jsx     # Project display component
│   │   │   └── Navigation.jsx      # Main navigation bar
│   │   ├── pages/                  # Page components
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   ├── Editor.jsx          # Code editor page
│   │   │   ├── Projects.jsx        # Projects list page
│   │   │   ├── Settings.jsx        # User settings
│   │   │   └── Auth.jsx            # Authentication pages
│   │   ├── redux/                  # Redux store configuration
│   │   │   ├── slices/             # Redux slices
│   │   │   ├── store.js            # Store configuration
│   │   │   └── hooks.js            # Custom Redux hooks
│   │   ├── hooks/                  # Custom React hooks
│   │   │   ├── useAuth.js          # Authentication hook
│   │   │   ├── useAI.js            # AI integration hook
│   │   │   └── useProject.js       # Project management hook
│   │   ├── services/               # API services
│   │   │   ├── api.js              # API client
│   │   │   ├── authService.js      # Authentication service
│   │   │   └── aiService.js        # AI service
│   │   ├── utils/                  # Utility functions
│   │   ├── styles/                 # Global styles
│   │   ├── App.jsx                 # Main App component
│   │   └── main.jsx                # React entry point
│   ├── package.json                # Frontend dependencies
│   ├── vite.config.js              # Vite configuration
│   └── tailwind.config.js          # Tailwind configuration
│
├── server/                         # Express.js backend
│   ├── models/                     # Mongoose schemas
│   │   ├── User.js                 # User schema
│   │   ├── Project.js              # Project schema
│   │   ├── APIKey.js               # API key schema
│   │   └── Payment.js              # Payment schema
│   ├── routes/                     # API route handlers
│   │   ├── auth.routes.js          # Authentication routes
│   │   ├── user.routes.js          # User routes
│   │   ├── website.routes.js       # Website/Project routes
│   │   └── billing.routes.js       # Billing routes
│   ├── middleware/                 # Custom middleware
│   │   ├── isAuth.js               # JWT verification
│   │   ├── errorHandler.js         # Error handling
│   │   └── validation.js           # Request validation
│   ├── controllers/                # Business logic
│   │   ├── auth.controller.js      # Auth logic
│   │   ├── user.controller.js      # User logic
│   │   ├── website.controller.js   # Website logic
│   │   └── billing.controller.js   # Billing logic
│   ├── config/                     # Configuration files
│   │   ├── database.js             # MongoDB connection
│   │   ├── openrouter.js           # OpenRouter setup
│   │   └── stripe.js               # Stripe setup
│   ├── utils/                      # Utility functions
│   │   └── logger.js               # Logging utility
│   ├── index.js                    # Server entry point
│   ├── package.json                # Backend dependencies
│   └── .env.example                # Environment variables template
│
├── .gitignore                      # Git ignore file
└── README.md                       # Project documentation
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher recommended, v18+ for best compatibility)
- **npm** or **yarn** (v7 or higher)
- **MongoDB** (v5.x or higher - local or MongoDB Atlas cloud instance)
- **Git**
- **Code Editor** (VS Code, Sublime Text, etc.)

### Required API Keys & Credentials

- **OpenRouter API Key**: Sign up at [OpenRouter](https://openrouter.ai) for AI model access
- **Firebase Configuration**: Create a project at [Firebase Console](https://console.firebase.google.com)
- **Stripe API Keys**: Get keys from [Stripe Dashboard](https://dashboard.stripe.com)
- **MongoDB Connection String**: Create a cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Sathwik-Devireddy/WebCreateAi.git
cd WebCreateAi
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

### 4. Verify Installation

```bash
# Frontend
cd ../client
npm list react react-dom

# Backend
cd ../server
npm list express mongoose
```

---

## ⚙️ Configuration

### Backend Configuration (.env)

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
SERVER_URL=http://localhost:5000

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
DB_NAME=webcreateai

# Authentication
JWT_SECRET=your_jwt_secret_key_here_min_32_chars
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=your_refresh_token_secret_here

# OpenRouter API
OPENROUTER_API_KEY=your_openrouter_api_key
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1

# Stripe Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Firebase
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain

# CORS & Client
CLIENT_URL=http://localhost:5173
CORS_ORIGIN=http://localhost:5173

# Logging
LOG_LEVEL=debug
LOG_FORMAT=combined

# Rate Limiting
RATE_LIMIT_WINDOW=15m
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend Configuration (.env)

Create a `.env` file in the `client` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_API_TIMEOUT=30000

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_DATABASE_URL=your_firebase_database_url

# Stripe Configuration
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_publishable_key

# App Configuration
VITE_APP_NAME=WebCreateAi
VITE_APP_VERSION=1.1.0
VITE_DEBUG_MODE=false
```

---

## 🏃 Getting Started

### Development Mode

#### Terminal 1: Start Backend Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:5000`

**Expected output:**
```
Server running on port 5000
MongoDB connected successfully
```

#### Terminal 2: Start Frontend Development Server

```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173`

**Expected output:**
```
VITE v8.0.9 ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### Access the Application

1. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

2. Sign up for a new account or log in with existing credentials

3. Create your first project and start using the AI features

---

## 💻 Development

### Frontend Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint for code quality
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type check (if using TypeScript)
npm run type-check
```

### Backend Scripts

```bash
# Start development server with auto-reload (nodemon)
npm run dev

# Start production server
npm start

# Run tests
npm test

# Seed database with sample data
npm run seed
```

### Code Style & Linting

The frontend includes ESLint configuration for code quality:

```bash
cd client
npm run lint
```

Backend code style:
```bash
cd server
npm run lint
```

### Debugging

**Frontend Debugging:**
- Use React Developer Tools browser extension
- Use Redux DevTools for state inspection
- Check console for errors: `F12` or `Ctrl+Shift+I`

**Backend Debugging:**
- Use `console.log()` or logging library
- Use Node.js debugger: `node --inspect server/index.js`
- Check server logs in terminal

---

## 📦 Build & Deployment

### Build Frontend

```bash
cd client
npm run build
```

This generates an optimized production build in the `dist` directory.

**Build optimization includes:**
- Code minification
- Tree shaking
- CSS purging
- Image optimization

### Build Backend

The backend runs directly with Node.js without a separate build step. For production:

```bash
cd server
npm install --production
NODE_ENV=production npm start
```

### Deployment Options

#### Frontend Deployment

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Connect GitHub repo to Netlify
- **AWS S3 + CloudFront**: Upload `dist` folder to S3
- **GitHub Pages**: Deploy static site
- **Railway**: Connect repo and deploy
- **Render**: Connect repo and deploy

#### Backend Deployment

- **Heroku**: Deploy via git or Heroku CLI
- **Railway**: Push code and auto-deploy
- **Render**: Connect GitHub repo
- **AWS EC2**: Deploy with PM2 process manager
- **DigitalOcean**: Deploy using App Platform
- **Google Cloud Run**: Deploy containerized app
- **Azure App Service**: Deploy Node.js app

#### Database Deployment

- **MongoDB Atlas**: Cloud database hosting (recommended)
- **AWS DocumentDB**: AWS managed MongoDB alternative
- **Azure CosmosDB**: Azure's database service

### Environment Variables for Production

Ensure all environment variables are set correctly on your hosting platform.

---

## 🔌 API Integration

### OpenRouter AI Integration

WebCreateAi uses OpenRouter to access various AI models:

```javascript
// Example API call structure
POST /api/ai/generate
Content-Type: application/json
Authorization: Bearer <jwt_token>

{
  "prompt": "Create a React button component",
  "model": "openai/gpt-4",
  "temperature": 0.7,
  "max_tokens": 2000,
  "language": "javascript"
}

// Response
{
  "success": true,
  "code": "export default function Button() { ... }",
  "model": "openai/gpt-4",
  "tokens_used": 245
}
```

### Authentication Flow

1. **Registration**: User provides email and password
2. **Firebase Auth**: Firebase validates credentials
3. **Backend Verification**: Server receives Firebase token
4. **JWT Issuance**: Backend issues JWT token
5. **Token Storage**: Token stored in Redux store and localStorage
6. **Authenticated Requests**: Token sent in Authorization header

### Payment Processing

Stripe integration enables:

```javascript
// Create payment
POST /api/payments/create-payment-intent
{
  "amount": 9.99,
  "currency": "usd",
  "plan": "pro"
}

// Webhook for payment confirmation
POST /api/payments/webhook
{
  "type": "payment_intent.succeeded",
  "data": { ... }
}
```

---

## 📡 API Routes

### Authentication Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/google` | Google authentication |
| GET | `/api/auth/logout` | User logout |

### User Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/me` | Get current user details |

### Website/Project Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/website/generate` | Generate new website |
| POST | `/api/website/update/:id` | Update website changes |
| GET | `/api/website/get-by-id/:id` | Get website by ID |
| GET | `/api/website/get-all` | Get all user websites |
| GET | `/api/website/deploy/:id` | Deploy website |
| GET | `/api/website/get-by-slug/:slug` | Get website by slug |

### Billing Routes
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/billing` | Process billing request |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/WebCreateAi.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature: description'
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any related issues
   - Include screenshots if applicable

### Code Guidelines

- **Follow ESLint rules** (enforced for frontend)
- **Write clear commit messages** following conventional commits
- **Add comments** for complex logic
- **Test your changes** before submitting PR
- **Update documentation** if needed
- **Use meaningful variable names**
- **Keep functions small and focused**

### Pull Request Checklist

- [ ] Code follows style guidelines
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Documentation updated
- [ ] No breaking changes introduced
- [ ] Commit messages are clear and descriptive

---

## 👨‍💻 Author

**Sathwik Devireddy**

- **GitHub**: [@Sathwik-Devireddy](https://github.com/Sathwik-Devireddy)
- **Project**: [WebCreateAi](https://github.com/Sathwik-Devireddy/WebCreateAi)
- **Repository**: [Live](https://github.com/Sathwik-Devireddy/WebCreateAi)

---

## 🙏 Acknowledgments

- **OpenRouter** for AI model integration and API access
- **Firebase** for authentication and real-time database services
- **Stripe** for secure payment processing
- **MongoDB** for flexible and scalable database solutions
- **React, Express, and Node.js** communities for excellent documentation
- **Tailwind CSS** for utility-first styling
- **Vite** for blazing fast build tooling
- All contributors and users of WebCreateAi

---

## 📞 Support

For issues, questions, or suggestions:

- **Open an Issue**: [GitHub Issues](https://github.com/Sathwik-Devireddy/WebCreateAi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Sathwik-Devireddy/WebCreateAi/discussions)
- **Email**: Contact via GitHub profile
- **Documentation**: Check this README and project wiki

### Troubleshooting

**Port Already in Use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9
```

**MongoDB Connection Error:**
- Verify MongoDB is running
- Check connection string in .env
- Verify IP whitelist in MongoDB Atlas

**Firebase Configuration Issues:**
- Download fresh config from Firebase Console
- Verify API keys are correct
- Check CORS settings

**Stripe Integration Problems:**
- Verify API keys in .env
- Check webhook URL configuration
- Test with Stripe CLI locally

---

<div align="center">

## ⭐ If you find this project helpful, please star this repository!

**Made with ❤️ by Sathwik Devireddy**

[Visit Repository](https://github.com/Sathwik-Devireddy/WebCreateAi) • [Report Bug](https://github.com/Sathwik-Devireddy/WebCreateAi/issues) • [Request Feature](https://github.com/Sathwik-Devireddy/WebCreateAi/issues)

</div>
