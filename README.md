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

---

## 🌟 Overview

Sha is a comprehensive smart home automation platform that showcases:
- Premium smart home products (touch panels, lighting control, CCTV, sensors)
- Tailored solutions for residences, offices, and hotels
- Service & support information with 1-year free warranty
- Contact and inquiry management system

---

## ✨ Features

### Frontend
- 🎨 **Modern UI/UX**: Built with React 19 and Shadcn UI components
- 🌓 **Dark/Light Theme**: Seamless theme switching with persistent preferences
- 📱 **Responsive Design**: Optimized for all device sizes
- 🔍 **Product Search**: Real-time product filtering and search
- 🎯 **Category Navigation**: Easy product browsing by category
- 🖼️ **Image Carousel**: Hero slider showcasing key products
- 📄 **Dynamic Routing**: Separate pages for products, about, and contact
- ⚡ **Fast Navigation**: Smooth scrolling and instant page transitions

### Backend
- 🚀 **FastAPI**: Modern, fast Python web framework
- 🗄️ **MongoDB**: NoSQL database for flexible data storage
- 🔒 **CORS Enabled**: Secure cross-origin resource sharing
- 📊 **RESTful APIs**: Clean API structure with proper routing
- 🔄 **Async Operations**: Non-blocking database operations

### Additional Features
- 📧 **Contact Form**: Inquiry submission system
- 🔗 **Social Media Integration**: Links to all major platforms
- 🎭 **Hover Effects**: Interactive product cards
- 📱 **Mobile Menu**: Responsive navigation for mobile devices

---

## 🛠️ Tech Stack

### Frontend
- **React 19.0.0** - UI library
- **React Router DOM 7.5.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Shadcn UI** - Pre-built component library
- **Axios 1.8.4** - HTTP client
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

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
- **ESLint** - JavaScript linting
- **Ruff** - Python linting

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

# Server Configuration
HOST=0.0.0.0
PORT=8001
```

### 3. Frontend Setup

#### Navigate to Frontend Directory
```bash
cd ../frontend
```

#### Install Node Dependencies
```bash
yarn install
```

#### Set Up Environment Variables
Create a `.env` file in the `frontend` directory:
```bash
touch .env
```

Add the following variables:
```env
# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:8001

# Port Configuration
PORT=3000

# Feature Flags
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

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

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb://localhost:27017` |
| `DB_NAME` | Database name | `smart_home_db` |
| `HOST` | Server host | `0.0.0.0` |
| `PORT` | Server port | `8001` |

### Frontend Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BACKEND_URL` | Backend API URL | `http://localhost:8001` |
| `PORT` | Development server port | `3000` |
| `REACT_APP_ENABLE_VISUAL_EDITS` | Enable visual editing | `false` |

---

## 🏃 Running the Application

### Option 1: Using Supervisor (Production-like)

If supervisor is configured:
```bash
# Start all services
sudo supervisorctl start all

# Check status
sudo supervisorctl status

# View logs
sudo supervisorctl tail -f frontend
sudo supervisorctl tail -f backend

# Restart services
sudo supervisorctl restart all
```

### Option 2: Manual Development Mode

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

#### Terminal 3 - MongoDB (if not running as service)
```bash
mongod --dbpath /path/to/data
```

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8001
- **API Documentation**: http://localhost:8001/docs
- **MongoDB**: mongodb://localhost:27017

---

## 📁 Project Structure

```
/app
├── backend/
│   ├── server.py              # Main FastAPI application
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Backend environment variables
│   └── venv/                  # Virtual environment (if created)
│
├── frontend/
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── ui/           # Shadcn UI components
│   │   │   ├── HeaderNew.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroCarousel.jsx
│   │   │   ├── Service.jsx
│   │   │   ├── SolutionsNew.jsx
│   │   │   ├── TailoredScenarios.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── ProductsPage.jsx
│   │   │   ├── ProductDetailPage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   └── ContactPage.jsx
│   │   ├── hooks/            # Custom React hooks
│   │   ├── App.js            # Main App component
│   │   ├── App.css           # App styles
│   │   ├── index.js          # Entry point
│   │   ├── index.css         # Global styles
│   │   └── mock.js           # Mock data
│   ├── package.json          # Node dependencies
│   ├── tailwind.config.js    # Tailwind configuration
│   ├── .env                  # Frontend environment variables
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

    # Backend API
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
# Clear node_modules and reinstall
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

### Common Issues

#### CORS Errors
- Verify `REACT_APP_BACKEND_URL` in frontend `.env`
- Check CORS configuration in `backend/server.py`
- Ensure backend is running and accessible

#### API Calls Failing
- Check browser console for errors
- Verify backend is running: `curl http://localhost:8001/api/`
- Check network tab in browser DevTools

#### Styling Issues
- Clear browser cache
- Check if Tailwind classes are correctly applied
- Rebuild frontend: `yarn build`

---

## 📞 Contact

**Mahadeva Systems (Brand: Sha)**

- **Email**: smarthomeautomations25@gmail.com
- **Phone**: +91 9550509490
- **Address**: 123 Smart Home Street, Tech Park, Hyderabad, Telangana 500032, India

### Social Media
- YouTube: [Link]
- LinkedIn: [Link]
- Facebook: [Link]
- Instagram: [Link]
- WhatsApp: +91 9550509490
- Twitter/X: [Link]

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

## 📝 Notes

- This is a production-ready application with mock data
- For actual deployment, connect to a real MongoDB instance with proper data
- Update environment variables for production use
- Implement proper authentication and authorization as needed
- Add proper error handling and logging
- Set up monitoring and analytics

---

**Happy Coding! 🚀**
