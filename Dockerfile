# ----------- Build Stage -----------
FROM oven/bun:1.1.13 as builder

WORKDIR /app

# Copy all files needed for install & build
COPY . .

# Install dependencies and build the project
RUN bun install
RUN bun run build

# ----------- Production Stage -----------
FROM oven/bun:1.1.13-slim as production

WORKDIR /app

# Copy ONLY the built output and Astro config
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json .
COPY --from=builder /app/bun.lock .
COPY --from=builder /app/astro.config.* .
COPY --from=builder /app/tsconfig.* .
COPY --from=builder /app/public ./public

# Install only production dependencies (if any)
RUN bun install --production

# Expose the port used by `bun run preview`
EXPOSE 4321

# Start the preview server
CMD ["bun", "run", "preview", "--host"]
