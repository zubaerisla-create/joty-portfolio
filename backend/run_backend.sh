#!/usr/bin/env bash
cd /var/www/jotirmoya-portfolio/backend
exec /var/www/jotirmoya-portfolio/backend/.venv/bin/uvicorn app.main:app --host 127.0.0.1 --port 8008
