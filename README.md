# Anotações gerais sobre o nextjs.

Nextjs é um framework Fullstack que permite criar aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `ssr - Server Side Rendering`.

Para criar e navegar por páginas na aplicação Next.js, basta criar componentes/páginas no diretório `pages` que automaticamente elas estarão dispiníveis para navegação através de rotas.

## Sobre o arquivo app.js e document.js

Arquivos de configuração global para personalizar a estrutura da aplicação Next.js

### app.js

- Adicionar componentes globais no app
- Pode ser usado para layout e estilos globais
- Tem uma finalidade semelhante ao App.js ou index.js do React
- Renderizado no Client e no Server

### documento.js

- Usado para personalizar o HTML de todas as páginas em relação ao <head>
