FROM node:14

WORKDIR /web

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "dev"]