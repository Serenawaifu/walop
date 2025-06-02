# Wulu Starter

A production-ready starter for a full-stack anime platform.

## Features

- Next.js 14 (App Router, TypeScript)
- Prisma + PostgreSQL
- NextAuth (Email/Google/Web3)
- Tailwind CSS + Theme system
- Shaka Player integration
- Stripe checkout
- Docker, .env, README

## Getting Started

1. Copy `.env.example` to `.env` and fill in your secrets.
2. `docker-compose up -d` (to start Postgres)
3. `pnpm install` (or `yarn`/`npm`)
4. `npx prisma migrate dev`
5. `pnpm dev`
6. Visit [http://localhost:3000](http://localhost:3000)

## Deployment

- Vercel: Connect repo, set env vars.
- Docker: See `Dockerfile`.
