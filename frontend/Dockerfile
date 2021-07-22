  
FROM node:14-alpine

LABEL version="1.0"

WORKDIR /app

COPY package*.json ./


RUN yarn config delete proxy
RUN yarn config delete https-proxy
RUN yarn config delete registry
RUN yarn install --network-timeout 1000000

COPY . .

ENV HTTPS_PROXY="http://localhost:3001"

RUN yarn build


# EXPOSE 3000

# CMD ["npm", "start"]