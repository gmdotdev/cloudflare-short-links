# Cloudflare Short Links

A dead simple short link service using [Cloudflare Workers](https://developers.cloudflare.com/workers/) and [Hono](https://hono.dev/).

Automatic deploys with GitHub Actions.

## Setup

1. You should have a Cloudflare account and already have a domain hosted on Cloudflare.

2. Create a [Cloudflare Workers API Token](https://developers.cloudflare.com/workers/wrangler/migration/v1-to-v2/wrangler-legacy/authentication/#generate-tokens) to use in GitHub Actions.

3. Add `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN` [secrets to your GitHub repository](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).

4. Update [src/app.ts](src/app.ts) and [wrangler.toml](wrangler.toml) as desired with your domain and routes.

5. Push your repo to deploy!

## Development

For local development:

```
pnpm install
pnpm run dev
```

To deploy to Cloudflare from local machine, setup [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) and run:

```
pnpm run deploy
```
