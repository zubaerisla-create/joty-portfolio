# Jotirmoya Bhakta Sarker — Personal Portfolio Website

A distinctive, minimal, editorial-style personal portfolio website for **Jotirmoya Bhakta Sarker**, an undergraduate Software Engineering student at **Daffodil International University (DIU)**.

Designed with an academic and creative personality, focusing on analytical problem solving, foundational software engineering, competitive programming club participation, and future academic research aspirations.

---

## 1. Visual & Editorial Identity

The design follows a minimal editorial layout inspired by academic monographs and contemporary design magazines.

### Color Palette

| Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Off-White** | `#FFFCF7` | Primary canvas background |
| **Dark Charcoal** | `#242126` | Deep contrast text, headings, borders |
| **Muted Gray** | `#77717A` | Secondary text, captions, metadata |
| **Soft Pastel Pink** | `#F6C7D8` | Tasteful accent, badges, node highlights |
| **Light Butter Yellow** | `#FFF2B8` | Tasteful accent, hover states, badges |
| **Pure White** | `#FFFFFF` | Card surfaces and elevation layers |

> **Design Principle:** Pink and yellow are utilized solely as restrained, elegant accents rather than loud backgrounds.

---

## 2. Architecture & Technology Stack

```
jotirmoya-portfolio/
├── frontend/                     # Next.js 14 App Router + TypeScript
│   ├── app/                      # Layout, metadata, sitemap, robots, page
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky header with mobile drawer
│   │   ├── Footer.tsx            # Academic signoff and back-to-top
│   │   ├── sections/             # Modular section components
│   │   │   ├── Hero.tsx          # Authentic student intro & CTAs
│   │   │   ├── About.tsx         # 2-column editorial bio & pillars
│   │   │   ├── Skills.tsx        # Categorized skill tags (no fake %)
│   │   │   ├── Research.tsx      # "Curiosity Today. Research Tomorrow."
│   │   │   ├── Journey.tsx       # Vertical milestone timeline
│   │   │   ├── Community.tsx     # DIU CP Club spotlight
│   │   │   └── Contact.tsx       # Live form connected to FastAPI
│   │   └── ui/
│   │       └── ConnectedNodes.tsx # Interactive diagram in SVG
│   ├── lib/                      # API client and utility helpers
│   ├── types/                    # TypeScript interfaces for API models
│   └── tailwind.config.ts        # Color tokens & typography configuration
│
├── backend/                      # Python FastAPI REST API
│   ├── app/
│   │   ├── main.py               # Application factory, lifespan, CORS & rate limit
│   │   ├── api/                  # Endpoints routing hub
│   │   │   └── endpoints/        # health, portfolio, skills, research, contact
│   │   ├── core/                 # Config (pydantic-settings), database, rate limiter
│   │   ├── models/               # SQLAlchemy ORM models (contact, skills, research, timeline)
│   │   ├── schemas/              # Pydantic validation & response schemas
│   │   └── services/             # Data seeding & contact persistence logic
│   ├── tests/                    # Pytest test suite
│   ├── requirements.txt          # Python dependencies
│   ├── pytest.ini               # Pytest configuration
│   └── .env.example              # Environment variables template
│
├── README.md                     # Comprehensive documentation & deployment guide
└── .gitignore                    # Version control exclusions
```

---

## 3. Local Development Setup

### Prerequisites
- **Node.js**: v18+ or v20+
- **Python**: 3.10, 3.11, or 3.12
- **npm** or **pnpm**

---

### Step 1: Start the Backend (FastAPI)

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Create and activate a Python virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Copy environment configuration
cp .env.example .env

# 5. Run the FastAPI development server
uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

- API Server: `http://localhost:8000`
- Interactive Swagger Docs: `http://localhost:8000/docs`
- Redoc API Reference: `http://localhost:8000/redoc`

---

### Step 2: Start the Frontend (Next.js)

Open a new terminal window:

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Verify .env.local points to the backend
# NEXT_PUBLIC_API_URL=http://localhost:8000

