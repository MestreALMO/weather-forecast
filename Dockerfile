FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
ENV OPENCAGE_API_KEY=${OPENCAGE_API_KEY}
ENV OPENWEATHERMAP_API_KEY=${OPENWEATHERMAP_API_KEY}

EXPOSE 3000

CMD ["npm", "start"]