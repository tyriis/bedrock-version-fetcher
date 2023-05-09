FROM node:18.16.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci --production

FROM node:18.16.0-alpine

WORKDIR /app

COPY --from=build /app /app

# switch to user node (uid=1000)
USER node

CMD [ "npm", "start"]
