FROM node:latest
RUN mkdir /usr/app/ 
WORKDIR /usr/app/
COPY package.json /usr/app/ 
RUN npm install 
COPY app.js /usr/app/
CMD [ "node" ,"app.js"]