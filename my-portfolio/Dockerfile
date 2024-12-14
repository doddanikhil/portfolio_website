# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy app source code
COPY . .

# Build the project
RUN npm run build

# Install a lightweight HTTP server to serve the build
RUN npm install -g serve

# Expose the production port
EXPOSE 5000

# Start the HTTP server
CMD ["serve", "-s", "dist"]
