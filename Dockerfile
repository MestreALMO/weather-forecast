# Etapa 1: Build application
FROM node:18-alpine AS builder

# Define work diretory of conteiner
WORKDIR /app

# copy package.json and package-lock.json to install dependencys
COPY package*.json ./

# Install project dependencys
RUN npm install

# Copy all file to work diretory
COPY . .

# run build of application
RUN npm run build

# Etapa 2: config server
FROM node:18-alpine AS runner

# Definework diretory inside container
WORKDIR /app

# Copy installed dependence and build aplication of last stage
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Define variables
ENV NODE_ENV=production
ENV OPENCAGE_API_KEY=${OPENCAGE_API_KEY}
ENV OPENWEATHERMAP_API_KEY=${OPENWEATHERMAP_API_KEY}

# Port of aplication that will be used
EXPOSE 3000

# Comand to start aplication
CMD ["npm", "start"]