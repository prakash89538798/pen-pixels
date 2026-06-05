# Use a Node.js base image
# Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and tsconfig.json
COPY package.json ./
COPY tsconfig.json ./

# Install dependencies using bun
RUN npm install -g bun # Install bun in the node image
RUN bun install
RUN ls -la # Debugging step: list contents of /app after bun install

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN bun run build

# Stage 2: Runner
FROM oven/bun:1.1.17-alpine

WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Debugging step: list contents of public directory
RUN ls -laR public

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["bun", "run", "start"]