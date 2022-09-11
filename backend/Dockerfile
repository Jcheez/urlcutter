FROM node:18-alpine3.15

WORKDIR /urlcutter-backend

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 4000
ENV DB_URL mongodb://mongo:27017/urlCutter

EXPOSE 4000

CMD ["node", "index.js"]