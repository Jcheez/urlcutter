FROM node:18-alpine3.15

WORKDIR /urlcutter-frontend

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

ENV REACT_APP_BACKEND http://localhost:4000

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]