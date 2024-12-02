FROM node:18.19.0-slim
RUN apt update && apt install curl -y
ENV AUTHOR Artem
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]

