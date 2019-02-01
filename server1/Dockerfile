FROM node:9.4.0-alpine

WORKDIR /users/app

COPY ./package.json /users/app
RUN npm install -qy

COPY . /users/app

CMD ["npm", "start"]