# INCIO 
- npm install (instala as dependencias)
- npm start (inicia o servidor)

# COMANDOS!
## (sequelize-cli)

- npx sequelize migration:create --name=create-users (cria uma migration)
- npx sequelize db:migrate (executa as migrations)
- npx sequelize db:migrate:undo (desfaz a ultima migration)

## (docker)
- docker run --name <`nome do container`> -e POSTGRES_USER=<`nome do usuario`> -e POSTGRES_PASSWORD=<`senha do usuario`> -p 5432:5432 -d postgres (cria um container do postgres)


# ALTERAÇÕES DE CONFIG
## (config)

- src/config/database.js (configurações do banco de dados)

# OBSERVAÇÕES

- É NECESSÁRIO TER O DOCKER INSTALADO NA MAQUINA
- É NECESSÁRIO TER UMA IMAGEM DO POSTGRES INSTALADO NA MAQUINA DOCKER

