# Chat App Auth MS

This project is the auth microservice for the chat application. It is a simple NodeJS HTTP server exposing authentication endpoints.

## Local development server

To run a local development server, execute the following commands.

```
# Install NPM modules
npm install

# Run NodeJS server on default port 3000.
node index.js
```

## Docker

The app uses Docker to create a distribution image for deployment purposes.

To create a development or production distributation image, execute the following:

```
# Development Image
docker build --build-arg PORT=8080 -t chatapp-ms-auth:0.0.1-dev .

# Production Image
docker build --build-arg PORT=8080 NODE_ENV=production -t chatapp-ms-auth:0.0.1-prod .
```

Once the image is created, a container can be spawned by executing

```
# Sample
docker run -d -p <HOST_MACHINE_PORT>:80 --name <CONTAINER_NAME> <IMAGE_NAME>

# Example: Exposes a dev build on host machine's port 8080
docker run -d -p 8080:8080 --name chatapp-ms-auth-container chatapp-ms-auth:0.0.1-dev
```
