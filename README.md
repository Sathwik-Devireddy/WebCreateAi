# WebCreateAi 🚀

> **Intelligent Web Creation Platform Powered by AI**

A full-stack web application that leverages artificial intelligence to streamline and enhance the web development process. WebCreateAi combines modern web technologies with AI capabilities to provide a fast, flexible, and collaborative environment for building web projects.

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
- [Docker](#docker)
- [Live Demo](#live-demo)
- [API Integration](#api-integration)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [Author](#author)

---

## 🎯 Overview

WebCreateAi is an innovative platform designed to assist developers in creating web applications with AI-powered features. The application features a sophisticated frontend built with React and Vite, and a robust backend using Express and MongoDB. It provides tooling for rapid prototyping, code generation, and seamless deployment.

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
,
