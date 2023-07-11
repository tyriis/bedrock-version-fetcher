FROM node:20.4.0-alpine AS build

WORKDIR /app

COPY . .

RUN npm ci --production

FROM node:20.4.0-alpine

WORKDIR /app

COPY --from=build /app /app

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

# switch to user node (uid=1000)
# USER node

ENTRYPOINT ["/entrypoint.sh"]
