FROM node:16.19.0
WORKDIR /api
ARG PORT=3000 
EXPOSE 3000
COPY . .
RUN npm install
RUN apt update
ENTRYPOINT npm start
