# WebCreateAi 🚀

> **Intelligent Web Creation Platform Powered by AI**

A full-stack web application that leverages artificial intelligence to streamline and enhance the web development process. WebCreateAi combines modern web technologies with AI capabilities to provide developers with intelligent tools for faster, smarter web creation.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## 🎯 Overview

WebCreateAi is an innovative platform designed to assist developers in creating web applications with AI-powered features. The application features a sophisticated frontend built with React and Vite, coupled with a robust backend powered by Express.js and MongoDB. It integrates cutting-edge AI models through OpenRouter API and supports payment processing via Stripe.

### Use Cases

- **Rapid Prototyping**: Generate web components and layouts with AI assistance
- **Code Generation**: Intelligent code suggestions and completions
- **Interactive Development**: Real-time preview and editing with Monaco Editor
- **User Management**: Secure authentication and user account handling
- **Payment Processing**: Integrated payment solutions for premium features

---

## ✨ Key Features

### Frontend Features
- **Monaco Editor Integration**: Professional code editing experience with syntax highlighting
- **Real-time Code Preview**: Instant visual feedback for your code changes
- **Redux State Management**: Centralized state management for predictable app behavior
- **Responsive Design**: Tailwind CSS for modern, responsive UI components
- **Smooth Animations**: Framer Motion for polished user interactions
- **Firebase Integration**: Real-time database and authentication support

### Backend Features
- **Express.js Server**: Lightweight and scalable API server
- **MongoDB Database**: NoSQL database for flexible data storage
- **JWT Authentication**: Secure token-based authentication
- **OpenRouter AI Integration**: Access to multiple AI models and capabilities
- **Stripe Payment Integration**: Secure payment processing
- **CORS Support**: Cross-origin resource sharing for seamless frontend-backend communication

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

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Express.js** | Web Framework | 5.2.1 |
| **Node.js** | Runtime Environment | - |
| **MongoDB** | Database | - |
| **Mongoose** | ODM | 9.5.0 |
| **OpenRouter SDK** | AI API Integration | 0.12.35 |
| **Stripe** | Payment Processing | 22.1.1 |
| **JWT** | Authentication | 9.0.3 |
| **Cookie Parser** | Cookie Middleware | 1.4.7 |
| **CORS** | Cross-Origin Support | 2.8.6 |
| **Nodemon** | Development Tool | 3.1.14 |

---

## 📁 Project Structure

```
WebCreateAi/
├── client/                    # React frontend application
│   ├── src/
│   │   ├── components/        # Reusable React components
│   │   ├── pages/             # Page components
│   │   ├── redux/             # Redux store configuration
│   │   ├── hooks/             # Custom React hooks
│   │   └── App.jsx            # Main App component
│   ├── package.json           # Frontend dependencies
│   └── vite.config.js         # Vite configuration
│
├── server/                    # Express.js backend
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route handlers
│   ├── middleware/            # Custom middleware
│   ├── controllers/           # Business logic
│   ├── index.js               # Server entry point
│   └── package.json           # Backend dependencies
│
└── README.md                  # Project documentation
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** (v7 or higher)
- **MongoDB** (local or cloud instance via MongoDB Atlas)
- **Git**

### Required API Keys & Credentials

- **OpenRouter API Key**: For AI model access
- **Firebase Configuration**: Project ID, API Key, etc.
- **Stripe API Keys**: Public and Secret keys for payment processing
- **MongoDB Connection String**: For database connectivity

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

---

## ⚙️ Configuration

### Backend Configuration (.env)

Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# Authentication
JWT_SECRET=your_jwt_secret_key_here

# OpenRouter API
OPENROUTER_API_KEY=your_openrouter_api_key

# Stripe Payment
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Firebase
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_API_KEY=your_firebase_api_key

# CORS
CLIENT_URL=http://localhost:5173
```

### Frontend Configuration (.env)

Create a `.env` file in the `client` directory:

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id

# Stripe Publishable Key
VITE_STRIPE_PUBLIC_KEY=your_stripe_publishable_key
```

---

## 🏃 Getting Started

### Development Mode

#### Start Backend Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:5000`

#### Start Frontend Development Server

In a new terminal:

```bash
cd client
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```

---

## 💻 Development

### Frontend Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Backend Scripts

```bash
# Start development server with auto-reload (nodemon)
npm run dev
```

### Code Style & Linting

The frontend includes ESLint configuration for code quality. Run linting:

```bash
cd client
npm run lint
```

---

## 📦 Build & Deployment

### Build Frontend

```bash
cd client
npm run build
```

This generates an optimized production build in the `dist` directory.

### Build Backend

The backend runs directly with Node.js without a separate build step.

### Deployment Options

- **Frontend**: Deploy `dist` folder to Vercel, Netlify, AWS S3, or any static hosting
- **Backend**: Deploy to Heroku, Railway, Render, AWS EC2, DigitalOcean, or any Node.js hosting platform
- **Database**: Use MongoDB Atlas for cloud database hosting

---

## 🔌 API Integration

### OpenRouter AI Integration

WebCreateAi uses OpenRouter to access various AI models:

```javascript
// Example API call structure
POST /api/ai/generate
{
  "prompt": "user_input",
  "model": "model_name",
  "temperature": 0.7
}
```

### Authentication Flow

1. User registers/logs in via Firebase
2. JWT token issued on backend
3. Token stored in client Redux store
4. Token sent with each authenticated request via headers

### Payment Processing

Stripe integration enables:
- Secure payment card processing
- Subscription management
- Invoice generation

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Guidelines

- Follow ESLint rules (enforced for frontend)
- Write clear commit messages
- Add comments for complex logic
- Test your changes before submitting PR

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Sathwik Devireddy**

- GitHub: [@Sathwik-Devireddy](https://github.com/Sathwik-Devireddy)
- Project: [WebCreateAi](https://github.com/Sathwik-Devireddy/WebCreateAi)

---

## 🙏 Acknowledgments

- OpenRouter for AI model integration
- Firebase for authentication and database services
- Stripe for payment processing
- The React, Express, and MongoDB communities

---

## 📞 Support

For issues, questions, or suggestions:
- Open an issue on [GitHub Issues](https://github.com/Sathwik-Devireddy/WebCreateAi/issues)
- Check existing discussions for similar questions

---

<div align="center">

**Made with ❤️ by Sathwik Devireddy**

⭐ Star this repository if you find it helpful!

</div>
