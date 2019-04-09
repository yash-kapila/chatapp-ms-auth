FROM node:8.12.0-alpine

WORKDIR /chat-app-ms-auth

COPY package*.json ./

ARG PORT_ARG
ARG NODE_ENV_ARG=development

ENV PORT $PORT_ARG
ENV NODE_ENV $NODE_ENV_ARG

# Run below to have bash as default shell for container
# RUN apk update && apk add bash
# SHELL [ "/bin/bash", "-c" ]

RUN npm install

COPY . .

EXPOSE $PORT_ARG

CMD [ "node", "index.js" ]