FROM node

RUN npm install -g testcafe
RUN apt-get update
RUN apt-get install -y chromium