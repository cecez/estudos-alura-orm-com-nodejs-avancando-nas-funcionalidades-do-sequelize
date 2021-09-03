# Projeto de estudos para acompanhar curso Alura - ORM com NodeJS: Avançando nas funcionalidades do Sequelize

```bash
# build e execução do contêiner com NodeJS, npm e MySQL
docker-compose build
docker-compose up
docker exec -it CONTAINER_ID /bin/bash

# preparando o ambiente do projeto
npm install
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
npm start

# ver pacotes desatualizados
npm outdated

# criar migração
npx sequelize-cli migration:generate --name add-deletedAt-columns

# executar migração
npx sequelize-cli db:migrate
```

- Documentação Sequelize: https://sequelize.org/master/