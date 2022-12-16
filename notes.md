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
