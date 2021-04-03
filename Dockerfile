FROM node:alpine

WORKDIR /app

COPY ./api.js ./api.js
COPY ./package.json ./package.json
COPY ./.env.prod ./.env

RUN npm install

EXPOSE 3000

CMD [ "node", "api.js" ]



