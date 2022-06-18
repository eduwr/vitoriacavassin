FROM node:14

WORKDIR /usr/src/app/nextjs

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "run", "dev"]