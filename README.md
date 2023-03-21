#Aplicação para consulta de repositórios do GitHub

Essse é um projeto gerado com [Angular CLI] version 15.0.4.
Ele implementa uma aplicação client-side que consulta a API do GitHub para exibir os repositórios de um determinado usuário.

#Navegação
A aplicação é capaz de buscar um usuário pelo login do GitHub e apresentar seus detalhes, além de, exibir a listagem dos repositórios desse usuário.
Ao buscar um usuário pelo login do GitHub, a aplicação direciona para a página de 'result' se o usuário for encontrado.Caso contrário,  aplicação direciona para a página 'not-found' que contém uma mensagem de erro.

#API
A aplicação utiliza a API do GitHub para consultar as informações de usuários e repositórios. 

#Rotas e Componentes
Rotas foram utilizadas para navegar entre as diferentes páginas da aplicação. As rotas foram definidas no arquivo app-routing.module.ts, que é importado no módulo principal app.module.ts
Foram criados os seguintes componentes:
home: Componente responsável por exibir a página inicial.
input: Exibe um formulário de busca com um campo de entrada de texto e um botão de pesquisa. O formulário é validado através do objeto FormGroup definido na classe do componente, e uma mensagem de erro é exibida se o usuário tentar enviar o formulário sem preencher o campo de entrada de texto. 
rotas-component:Realiza a busca de usuários e seus repositórios no GitHub. O elemento <router-outlet> é responsável por renderizar o componente correspondente à rota atual da aplicação, podendo ser:
  result: Que exibe as informações sobre o usuário e seus repositórios.
  not-found: Caso o usuário não seja encontrado, obtendo uma mensagem de erro.
 

A aplicação estará disponível em https://sparkly-crepe-cfe3f1.netlify.app/

