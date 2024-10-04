# Use uma imagem oficial do Node.js
FROM node:18

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código do projeto
COPY . .

# Exponha a porta 3000
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "app.js"]
