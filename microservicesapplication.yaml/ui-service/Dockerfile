# Use Node.js as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the UI server will run on
EXPOSE 80

# Start the server
CMD ["node", "server.js"]
