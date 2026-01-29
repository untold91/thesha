# Sha - Smart Home Automation Website

**by Mahadeva Systems**

A modern, full-stack web application for smart home automation services, featuring a React frontend, FastAPI backend, and MongoDB database.

![Website Preview](https://customer-assets.emergentagent.com/job_homeautomation-2/artifacts/xu4gxpi2_noBgWhite.png)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Development Setup](#development-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contact](#contact)
- [TODO](#todo)

---

## 🌟 Overview

Sha is a comprehensive smart home automation platform that showcases:
- Premium smart home products (touch panels, lighting control, CCTV, sensors)
- Tailored solutions for residences, offices, and hotels
- Service & support information with 1-year free warranty
- Interactive product selector and AI-powered chatbot
- Contact and inquiry management system
- India-wide project location mapping

---

## ✨ Features

### Frontend

#### 🎨 **User Interface**
- Modern UI/UX built with React 19 and Shadcn UI components
- Fully responsive design optimized for desktop, tablet, and mobile
- Dark/Light theme with seamless switching and persistent preferences
- Touch-friendly buttons and mobile-optimized navigation
- No horizontal scrolling - fluid adaptation to all screen sizes

#### 🔍 **Product Management**
- Real-time product search and filtering by category
- Product cards with enhanced hover effects (scale, shadow, overlay)
- Separate dedicated pages for products and product details
- Category-based product navigation

#### 🎯 **User Engagement**
- **AI Chatbot**: Interactive assistant with quick responses for common queries
  - Quick action buttons (View Products, Smart Solutions, Contact Us, Get a Quote)
  - Natural conversation flow
  - Context-aware responses
- **Product Selector**: 3-step guided wizard helping users find solutions
  - Property type selection (Residence, Office, Hotel)
  - Feature preferences
  - Property size options
  - Personalized recommendations
- **Hero Carousel**: Auto-rotating slides with benefit-focused content
  - Clear CTAs (Get Started, View Products)
  - Tangible value propositions (30% energy savings, 4K footage)
  - Animated scroll indicators

#### 📄 **Pages & Navigation**
- **Home**: Hero carousel, solutions, tailored scenarios, service info, product selector
- **Products**: Category-filtered product grid with search
- **Product Detail**: Individual product pages with specifications
- **About**: Redesigned with 5 sections:
  - Company Story (top)
  - Our Presence Across India (SVG map with state markers)
  - Values Grid (4 value cards)
  - Stats section (projects, states, satisfaction)
  - What Our Clients Say (testimonials with hover effects)
- **Contact**: Professional contact form with information cards
- Smooth scrolling between sections
- Auto-scroll to top on page navigation
- Header navigation highlights active section on scroll (Solutions/Scenarios)

#### 🗺️ **Interactive Features**
- SVG-based India map with Telangana & Andhra Pradesh highlighted
- Interactive state markers with hover effects
- Testimonial cards with hover animations (scale, shadow, border)
- Header scroll-based section highlighting
- Footer quick links with proper navigation from all pages

### Backend
- 🚀 **FastAPI**: Modern, fast Python web framework
- 🗄️ **MongoDB**: NoSQL database for flexible data storage
- 🔒 **CORS Enabled**: Secure cross-origin resource sharing
- 📊 **RESTful APIs**: Clean API structure with proper routing (all routes prefixed with `/api`)
- 🔄 **Async Operations**: Non-blocking database operations

### Additional Features
- 📧 **Contact Form**: Inquiry submission with toast notifications
- 🔗 **Social Media Integration**: YouTube, LinkedIn, Facebook, Instagram, WhatsApp, Twitter/X
- 🎭 **Hover Effects**: Interactive elements throughout
- 📱 **Mobile Menu**: Hamburger navigation for mobile devices
- 🎨 **Design System**: Consistent color scheme and typography
- ⚡ **Performance**: Fast loading times and optimized assets

---

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Pre-built accessible component library
- **Axios 1.8.4** - HTTP client for API calls
- **Lucide React 0.507.0** - Icon library
- **Sonner 2.0.3** - Toast notifications
- **React Hook Form 7.56.2** - Form management
- **Zod 3.24.4** - Schema validation

### Backend
- **Python 3.x** - Programming language
- **FastAPI 0.110.1** - Web framework
- **Motor 3.3.1** - Async MongoDB driver
- **Uvicorn 0.25.0** - ASGI server
- **Pydantic 2.6.4** - Data validation

### Database
- **MongoDB** - NoSQL database

### Development Tools
- **Yarn** - Package manager (frontend)
- **Pip** - Package manager (backend)
- **Supervisor** - Process control system
- **ESLint 9.23.0** - JavaScript linting
- **Ruff** - Python linting
- **CRACO 7.1.0** - Create React App Configuration Override

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **Yarn** (v1.22 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (v4.4 or higher)
- **Git**

### Check Versions
```bash
node --version
yarn --version
python --version
mongod --version
git --version
```

---

## 🚀 Development Setup

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd <project-directory>
```

### 2. Backend Setup

#### Navigate to Backend Directory
```bash
cd backend
```

#### Create Virtual Environment (Recommended)
```bash
python -m venv venv

# Activate virtual environment
# On Linux/Mac:
source venv/bin/activate

# On Windows:
venv\Scripts\activate
```

#### Install Python Dependencies
```bash
pip install -r requirements.txt
```

#### Set Up Environment Variables
Create a `.env` file in the `backend` directory:
```bash
touch .env
```

Add the following variables:
```env
# Database Configuration
MONGO_URL=mongodb://localhost:27017
DB_NAME=smart_home_db

# Server Configuration (DO NOT MODIFY - managed by Kubernetes)
HOST=0.0.0.0
PORT=8001
```

**IMPORTANT**: The backend MUST run on port 8001 and all API routes MUST be prefixed with `/api` for proper Kubernetes ingress routing.

### 3. Frontend Setup

#### Navigate to Frontend Directory
```bash
cd ../frontend
```

#### Install Node Dependencies
```bash
yarn install
```

**NEVER use npm** - it will cause breaking changes. Always use yarn.

#### Set Up Environment Variables
Create a `.env` file in the `frontend` directory:
```bash
touch .env
```

Add the following variables:
```env
# Backend API URL (DO NOT MODIFY - production configured)
REACT_APP_BACKEND_URL=<your-backend-url>

# Port Configuration
PORT=3000

# Feature Flags
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

**IMPORTANT**: Do NOT modify `REACT_APP_BACKEND_URL` in the .env file. It is configured for the deployment environment.

### 4. MongoDB Setup

#### Start MongoDB Service
```bash
# On Linux/Mac:
sudo systemctl start mongod

# On Windows:
net start MongoDB

# Or run MongoDB manually:
mongod --dbpath /path/to/data/directory
```

#### Verify MongoDB Connection
```bash
mongosh
# Should connect to MongoDB shell
```

---

## ⚙️ Environment Variables

### Backend Variables

| Variable | Description | Example | Notes |
|----------|-------------|---------|-------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` | Configured for local access |
| `DB_NAME` | Database name | `smart_home_db` | |
| `HOST` | Server host | `0.0.0.0` | DO NOT MODIFY |
| `PORT` | Server port | `8001` | DO NOT MODIFY |

### Frontend Variables

| Variable | Description | Example | Notes |
|----------|-------------|---------|-------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `https://your-domain.com` | DO NOT MODIFY |
| `PORT` | Development server port | `3000` | |
| `REACT_APP_ENABLE_VISUAL_EDITS` | Enable visual editing | `false` | |

**CRITICAL NOTES**:
- Backend MUST run on port 8001 for Kubernetes ingress
- All backend API routes MUST be prefixed with `/api`
- Frontend accesses backend ONLY via `REACT_APP_BACKEND_URL`
- Hot reload is enabled - only restart when installing dependencies or modifying .env

---

## 🏃 Running the Application

### Using Supervisor (Recommended)

Supervisor is configured to manage both frontend and backend:

```bash
# Check status
sudo supervisorctl status

# Start all services
sudo supervisorctl start all

# Restart services (only when needed)
sudo supervisorctl restart frontend
sudo supervisorctl restart backend
sudo supervisorctl restart all

# View logs
sudo supervisorctl tail -f frontend
sudo supervisorctl tail -f backend

# Stop services
sudo supervisorctl stop all
```

**When to Restart**:
- After installing new dependencies (yarn add / pip install)
- After modifying .env files
- NOT needed for code changes (hot reload is enabled)

### Manual Development Mode

Only use this if supervisor is not available:

#### Terminal 1 - Start Backend
```bash
cd backend
source venv/bin/activate  # If using virtual environment
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

#### Terminal 2 - Start Frontend
```bash
cd frontend
yarn start
```

### Access the Application

- **Frontend**: http://localhost:3000 or your configured domain
- **Backend API**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs
- **MongoDB**: mongodb://localhost:27017

---

## 📁 Project Structure

```
/app
├── backend/
│   ├── server.py              # Main FastAPI application with /api prefix
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Backend environment variables (DO NOT MODIFY URLs)
│   └── venv/                  # Virtual environment (if created)
│
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Shadcn UI components (calendar, button, card, etc.)
│   │   │   ├── HeaderNew.jsx # Navigation header with theme toggle
│   │   │   ├── Footer.jsx    # Footer with social links and branding
│   │   │   ├── HeroCarousel.jsx # Auto-rotating hero slider
│   │   │   ├── Chatbot.jsx   # AI assistant chatbot
│   │   │   ├── ProductSelector.jsx # Guided solution finder
│   │   │   ├── Service.jsx   # Service & warranty section
│   │   │   ├── SolutionsNew.jsx # Solutions grid
│   │   │   ├── TailoredScenarios.jsx # Scenario tabs
│   │   │   └── ThemeProvider.jsx # Dark/light theme management
│   │   ├── pages/            # Page components
│   │   │   ├── ProductsPage.jsx # Product listing with search & categories
│   │   │   ├── ProductDetailPage.jsx # Individual product view
│   │   │   ├── AboutPage.jsx # About with India map
│   │   │   └── ContactPage.jsx # Contact form
│   │   ├── hooks/            # Custom React hooks
│   │   │   └── use-toast.js  # Toast notification hook
│   │   ├── App.js            # Main App component with routing
│   │   ├── App.css           # App styles
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Global styles with Tailwind
│   │   └── mock.js           # Mock data for development
│   ├── package.json          # Node dependencies (use yarn only!)
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── .env                  # Frontend environment variables (DO NOT MODIFY URLs)
│   └── craco.config.js       # Create React App configuration
│
└── README.md                 # This file
```

---

## 🚢 Deployment

### Prerequisites for Deployment

- Server with Ubuntu/Debian or similar Linux distribution
- Domain name configured with DNS
- SSL certificate (recommended: Let's Encrypt)
- Supervisor for process management
- Nginx for reverse proxy

### Backend Deployment

#### 1. Prepare the Server
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python and pip
sudo apt install python3 python3-pip python3-venv -y

# Install MongoDB
sudo apt install mongodb -y
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

#### 2. Deploy Backend Code
```bash
# Copy backend files to server
scp -r backend/ user@your-server:/app/

# SSH into server
ssh user@your-server

# Navigate to backend directory
cd /app/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### 3. Configure Environment
```bash
# Create production .env file
nano .env
```

Add production variables:
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=smart_home_production
HOST=0.0.0.0
PORT=8001
```

#### 4. Set Up Supervisor
Create `/etc/supervisor/conf.d/backend.conf`:
```ini
[program:backend]
directory=/app/backend
command=/app/backend/venv/bin/uvicorn server:app --host 0.0.0.0 --port 8001
autostart=true
autorestart=true
stderr_logfile=/var/log/supervisor/backend.err.log
stdout_logfile=/var/log/supervisor/backend.out.log
```

Restart supervisor:
```bash
sudo supervisorctl reread
sudo supervisorctl update
sudo supervisorctl start backend
```

### Frontend Deployment

#### 1. Build Frontend
```bash
# On your local machine
cd frontend
yarn build
```

#### 2. Deploy to Server
```bash
# Copy build files to server
scp -r build/ user@your-server:/app/frontend/
```

#### 3. Configure Nginx

Create `/etc/nginx/sites-available/smart-home`:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /app/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API - CRITICAL: /api prefix routing
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/smart-home /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 4. Set Up SSL (Optional but Recommended)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Using Emergent Platform

If deploying on Emergent platform:

1. **Environment is Pre-configured**: MongoDB, Supervisor, and Nginx are already set up
2. **Environment Variables**: Use the platform's environment variable manager
3. **Deployment**: Push your code to the connected Git repository
4. **Auto-deployment**: Platform automatically builds and deploys
5. **URL Configuration**: Managed automatically - do not modify .env URLs

---

## 🐛 Troubleshooting

### Frontend Issues

#### Port Already in Use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=3001 yarn start
```

#### Module Not Found Errors
```bash
# Clear node_modules and reinstall with yarn (NEVER use npm)
rm -rf node_modules yarn.lock
yarn install
```

#### Build Errors
```bash
# Clear cache and rebuild
yarn cache clean
rm -rf node_modules build
yarn install
yarn build
```

#### Component Import Errors
- Ensure you're importing from the correct path
- Shadcn components are in `/components/ui/`
- Check for typos in import paths

### Backend Issues

#### MongoDB Connection Failed
```bash
# Check if MongoDB is running
sudo systemctl status mongodb

# Start MongoDB
sudo systemctl start mongodb

# Check connection string
mongosh mongodb://localhost:27017
```

#### Port Already in Use
```bash
# Find and kill process on port 8001
lsof -ti:8001 | xargs kill -9
```

#### Import Errors
```bash
# Reinstall dependencies
pip install -r requirements.txt --force-reinstall
```

#### API Routes Not Working
- Ensure all routes are prefixed with `/api`
- Check Kubernetes ingress configuration
- Verify backend is running on port 8001

### Common Issues

#### CORS Errors
- Verify `REACT_APP_BACKEND_URL` in frontend `.env`
- Check CORS configuration in `backend/server.py`
- Ensure backend is running and accessible

#### API Calls Failing
- Check browser console for errors
- Verify backend is running: `curl http://localhost:8001/api/`
- Check network tab in browser DevTools
- Ensure routes are prefixed with `/api`

#### Styling Issues
- Clear browser cache
- Check if Tailwind classes are correctly applied
- Verify dark mode classes are working
- Rebuild frontend: `yarn build`

#### Hot Reload Not Working
- Check if files are being saved correctly
- Restart development server
- Clear browser cache

---

## 📞 Contact

**Mahadeva Systems (Brand: Sha)**

- **Email**: smarthomeautomations25@gmail.com
- **Phone**: +91 9550509490
- **Address**: 123 Smart Home Street, Tech Park, Hyderabad, Telangana 500032, India

### Social Media
- **YouTube**: [Link]
- **LinkedIn**: [Link]
- **Facebook**: [Link]
- **Instagram**: [Link]
- **WhatsApp**: +91 9550509490
- **Twitter/X**: [Link]

---

## 📄 License

© 2024 Mahadeva Systems. All rights reserved.

**Smart Living, Simplified**

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

---

## 📝 Changelog

### Latest Updates (January 2025)

#### Header Navigation
- ✅ Scroll-based highlighting for Solutions/Scenarios sections
- ✅ Active page highlighting with opposite color theme

#### Footer Quick Links
- ✅ Fixed Home link to scroll to top on all pages
- ✅ Fixed Products/About/Contact links to scroll to top after navigation
- ✅ Fixed Solutions/Scenarios links to navigate and scroll from any page

#### Product Selector
- ✅ Removed X icon from Cancel button, kept text label

#### About Page Redesign
- ✅ Section 1: Company Story (top)
- ✅ Section 2: Our Presence Across India (SVG map with Telangana & AP)
- ✅ Section 3: Values Grid (4 cards with icons)
- ✅ Section 4: Stats (projects, states, satisfaction)
- ✅ Section 5: What Our Clients Say (gray box style, white cards, hover effects)

#### Product Images
- ✅ Local product images from `/public/images/products/`
- ✅ Brand logos in `/public/images/logo/`
- ✅ Dynamic favicons based on theme

---

## 📝 TODO

### High Priority

#### Individual Product Page Enhancements
- [ ] Implement image carousel/slider with 3-5 product images
- [ ] Add multiple angle product photography
- [ ] Create color variation selector (if applicable)
- [ ] Add detailed specifications table
- [ ] Implement zoom functionality for product images
- [ ] Add "Related Products" section
- [ ] Include customer reviews/testimonials section

#### Contact Page Refinements
- [ ] Add form validation with better error messages
- [ ] Implement email service integration (SendGrid/AWS SES)
- [ ] Add Google Maps integration for office location
- [ ] Create success confirmation page after form submission
- [ ] Add file upload for project requirements/blueprints
- [ ] Implement form auto-save to prevent data loss

#### Backend Integration
- [ ] Connect contact form to MongoDB
- [ ] Create API endpoints for form submissions
- [ ] Implement email notification system
- [ ] Add admin dashboard for inquiry management
- [ ] Create API for product management (CRUD operations)
- [ ] Add analytics tracking

### Medium Priority

#### Responsive Testing & Optimization
- [ ] Comprehensive testing on various mobile devices
- [ ] Test on tablets (iPad, Android tablets)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Performance optimization for mobile networks
- [ ] Image lazy loading implementation
- [ ] Progressive Web App (PWA) features

#### Theme & Design
- [ ] Implement alternative color schemes (Teal, Purple, Emerald, Orange)
- [ ] Add theme customization option in settings
- [ ] Create print-friendly styles for product pages
- [ ] Add animations for page transitions
- [ ] Implement skeleton loaders for better UX

#### SEO & Marketing
- [ ] Add meta tags for all pages
- [ ] Implement Open Graph tags for social sharing
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD)
- [ ] Add Google Analytics integration
- [ ] Create blog section for content marketing

### Low Priority

#### Additional Features
- [ ] Multi-language support (Hindi, Telugu, etc.)
- [ ] Currency conversion for international clients
- [ ] Product comparison tool
- [ ] Wishlist/favorites functionality
- [ ] Share products on social media
- [ ] Video demonstrations for products
- [ ] 3D product viewer
- [ ] AR try-before-you-buy feature
- [ ] Live chat integration
- [ ] FAQ section with search

#### Admin Panel
- [ ] Dashboard for managing products
- [ ] Inquiry management system
- [ ] Analytics and reporting
- [ ] User management
- [ ] Content management system
- [ ] Inventory tracking

#### Testing & Documentation
- [ ] Unit tests for components
- [ ] Integration tests for APIs
- [ ] E2E tests with Playwright/Cypress
- [ ] API documentation with examples
- [ ] Component storybook
- [ ] User guide/documentation

### Future Enhancements

- [ ] Customer portal for tracking installations
- [ ] Mobile app (React Native)
- [ ] Voice assistant integration (Alexa, Google Home)
- [ ] AI-powered recommendation engine
- [ ] Virtual showroom with 360° views
- [ ] Installation scheduling system
- [ ] Payment gateway integration
- [ ] Customer testimonials with photo galleries
- [ ] Project portfolio showcase
- [ ] Partner/dealer portal

---

**Note**: This is a production-ready application currently using mock data. For full deployment:
1. Connect to production MongoDB instance
2. Implement backend API endpoints for all features
3. Set up proper authentication and authorization
4. Add comprehensive error handling and logging
5. Set up monitoring and analytics
6. Implement backup and disaster recovery

---

**Happy Coding! 🚀**
