# Projeto - Lista de Clientes

Este projeto apresenta um exemplo simples de sistema web, com React, para gerenciamento de dados de clientes (CRUD básico).
A aplicação utiliza a biblioteca json-server para fornecer os dados por meio de atendimento a requisições HTTP, simulando um servidor back-end.

Os dados providos pelo json-server estão na pasta data, no arquivo [db.json](1_REACT_INTRO/ex03-clients/data/db.json). Um conjunto com mais dados de teste, encontra-se no arquivo [db.backup.json](1_REACT_INTRO/ex03-clients/data/db.backup.json). Ao realizar testes de cadastros/alterações na aplicação, podem utilizar os dados desse último arquivo para preencher o formulário.

As imagens dinâmicas (fotos de perfil) estão armazenadas no serviço de Storage do Firebase. Saiba mais sobre o serviço em <https://console.firebase.google.com>. Isso é necessário pois o react não consegue trabalhar com importações dinâmicas de recursos estáticos, logo as imagens dinâmicas precisam ser hospedadas em serviços externos, caso você não possua uma aplicação back-end (servidor) que gerencie o armazenamento e disponilização das imagens.

Para imagens estáticas (logo da aplicação, ícones, etc) podem utilizar a pasta assets e importar nos componentes que iram utilizar essas imagens.

Caso optem por utilizar o json-server no projeto de vocês, sigam estes passos: 
- Instalem o json-server pelo terminal na pasta do projeto: `npm install json-server`
- No arquivo `package.json`, em scripts, adicione a seguinte linha: `"server": "json-server --watch data/db.json"`
- Antes de inicializar a aplicação react, subam o servidor com o comando: `npm run server` (utilize dois terminais, um para subir o servidor json-server, outro para subir a aplicação react)
- Na aplicação, vocês podem trabalhar com requisições http simples com uso da fetch API do próprio JavaScript (sem necessidade de auma biblioteca externa, como a Axios)
- Vejam exemplos de requisições http para listagem, cadastro, exclusão e alteração de dados nos arquivos: [ClientList.jsx](1_REACT_INTRO/ex03-clients/src/pages/ClientList.jsx), [ClientDetail.jsx](1_REACT_INTRO/ex03-clients/src/pages/ClientDetail.jsx), [AddClientForm.jsx](1_REACT_INTRO/ex03-clients/src/components/AddClientForm.jsx) e [Card.jsx](1_REACT_INTRO/ex03-clients/src/components/Card.jsx).
