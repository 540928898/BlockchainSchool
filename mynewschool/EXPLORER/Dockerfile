FROM node:6.10.1
#LABEL maintainer "fospring <fospring@outlook.com>"
LABEL maintainer "fospring <fospring@outlook.com.com>"
EXPOSE 8080

RUN mkdir -p /home/Service

WORKDIR /home/Service
COPY . /home/Service

WORKDIR /home/Service/fabric-explorer
RUN npm install

CMD ["node", "/home/Service/fabric-explorer/main.js"]
