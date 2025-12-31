FROM node:24-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS dev
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install
COPY . .
EXPOSE 8080
CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "8080"]
