# INICIANDO IMPULSE COM REACT

  - Aplicação totalmente funcional também utilizando Teclado
    - TAB
    - Enter
    - Espaço
    - ESC


### Utilizando:

    - Typescript
      - Interface
      - Type
    - ReactJS
      - Componentes
      - Funções
    - Tailwind
      - CSS
      - Form
      - Responsividade
    - html2canvas
      - Screenshot
    - phosphor-react
      - Imagens já integradas no React
  

## AULA 1

- Conhecendo nosso projeto

  - Trata-se de um projeto para criação de Feedback com Widget. O FEEDGET !!!

- O que é e qual a diferença de SPA para o tradicional SSR

  - SSR utiliza o conceito de Back-End e Front-End juntos, onde a requisição feita pelo cliente retorna sempre HTML, CSS e JS. Com o aumento de uso de aparelhos celulares, IOS e Android (dentre os mais usados) não possuem compatibilidade com esses retornos.
  - SPA já possui uma estrutura separada no Back-End e Front-End. Quando o cliente solicita uma requisição, o Back-End entrega para o Front-End em formato JSON. O Front-End entrega para cada plataforma do jeito correto, se for Web HTML, CSS e JS; Caso seja IOS e Android View.

- Conceitos do React

  - Componentes
    - Utilizamos e muito os componentes e aplicações do React, pois praticamente TUDO é feito "componentizado"
  - Propriedades
    - São as propriedades de cada componente.

- O que é e configuração e uso do Tailwind

  - Tailwind é uma forma de estilização da aplicação.
    - Site do Tailwind para consulta de tudo o que pode ser utilizado por ele (https://tailwindcss.com/)

- Começando nossa aplicação
  - Criamos o botão do Widget já estilizado com o Tailwind e funcional (Abrindo e Fechando ao clique)
- Conhecendo e utilizando o PopOver
  - Ferramenta utilizada para acessibilidade de páginas.
    - Utilizamos o HeadlessUI por já conter integração com o Tailwind, ficando mais fácil e útil a utilização
    - Segue site do Headless para consulta de todos componentes que podemos incluir na aplicação. (https://headlessui.dev/)


## AULA 2

  - Estilos Globais
    - Realizamos a estilização global de nossa aplicação
    - Realizamos também algumas modificações do Tailwind, adicionando novas cores e modificando borderRadius.
  
  - Estrutura do WidgetForm
    - Fizemos a identificação de cada parte do Widget, separando e componentizando nossa estrutura
      - Header 
        - Cabeçalho do Widget
      - Footer 
        - Rodapé do Widget
      - Componentização de botão que podemos reutilizar em nossa aplicação 
        - CloseButton (por Exemplo)
      
  - Fizemos a Escolha do Feedback, identificando em qual campo o cliente está solicitando realizar esse Feedback dentro os 3 disponíveis.

  - Separamos em Steps os componentes
    - Feedback Content
      - Parte de Identificação do Feedback
    - Feedback Type
      - Toda parte lógica dessa identificação
    - Feedback Success
      - Quando realizado e apresentando tela de Sucesso
  
  - Comunicação de Componentes
    - Realizando a comunicação entre todos os componentes, criando Interface, type

  - Conteúdo do Feedback
    - Como selecionamos o conteúdo do campo digitado pelo cliente e enviamos ao Back End

  - Screenshot
    - Inserimos um botão para realizar o Screenshot da tela, sem necessidade do cliente salvar em seu computador e nos enviar adicionando, sendo feito tudo de forma automática
    - Colocamos uma prévia do screenshot no botão depois de tirado a screenshot
    - Colocamos um ícone de lixeira, para apagar e voltar ao estado inicial, apresentando a camera novamente para tirar outra foto
    - Colocamos a animação de CARREGANDO enquanto processa a Imagem do screenshot

  - Envio do Feedback
    - Fizemos a integração do botão de enviar com o Sucesso, apresentando a tela de opção para envio de novo Feedback

## AULA 3

### BACK-END DA APLICAÇÃO COM NODEJS

  - Utilizamos as tipagens de Typescript

  - Utilizamos o ts-node-dev
    - Seria uma atualização automática, assim como NODEMON
    
  - Configuramos o Express
    - Principal utilização para auxilio de rotas

  - Configuramos o Prisma
    - Utilizamos ORM para integração com BD por possuir melhores capacidades de integração, além de suporte a Typescript
    - Estamos utilizando o SQLite
    - Prisma hoje possui capacidade de integração com MySQL, SQL, PostgreSQL
    - Consulte o site para maiores informações (www.prisma.io)
    - Prisma hoje possui uma central própria de controle de banco de dados, abrimos ela através de:
      - npx prisma studio
  
  - Criamos nossa rota de criação
    - C: create
      - rota de criação
      - rota POST
    - R: read
      - rota de leitura/busca
      - rota GET
    - U: update
      - rota de atualização de um ou mais dados
      - rota PATCH
      - rota PUT
    - D: delete
      - rota de deleção
      - rota DELETE

  - Criamos o sistema de envio de e-mail automático aos criadores do site
    - utilizamos nodemailer
    - utilizamos também o mailtrap
      - www.mailtrap.io

  - Conhecemos um pouco sobre os conceitos dos princípios do SOLID
    - Utilizamos alguns deles na aplicação
    - Mais informações no README da pasta server

  - Configuramos o JEST em nossa aplicação
    - realizamos o teste UNITÁRIO da aplicação.
    - utilizamos um espião nesse teste, para nos informar se a solicitação de outra biblioteca ou framework foi disparada(ativada) quando solicitando
      - jest.fn()