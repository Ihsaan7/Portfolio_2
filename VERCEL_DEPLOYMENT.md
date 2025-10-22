# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Portfolio Builder application to Vercel.

## Prerequisites

- [GitHub account](https://github.com)
- [Vercel account](https://vercel.com) (free tier available)
- Project pushed to GitHub repository

## Automatic Deployment (Recommended)

### Step 1: Connect GitHub Repository to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign in with your GitHub account (or create a new account)
3. Click **"New Project"**
4. Click **"Import Git Repository"**
5. Search for and select `Portfolio_2` repository
6. Click **"Import"**

### Step 2: Configure Project Settings

1. **Framework Preset**: Should auto-detect as "Vite"
2. **Build Command**: `npm run build` (pre-filled)
3. **Output Directory**: `dist/public` (pre-filled)
4. **Install Command**: `npm install` (pre-filled)
5. **Environment Variables**: Add production variables:
   - `NODE_ENV`: `production`
   - `PORT`: `3000`

### Step 3: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 2-5 minutes)
3. Once complete, you'll get your live URL like `https://portfolio-2-xxxxx.vercel.app`

## Manual Deployment with Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
# Deploy to production
vercel --prod

# Or deploy to preview (staging)
vercel
```

### Step 4: Verify Deployment

```bash
# Check deployment status
vercel list
```

## Configuration Files Explained

### `vercel.json`
- Defines build and deployment configuration
- Specifies Node.js version and memory allocation
- Configures API routes and static file serving

### `.vercelignore`
- Specifies files to exclude from deployment
- Reduces bundle size by ignoring documentation and unnecessary files

### `.env.production`
- Contains production environment variables
- Template for setting up secrets in Vercel dashboard

## Environment Variables Setup

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

```
NODE_ENV = production
PORT = 3000
VITE_API_URL = https://your-deployment.vercel.app/api
```

If using a database:
```
DATABASE_URL = your-database-connection-string
```

## Domain Configuration

### Using Default Vercel Domain
Your app is automatically available at: `https://portfolio-2-xxxxx.vercel.app`

### Using Custom Domain

1. Go to project **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your custom domain (e.g., `portfolio.yourname.com`)
4. Follow DNS configuration instructions from your domain registrar
5. Update `VITE_API_URL` environment variable to use custom domain

### DNS Configuration Example (for GoDaddy, Namecheap, etc.)

If Vercel gives you nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Or if using CNAME record:
```
Alias: cname.vercel-dns.com
```

## Monitoring and Logs

### View Deployment Logs

```bash
# Using CLI
vercel logs

# Or through dashboard:
# 1. Go to project
# 2. Click "Deployments"
# 3. Select deployment
# 4. View logs
```

### Monitor Performance

1. Go to Vercel dashboard
2. Select your project
3. **Analytics** tab shows:
   - Request count
   - Error rate
   - Performance metrics
   - Geographic distribution

### Error Handling

If deployment fails:

1. Check build logs in Vercel dashboard
2. Common issues:
   - Missing environment variables → Add to Vercel dashboard
   - Build script failing → Run `npm run build` locally to debug
   - Port issues → Ensure `PORT` env var is set correctly
   - Database connection → Check `DATABASE_URL` env var

## Continuous Deployment

### Automatic Deployments (Enabled by Default)

Every push to `main` branch:
- Triggers automatic build and deployment
- Preview deployments for pull requests
- Production deployment when PR is merged

### Disable Auto-Deploy

1. Go to **Settings** → **Git**
2. Under **Ignored Build Step**, add custom script:
   ```bash
   git diff --quiet HEAD^ HEAD -- .
   ```

## Rollback to Previous Deployment

### Using Vercel Dashboard

1. Go to **Deployments** tab
2. Find previous working deployment
3. Click **...** menu
4. Select **"Promote to Production"**

### Using CLI

```bash
vercel rollback
```

## Performance Optimization

### Build Optimization

The build process:
1. Compiles TypeScript
2. Bundles React components with Vite
3. Minifies CSS and JavaScript
4. Generates static HTML

Monitor build time in Vercel dashboard:
- Target: < 2 minutes
- If > 5 minutes: Check for large dependencies

### Runtime Optimization

1. **Static caching**: Set for 365 days on assets
2. **API routes**: Cached for reasonable duration
3. **Database queries**: Use connection pooling

## Database Setup (if applicable)

### Using Neon (PostgreSQL)

1. Create account at [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Add to Vercel environment variables:
   ```
   DATABASE_URL = postgresql://user:password@host/database
   ```
5. Run migrations:
   ```bash
   npm run db:push
   ```

### Using MongoDB

1. Create cluster at [mongodb.com](https://mongodb.com)
2. Get connection string
3. Add to environment variables

## Troubleshooting

### Build Fails: "Cannot find module"

```bash
# Solution 1: Clear cache and redeploy
vercel deployment rm portfolio-2-xxxxx --yes
vercel --prod

# Solution 2: Install missing dependency
npm install missing-package-name
npm run build
git push
```

### Slow Performance

1. Check if database is limiting
2. Monitor Vercel Analytics
3. Consider upgrading plan for more CPU/memory
4. Use CDN for static assets

### Environment Variables Not Working

1. Verify variables added in Vercel dashboard
2. Redeploy after adding variables:
   ```bash
   vercel --prod
   ```
3. Check `.env.production` file format

### CORS Issues

1. Update server to allow Vercel domain:
   ```typescript
   app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     // ... other CORS headers
     next();
   });
   ```
2. Redeploy

## Advanced: Custom Build Scripts

Edit `package.json` build script if needed:

```json
{
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist"
  }
}
```

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Vite Docs**: https://vitejs.dev
- **GitHub Issues**: https://github.com/Ihsaan7/Portfolio_2/issues

## Next Steps After Deployment

1. ✅ Test all features on live URL
2. ✅ Update contact links to production URL
3. ✅ Test contact form submission
4. ✅ Check analytics
5. ✅ Set up custom domain (optional)
6. ✅ Monitor error logs
7. ✅ Share portfolio with others!

---

**Last Updated:** October 22, 2025
