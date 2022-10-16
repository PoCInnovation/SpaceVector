FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve

COPY . .

RUN npm run build

CMD ["serve", "-s", "build"]