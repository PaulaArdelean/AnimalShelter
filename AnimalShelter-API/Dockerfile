FROM node:12.10-slim

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
