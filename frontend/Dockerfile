FROM node:alpine
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . ./
RUN yarn run build

CMD ["yarn", "start"]
