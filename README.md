# RTL em um projeto Create React App

## O que testar?

- Renderizações
- Acessibilidade
- Propriedades enviadas
- Callback de funções
- Branchs e Regras de negócio (simulando props de entrada diferentes, cliques, etc.)
- Se pacotes de terceiros foram chamados (desde que tenha sentido para a aplicação)

##  O que não testar?

- Implementação de pacotes de terceiros: mas você DEVE mockar os pacotes (que tem comunicação externa), para evitar erros
- Se tem uma mudança de state (verifica somente o que o usuário pode ver, não state)
- Arquivos de configuração. A configuração deve ser mapeada no `collectCoverageFrom` (`package.json` ou `jest.config.js`)

## Extensão para chrome recomendada:
- Testing Playground - é um facilitador para selecionar os elementos. https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano

## Exemplo?

Veja o arquivo `src/components/App.test.js`

## E para rodar?

- `npm start`
- `npm test`

## mock global do navegador `src/setupTests.js`

Bom exemplo: https://create-react-app.dev/docs/running-tests/

```js
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
```