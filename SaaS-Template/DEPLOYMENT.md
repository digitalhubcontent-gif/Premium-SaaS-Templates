# 🚀 Deployment Guide

Complete guide to deploying your SaaS template to production.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Vercel (Recommended)](#vercel-recommended)
3. [Netlify](#netlify)
4. [AWS Amplify](#aws-amplify)
5. [Self-Hosted](#self-hosted)
6. [Domain Setup](#domain-setup)
7. [Custom Domain with DNS](#custom-domain-with-dns)
8. [Performance Optimization](#performance-optimization)
9. [Monitoring & Analytics](#monitoring--analytics)
10. [Security Best Practices](#security-best-practices)

---

## Pre-Deployment Checklist

- [ ] **Code quality**: Run `npm run lint` and fix any issues
- [ ] **Type safety**: Run `npm run type-check` and verify no errors
- [ ] **Build test**: Run `npm run build` locally
- [ ] **Environment variables**: Set all required `.env.local` values
- [ ] **Content review**: Verify all text, pricing, and features
- [ ] **Link verification**: Test all navigation links
- [ ] **Mobile testing**: Test on iOS and Android devices
- [ ] **Dark mode**: Verify dark mode works correctly
- [ ] **Analytics**: Set up Google Analytics or similar
- [ ] **SEO**: Verify meta tags and Open Graph setup
- [ ] **SSL certificate**: Ensure HTTPS is configured
- [ ] **Backup**: Create a backup of your code and data

---

## Vercel (Recommended)

**Why Vercel?**
- Optimized for Next.js
- Automatic deployments
- Edge caching
- Environmental variables UI
- Preview deployments
- Free tier available

### Step 1: Prepare Repository

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/SaaS-Template.git
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket
3. Click "New Project"
4. Import your repository
5. Framework: `Next.js`
6. Root Directory: `./` (default)
7. Environment Variables: Add your `.env.local` values
8. Click "Deploy"

### Step 3: Configure Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Click "Add"

### Step 4: Auto-Deployment

Vercel automatically deploys on:
- Push to `main` branch (production)
- Push to other branches (preview)
- Pull requests (preview)

---

## Netlify

### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect GitHub/GitLab/Bitbucket
4. Select your repository

### Step 2: Build Settings

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: 18.x or higher

### Step 3: Environment Variables

1. Go to Site Settings → Build & Deploy → Environment
2. Add variables from `.env.local`
3. Trigger redeploy

### Step 4: Deploy

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## AWS Amplify

### Step 1: Create Amplify App

```bash
npm install -g @aws-amplify/cli
amplify init
```

### Step 2: Connect Repository

1. Go to AWS Amplify console
2. Click "New app"
3. Select GitHub
4. Authorize and connect your repository
5. Select your branch

### Step 3: Build Settings

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - 'node_modules/**/*'
```

### Step 4: Deploy

Push to your repository branch, and AWS Amplify will automatically deploy.

---

## Self-Hosted

### Option A: VPS (DigitalOcean, Linode, etc.)

#### 1. Setup Server

```bash
# SSH into your server
ssh root@your_server_ip

# Update system
apt update && apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs

# Install PM2 (process manager)
npm install -g pm2

# Install Nginx (reverse proxy)
apt install -y nginx
```

#### 2. Clone Repository

```bash
cd /var/www
git clone https://github.com/yourusername/SaaS-Template.git
cd SaaS-Template
npm install
npm run build
```

#### 3. Configure PM2

```bash
pm2 start npm --name "saas-app" -- start
pm2 startup
pm2 save
```

#### 4. Configure Nginx

Create `/etc/nginx/sites-available/saas-template`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
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

Enable site:
```bash
ln -s /etc/nginx/sites-available/saas-template /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

#### 5. Setup SSL (Let's Encrypt)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com
```

#### 6. Setup Auto-Updates

Create `/var/www/SaaS-Template/update.sh`:

```bash
#!/bin/bash
cd /var/www/SaaS-Template
git pull origin main
npm install
npm run build
pm2 restart saas-app
```

Add to crontab:
```bash
0 * * * * /var/www/SaaS-Template/update.sh
```

### Option B: Docker

#### 1. Create Dockerfile

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY .next ./.next
COPY public ./public

EXPOSE 3000

CMD ["npm", "start"]
```

#### 2. Create .dockerignore

```
node_modules
.git
.next
.env
.env.local
```

#### 3. Build & Run

```bash
docker build -t saas-template .
docker run -p 3000:3000 --env-file .env.production saas-template
```

#### 4. Use Docker Compose (Optional)

```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

Run with: `docker-compose up -d`

---

## Domain Setup

### Step 1: Purchase Domain

Popular registrars:
- Namecheap
- GoDaddy
- Google Domains
- Route53

### Step 2: Configure DNS

#### For Vercel:
```
CNAME: yourdomain.com → cname.vercel-dns.com
```

#### For Netlify:
```
DNS records: As per Netlify instructions
```

#### For Self-Hosted:
```
A record: yourdomain.com → your_server_ip
CNAME: www.yourdomain.com → yourdomain.com
```

### Step 3: SSL Certificate

- **Vercel/Netlify**: Automatic (Let's Encrypt)
- **Self-Hosted**: Use Certbot (shown above)

---

## Performance Optimization

### 1. Enable Compression

```nginx
gzip on;
gzip_types text/plain text/css text/javascript application/json;
gzip_min_length 1000;
```

### 2. Cache Static Assets

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. Image Optimization

Next.js auto-optimizes images, but ensure:
- Use `<Image>` component instead of `<img>`
- Specify `width` and `height`
- Use `priority` for above-the-fold images

### 4. Bundle Analysis

```bash
npm install -D @next/bundle-analyzer
```

Update `next.config.js`:
```javascript
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // ... config
});
```

Run: `ANALYZE=true npm run build`

---

## Monitoring & Analytics

### Google Analytics

1. Create Google Analytics property
2. Get `GA_ID`
3. Add to `.env.local`:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=GA_ID
```

### Sentry (Error Tracking)

```bash
npm install @sentry/nextjs
```

Configure in `next.config.js`:
```javascript
withSentryConfig(config, {
  org: "your-org",
  project: "your-project",
  authToken: process.env.SENTRY_AUTH_TOKEN,
});
```

### Datadog (APM Monitoring)

```bash
npm install dd-trace @datadog/browser-rum
```

---

## Security Best Practices

### 1. Environment Variables
- ✅ Never commit `.env.local`
- ✅ Use `.env.example` template
- ✅ Set in deployment platform's UI

### 2. HTTPS Only
- ✅ Enforce in Nginx:
```nginx
if ($scheme != "https") {
    return 301 https://$server_name$request_uri;
}
```

### 3. Security Headers
Already configured in `next.config.js`:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block

### 4. Regular Updates
```bash
npm audit
npm audit fix
npm outdated
```

### 5. Automated Backups
```bash
0 2 * * * /backup-script.sh
```

### 6. DDoS Protection
- Use Cloudflare (free tier)
- Enables WAF and rate limiting

### 7. Monitor Uptime
- Use Pingdom, UptimeRobot, or similar
- Set up alerts

---

## Rollback Procedure

### If Something Goes Wrong:

**Vercel**: Automatic rollback available in deployment history
**Netlify**: Click previous deployment in "Deploys" tab
**Self-Hosted**: 
```bash
git revert <commit-hash>
git push
pm2 restart saas-app
```

---

## Maintenance

### Weekly
- [ ] Monitor error tracking (Sentry/Datadog)
- [ ] Check uptime monitoring

### Monthly
- [ ] Review analytics
- [ ] Check for security updates: `npm audit`
- [ ] Update dependencies: `npm update`

### Quarterly
- [ ] Security audit
- [ ] Performance review
- [ ] Backup verification

---

**Deployment Status**: ✅ Ready for Production

For questions or issues, refer to the framework documentation:
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
