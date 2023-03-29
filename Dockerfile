FROM node:4.6
COPY server.js .
EXPOSE 3000
CMD node server.js
