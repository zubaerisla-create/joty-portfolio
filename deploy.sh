#!/usr/bin/env bash
set -e

echo "=== [CI/CD] Starting Deployment for Jotirmoya Portfolio ==="
export PATH=$PATH:/usr/bin:/usr/local/bin

REPO_DIR="/var/www/jotirmoya-portfolio"
mkdir -p "$REPO_DIR"
cd "$REPO_DIR"

# 1. Fetch latest changes
if [ -d ".git" ]; then
  echo "Updating existing git repository..."
  git fetch origin main
  git reset --hard origin/main
else
  echo "Cloning repository..."
  git clone https://github.com/zubaerisla-create/joty-portfolio.git .
fi

# 2. Setup Backend
echo "Setting up Python backend..."
cd "$REPO_DIR/backend"
if [ ! -d ".venv" ]; then
  python3 -m venv .venv
fi

.venv/bin/pip install --upgrade pip
.venv/bin/pip install -r requirements.txt
chmod +x run_backend.sh

cat << 'ENVEOF' > .env
PROJECT_NAME="Jotirmoya Bhakta Sarker Portfolio API"
VERSION="1.0.0"
ENVIRONMENT="production"
DEBUG=False
DATABASE_URL="sqlite:///./portfolio.db"
CORS_ORIGINS="https://jotirmoya.hosensoft.com,http://jotirmoya.hosensoft.com,http://31.97.180.176"
RATE_LIMIT_CONTACT="10/minute"
HOST="127.0.0.1"
PORT=8008
ENVEOF

pm2 restart jotirmoya-backend 2>/dev/null || pm2 start "$REPO_DIR/backend/run_backend.sh" --name "jotirmoya-backend"

# 3. Setup Frontend
echo "Setting up Next.js frontend..."
cd "$REPO_DIR/frontend"
cat << 'ENVEOF' > .env.local
NEXT_PUBLIC_API_URL=https://jotirmoya.hosensoft.com
ENVEOF

npm install
npm run build

pm2 restart jotirmoya-frontend 2>/dev/null || pm2 start npm --name "jotirmoya-frontend" -- run start -- -p 3008

pm2 save

# 4. Reload Nginx
nginx -t && systemctl reload nginx

# 5. Service verification
sleep 2
echo "Verifying backend health..."
curl -s http://127.0.0.1:8008/api/health
echo ""
echo "Verifying frontend status..."
curl -s -I http://127.0.0.1:3008 | head -n 4

echo "=== [CI/CD] Deployment Successfully Completed ==="