# 4. Run the development server
npm run dev
```

- Web Application: `http://localhost:3000`

---

## 4. Running Backend Tests

The test suite validates health status, portfolio payload, categorized skills, research milestones, input sanitization, and contact form handling:

```bash
cd backend
source .venv/bin/activate
pytest tests/ -v
```

---

## 5. REST API Endpoints

| Method | Endpoint | Description | Rate Limit |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service health and environment status | None |
| `GET` | `/api/portfolio` | Full portfolio profile, bio, timeline, and social links | None |
| `GET` | `/api/skills` | Categorized skill groups (Problem Solving, Development, Business) | None |
| `GET` | `/api/research` | Research philosophy and transparent academic goals | None |
| `POST` | `/api/contact` | Submits and validates a contact message into SQLite/PostgreSQL | 5/min |

### Sample Contact Request Body

```json
{
  "name": "Abdullah Al Mamun",
  "email": "student@diu.edu.bd",
  "subject": "Research Paper Reading Group",
  "message": "Hello Jotirmoya, would you like to join our upcoming session on distributed consensus algorithms?"
}
```

---

## 6. Production Deployment Guide (Ubuntu VPS with Nginx & SSL)

This guide walks through deploying the portfolio onto an Ubuntu 22.04 / 24.04 LTS server with Nginx as a reverse proxy, systemd services, and Let's Encrypt SSL.

### 1. Server Preparation
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y python3-pip python3-venv git nginx certbot python3-certbot-nginx

# Install Node.js 20 LTS via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

### 2. Clone the Repository
```bash
cd /var/www
sudo git clone <YOUR_GIT_REPO_URL> jotirmoya-portfolio
sudo chown -R $USER:$USER /var/www/jotirmoya-portfolio
cd /var/www/jotirmoya-portfolio
```

### 3. Setup Backend Systemd Service
```bash
cd /var/www/jotirmoya-portfolio/backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with production CORS origins: CORS_ORIGINS="https://yourdomain.com"
```

Create `/etc/systemd/system/portfolio-backend.service`:
```ini
[Unit]
Description=FastAPI Portfolio Backend Service
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/jotirmoya-portfolio/backend
Environment="PATH=/var/www/jotirmoya-portfolio/backend/.venv/bin"
ExecStart=/var/www/jotirmoya-portfolio/backend/.venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8000 --workers 2
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the backend:
```bash
sudo systemctl daemon-reload
sudo systemctl enable portfolio-backend
sudo systemctl start portfolio-backend
```

### 4. Setup Frontend (Production Next.js)
```bash
cd /var/www/jotirmoya-portfolio/frontend
echo "NEXT_PUBLIC_API_URL=https://yourdomain.com" > .env.local
npm install
npm run build
```

Create `/etc/systemd/system/portfolio-frontend.service`:
```ini
[Unit]
Description=Next.js Portfolio Frontend Service
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/jotirmoya-portfolio/frontend
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm run start -- -p 3000
Restart=always

[Install]
WantedBy=multi-user.target
```

Enable and start the frontend:
```bash
sudo systemctl daemon-reload
sudo systemctl enable portfolio-frontend
sudo systemctl start portfolio-frontend
```

### 5. Configure Nginx Reverse Proxy
Create `/etc/nginx/sites-available/jotirmoya-portfolio`:

```nginx
server {
    server_name yourdomain.com www.yourdomain.com;

    # Frontend Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Backend FastAPI API
    location /api/ {
        proxy_pass http://127.0.0.1:8000/api/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # API Documentation
    location ~ ^/(docs|redoc|openapi.json) {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Enable the site and configure SSL:
```bash
sudo ln -s /etc/nginx/sites-available/jotirmoya-portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install free Let's Encrypt SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 7. Authenticity & Ethics Notice

This portfolio truthfully represents an undergraduate student pursuing Software Engineering at Daffodil International University. It deliberately refrains from claiming fictitious professional experience, fake job titles, fabricated GitHub percentages, or non-existent research credentials. All information reflects an honest, dedicated learning trajectory.
