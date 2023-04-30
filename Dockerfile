FROM node:18-alpine3.16 AS build
WORKDIR /app

ARG DATABASE_URL

COPY package.json package.json
COPY yarn.lock yarn.lock
COPY tsconfig.json tsconfig.json

COPY next.config.mjs next.config.mjs
COPY src ./src
COPY public ./public
COPY prisma ./prisma
RUN yarn install
RUN yarn build && yarn --production

FROM node:18-alpine3.16
WORKDIR /app

ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG GOOGLE_CLIENT_ID
ARG GOOGLE_CLIENT_SECRET

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/next.config.mjs ./next.config.mjs
COPY --from=build /app/src/env.mjs ./src/env.mjs

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
