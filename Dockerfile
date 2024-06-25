# Stage 1: Build application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Run build of the application
RUN npm run build

# Stage 2: Configure server
FROM node:18-alpine AS runner

# Set working directory inside container
WORKDIR /app

# Copy installed dependencies and build application from the last stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Set environment variables
ENV NODE_ENV=production
ENV OPENCAGE_API_KEY=${OPENCAGE_API_KEY}
ENV OPENWEATHERMAP_API_KEY=${OPENWEATHERMAP_API_KEY}

# Expose application port
EXPOSE 3000

# Command to start application
CMD ["npm", "start"]
