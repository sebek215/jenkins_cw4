FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install

COPY app/ ./app/

CMD ["npm", "start"]