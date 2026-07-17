# syntax=docker/dockerfile:1

# ---------- deps: cài dependencies theo lockfile ----------
FROM node:22-alpine AS deps
WORKDIR /app
# Lockfile được sinh bằng npm 11 (local). node:22-alpine đi kèm npm 10.9.8,
# vốn resolve peerDeps optional (@emnapi/*) khác đi và làm `npm ci` báo lệch lock.
# Ghim npm về đúng major 11 để resolve giống hệt lockfile.
RUN npm i -g npm@11.6.2
COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder: build Next.js (output: standalone) ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---------- runner: image chạy production tối giản ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# chạy bằng user không phải root cho an toàn
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# public assets + bản standalone + static của Next
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
