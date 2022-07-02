FROM node:14

WORKDIR /usr/src/app/nextjs

EXPOSE 3000

CMD ["npm", "run", "dev"]