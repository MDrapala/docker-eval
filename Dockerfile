#Pull official base image
FROM node:latest

#Set working directory
WORKDIR /app

#Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#Install app dependencies
COPY ./site/package.json ./

RUN yarn install
RUN yarn global add react-scripts@latest

#Add app
COPY . ./

#Start app

CMD "cd site" | "yarn start"