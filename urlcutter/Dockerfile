FROM node:18-alpine3.15

WORKDIR /urlcutter-frontend

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_BACKEND http://127.0.0.1:4000

EXPOSE 3000

CMD ["npm", "start"]