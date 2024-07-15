FROM node:20.2-alpine
COPY . /grapejstest
WORKDIR /grapejstest
RUN npm install
RUN npm i -g ts-node
CMD npm run prod