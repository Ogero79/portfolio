# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy your site:
```bash
netlify deploy --prod
```

### Option 2: Deploy via Git Integration

1. Push your code to GitHub:
```bash
git add .
git commit -m "Configure for Netlify deployment"
git push origin main
```

2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Choose your Git provider (GitHub)
5. Select your repository
6. Netlify will auto-detect Next.js settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 or higher

7. Click "Deploy site"

### Environment Variables (if needed)

If you're using environment variables, add them in Netlify:

1. Go to Site settings → Environment variables
2. Add your variables:
   - `RESEND_API_KEY` (if using contact form email)
   - Any other API keys or secrets

### Post-Deployment

After deployment:
- Your site will be live at `https://your-site-name.netlify.app`
- You can configure a custom domain in Site settings → Domain management
- Enable HTTPS (automatic)
- Configure redirects and headers (already in `netlify.toml`)

### Continuous Deployment

Once connected to Git:
- Every push to `main` branch triggers automatic deployment
- Pull requests create deploy previews
- You can enable deploy notifications

## Build Settings

The `netlify.toml` file includes:
- ✅ Build command and publish directory
- ✅ Next.js plugin for optimal performance
- ✅ Security headers (XSS, CSP, etc.)
- ✅ Caching headers for static assets
- ✅ SPA fallback routing

## Performance Features

Netlify automatically provides:
- Global CDN distribution
- Automatic HTTPS
- Asset optimization
- Instant cache invalidation
- Form handling
- Serverless functions (for API routes)

## Troubleshooting

If build fails:
1. Check Node version (should be 18+)
2. Verify all dependencies are installed
3. Check build logs in Netlify dashboard
4. Ensure environment variables are set

For local testing of Netlify build:
```bash
netlify dev
```

## Custom Domain

To add a custom domain:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 48 hours)
