FROM node:14-alpine AS development
ENV NODE_ENV development
RUN mkdir /graphApp
WORKDIR /graphApp
COPY ./package.json /graphApp
RUN yarn install
COPY . /graphApp
EXPOSE 8080
CMD ["yarn", "dev"]