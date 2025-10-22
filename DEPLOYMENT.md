# Deployment Guide

This guide covers deploying the Portfolio Builder application to production environments.

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed and approved
- [ ] No console errors or warnings
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Security audit completed
- [ ] Performance optimized
- [ ] Backup of current production

## Build for Production

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Verify build output
ls -la dist/
```

The build will create:

- Static HTML/CSS/JS files
- Optimized bundle with code splitting
- Source maps (optional)
- All assets in `dist/` directory

## Environment Configuration

Create a `.env` file in the root directory:

```env
NODE_ENV=production
VITE_API_URL=https://your-domain.com/api
DATABASE_URL=your-database-connection-string
```

See `.env.example` for all available variables.

## Database Setup

### Initialize Database

```bash
# Run migrations (if using Drizzle)
npm run db:migrate

# Seed initial data (if needed)
npm run db:seed
```

### Backup Strategy

1. **Before Deployment**:

   ```bash
   mysqldump -u root -p portfolio_db > backup_$(date +%Y%m%d_%H%M%S).sql
   ```

2. **Regular Backups**: Set up automated daily backups

3. **Verification**: Test backup restoration monthly

## Deployment Options

### Option 1: Traditional Server (Node.js + Static Files)

#### Prerequisites

- Node.js runtime (v16+)
- Reverse proxy (nginx/Apache)
- Process manager (PM2/systemd)
- SSL certificate

#### Steps

1. **Deploy files to server**:

   ```bash
   scp -r dist/ user@server:/var/www/portfolio/
   scp -r node_modules/ user@server:/var/www/portfolio/
   scp server/ user@server:/var/www/portfolio/
   ```

2. **Install PM2 globally**:

   ```bash
   npm install -g pm2
   ```

3. **Create PM2 ecosystem config** (`ecosystem.config.js`):

   ```javascript
   module.exports = {
     apps: [
       {
         name: "portfolio",
         script: "./server/index.ts",
         env: {
           NODE_ENV: "production",
         },
         watch: false,
         instances: "max",
         exec_mode: "cluster",
       },
     ],
   };
   ```

4. **Start with PM2**:

   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

5. **Configure nginx**:

   ```nginx
   server {
     listen 443 ssl http2;
     server_name your-domain.com;

     ssl_certificate /path/to/cert.pem;
     ssl_certificate_key /path/to/key.pem;

     # Serve static files
     location / {
       root /var/www/portfolio/dist;
       try_files $uri $uri/ /index.html;
     }

     # Proxy API requests
     location /api {
       proxy_pass http://localhost:3000;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

### Option 2: Vercel Deployment

1. **Connect repository to Vercel**:

   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repository

2. **Configure build settings**:

   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Set environment variables** in Vercel dashboard

4. **Deploy**:
   - Push to main branch
   - Vercel automatically deploys

### Option 3: Docker Deployment

#### Create Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server

EXPOSE 3000

CMD ["node", "server/index.ts"]
```

#### Build and run

```bash
# Build image
docker build -t portfolio:latest .

# Run container
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  --name portfolio \
  portfolio:latest

# With Docker Compose
docker-compose up -d
```

#### docker-compose.yml example

```yaml
version: "3.8"

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      DATABASE_URL: postgresql://user:pass@db:5432/portfolio
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_DB: portfolio
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

### Option 4: AWS Deployment

#### Using AWS Amplify

1. **Connect repository** to AWS Amplify
2. **Set build settings**:
   - Build command: `npm run build`
   - Start command: `node server/index.ts`
3. **Configure environment variables**
4. **Deploy**: Amplify handles it automatically

#### Using EC2

1. **Create EC2 instance** (Ubuntu 20.04+)
2. **Install dependencies**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm nginx
   ```
3. **Clone repository** and deploy using PM2 (see Option 1)
4. **Configure security groups** for HTTP/HTTPS
5. **Set up SSL** with Let's Encrypt:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot certonly --nginx -d your-domain.com
   ```

## Post-Deployment Verification

```bash
# Check server status
curl https://your-domain.com
curl https://your-domain.com/api/health

# Check logs
pm2 logs portfolio

# Monitor performance
pm2 monit
```

## Performance Optimization

### Frontend

- Enable gzip compression in web server
- Set cache headers for static assets
- Use CDN for assets (CloudFront, Cloudflare)
- Monitor Core Web Vitals with Lighthouse

### Backend

- Use connection pooling for database
- Implement API caching with Redis
- Monitor response times
- Set up rate limiting

### Database

- Create indexes on frequently queried fields
- Regular vacuum and analyze operations
- Monitor query performance
- Set up read replicas for scaling

## Monitoring & Logging

### Application Monitoring

```bash
# Install monitoring tools
npm install pm2-logrotate
pm2 install pm2-logrotate

# Configure PM2 monitoring
pm2 web
```

### Log Aggregation

Consider services like:

- CloudWatch (AWS)
- Stackdriver (GCP)
- ELK Stack (self-hosted)
- Datadog

### Alerts

Set up alerts for:

- Application crashes
- High error rates
- High response times
- Database connection failures

## Rolling Back

If deployment fails:

```bash
# Stop current version
pm2 stop portfolio

# Revert to previous version
git checkout previous-commit-hash
npm install
npm run build

# Start again
pm2 start ecosystem.config.js
```

## CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        run: |
          # Add your deployment script here
          ssh user@server './deploy.sh'
```

## Troubleshooting

### Application won't start

```bash
# Check logs
pm2 logs portfolio

# Verify environment variables
echo $NODE_ENV
echo $DATABASE_URL

# Test database connection
npm run db:test
```

### High memory usage

```bash
# Check process memory
pm2 monit

# Restart with memory limit
pm2 restart portfolio --max-memory-restart 500M
```

### Slow API responses

```bash
# Profile application
node --prof server/index.ts

# Analyze profile
node --prof-process isolate-*.log > profile.txt
```

## Security Considerations

- [ ] Enable HTTPS/TLS
- [ ] Set strong CSP headers
- [ ] Implement rate limiting
- [ ] Sanitize user input
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Enable CORS only for trusted domains
- [ ] Regular security audits
- [ ] Implement authentication if needed
- [ ] Log security events

## Maintenance

### Weekly

- Monitor logs for errors
- Check uptime/availability
- Review performance metrics

### Monthly

- Update dependencies
- Security scanning
- Database optimization
- Backup verification

### Quarterly

- Full security audit
- Performance benchmarking
- Disaster recovery test
- Capacity planning

---

**Last Updated:** October 22, 2025
