# Aula 1 - Fundamentos do Nest.js & Prisma - Ignite Lab Node.js

**Por que esse tema**

- Muita gente pediu!
- Um dos pilares do Ignite, nosso bootcamp é Node.js
- Regravação da trilha de Node.js
- Não existe esse conteúdo em outro lugar!

**Conteúdo técnico**

`Oque é um microserviço`

- Um banco por serviço
- Comunicação assíncrona

`A diferença de Nest.js para outros frameworks`

- Framework opinado
- Integrações - Muitas integrações, com graphql por exemplo.
- Typescript & Decorators

`Criação do projeto em Nest.js`

- Modules, services, controllers
- Inversão e injeção de dependências

`Setup do Prisma`

- Model de notificação
- Criando service do Prisma

`Rotas e validação`

- Criando nova notificação
- Validação do corpo da requisição

# Aula 2 - Domínio, casos de uso e regras de negócios

**Conteúdo técnico**

`Um pouco sobre design de software`

`Entidade de notificações`
-- Getters / setters
Criando class notificações e gets e sets para alteração e busca de atributos.
Como os atributos são privados, é necessários os gets e sets publicos para acessar os atributos e ter um maior controle de alteração dos mesmos.

`Value Object de conteúdo`

Separado atributo especifico em uma class da entidade principal notification, para fazer validações isoladas, dessa forma não se suja a class principal.

`Configuração do Jest`

Configurando Jest de forma rapida e pratica

`Criando primeiros testes`

Criando arquivo de teste de `Content` e `notification` e testando-os

`Caso de uso de criação de notificação`

Criando use-case send-notification, que será encarregado se fazer a criação de uma nova notificaçaõ

`Repositório de notificações`

Criando repositorio de notificações onde em teoria faz o envio da requisição para o BD.

`Testando caso de uso`

Testando criação de notificação e armazenamento em array de notificação com jest

`Banco de dados em memória`

Armazenando em memoria utilizando array, utilizando o conceito `ìn memomy database`, martin fowler é o cara.
Criando arquivo in-memory-notifications-repository para armazenamento na memoria

`Repositório do Prisma`

Implementando toda a ideia de SOLID utilizando o prisma, crianddo controllers e repositories em http folder e prisma folder.

`Conectando à camada de infraestrutura`

Configuranddo os modules, prisma e seus repositories e controllers, agregando estrutura e performance e atualizações.

# Aula 3 - Infraestrutura e injeção de dependências

**Conteúdo técnico**

`Configurando Typescript paths`

- Configurando o typescript inserindo o paths para solucionar a questão dos imports de arquivos e facilitar o mesmo.

`Conceito de mappers`

- Muito utilizado no conceito de arquiteturas por multiplas camadas
- É comum ter a representação entidade em diferentes camadas
- Com os mappers, data mais faz que a converção dos dados para retornar de acordo com a necessidade.

`Criando view model`

- Criando view model que irá padronizar o retorno da requisição notification.

`Casos de uso`

`Cancelar notificação`

- Criando cancelamento de notificação schema
- atualizado entidade notification com cancel notification metodo
- Criando testes de cancelamento de notificação
- Criando erros message

`Contagem de notificações`

- Criação de contagem de notificações
- Criação de testes de contagem

`Factory pattern(makeNotification)`

- Função que retorna objeto que abstrai criação de objetos parecidos.

`Listagem por recipiente`

- Criação de get-recipient-notifications para requisição de get de notificações por id de recipient.
- Criação de get-recipient-notifications.spec.ts para criação dos testes
- Adição de `findManyByRecipientId` no arquivo notifications-repository.
- Adição de `findManyByRecipientId` no in-memory-notifications para testes.

`Ler notificação`

- Criação de `read-notifications` e `unread` para requisição de get de notificações por id de recipient.
- Criação de `read-notifications.spec` e `unread` para criação dos testes

`Protegendo data de leitura`

- Criado metodo read e unread na class para proteger o campo, de modo a ser alterando somente atraves dos metodos

`Lidando com erros no caso de uso`

- Validando e retorno throw new error

`Desfazer leitura da notificação`

- Criado `uread` use case e test.

`Implementando repositório do Prisma`

- A entidade podem parecer as mesmas coisas entre camadas, mas não são, a entidade notificação na camada de persistencia/BD não é a mesma coisa que a aplicação

- Implementando funções do prisma

`Entidades existentes {ID}`

- Possibilidade de receber ID já existente da entidade notification

`Caminho inverso no mapper`

- Converção da notificação para camada de persistencia e agora para Dominio.

`Rotas HTTP`

- Criando rotas para read, unread, count e get recipients por id

# Aula 4 - Opcional

- Instalação do kafka para serviço de notificação
- Criação de account no serviço upstach para utilização do kafka, plano free envio de 10 mil mensagens
