# Use a specific version of node to ensure consistency across environments
FROM node:20.11.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Copy the built application files
COPY .next ./.next

# Command to run the application
CMD [ "npm", "run", "dev" ]
