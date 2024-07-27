# Usar a imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta que o app irá rodar
EXPOSE 3000

# Comando para rodar o app
CMD [ "npm", "start" ]
