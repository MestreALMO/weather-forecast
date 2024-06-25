# Etapa 1: Build da aplicação
FROM node:18-alpine AS builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos da aplicação para o diretório de trabalho
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa 2: Configuração do servidor
FROM node:18-alpine AS runner

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia as dependências instaladas e o build da aplicação do estágio anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Define as variáveis de ambiente
ENV NODE_ENV=production
ENV OPENCAGE_API_KEY=${OPENCAGE_API_KEY}
ENV OPENWEATHERMAP_API_KEY=${OPENWEATHERMAP_API_KEY}

# Expõe a porta que a aplicação usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]