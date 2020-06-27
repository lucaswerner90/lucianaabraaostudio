FROM node:12
WORKDIR /usr/src/app

COPY package.json ./
RUN yarn

COPY . ./
RUN yarn run build

CMD ["yarn", "start"]
