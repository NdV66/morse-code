FROM node:latest as reac-build
WORKDIR /usr/app
COPY ./src ./package.json ./public ./
RUN npm install
COPY . ./
CMD npm audit fix; npm run build; npm start
