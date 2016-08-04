# ES6.rocks - Const

Muito se fala sobre o `let` e seu escopo, mas o `const` é deixado um pouco de lado então não vamos segregar essa maravilhosa nova funcionalidade do ES6(ES2015).

## O que faz?

> A  declaração `const` cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

fonte: [mdn.io/const](mdn.io/const) 

Vamos a um exemplo bem simples:

```js
const curso = {};
curso.nome = 'Be MEAN';
console.log(curso.nome);
curso.nome = 'Be GOOD';
console.log(curso.nome);
```

Nesse caso você percebeu `curso` é um objeto constante porém recebeu 1 atributo novo `nome` com o valor `'Be MEAN'` e logo após foi sobrescrito com `'Be GOOD'`.

Esse não é o comportamento "esperado" se estivermos pensando em valores **constantes e imutáveis** o mais correto seria que não aceitasse valoes novos e nem mudança em seus valores padrões, pelo menos o `curso` ele não deixa modifica diretamete, dessa forma:

```
> curso = 'Be GOOD'
TypeError: Assignment to constant variable.
    at repl:1:7
    at REPLServer.defaultEval (repl.js:272:27)
    at bound (domain.js:280:14)
    at REPLServer.runBound [as eval] (domain.js:293:12)
    at REPLServer.<anonymous> (repl.js:441:10)
    at emitOne (events.js:101:20)
    at REPLServer.emit (events.js:188:7)
    at REPLServer.Interface._onLine (readline.js:224:10)
    at REPLServer.Interface._line (readline.js:566:8)
    at REPLServer.Interface._ttyWrite (readline.js:843:14)
```

## Imutabilidade

Bom já vimos que o `const` não deixa a variável imutável, então como podemos obter essa mesma funcionalidade, imutabilidade?

Com uma função largamente utiliada no ES5, o [`Object.freeze`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

> O método `Object.freeze()` congela um objeto: isto é, **impede que novas propriedades sejam adicionadas** a ele; **impede que propriedades existentes sejam removidas**; e **impede que propriedades existentes**, ou a sua enumeração, configurabilidade, ou capacidade de escrita, **sejam alteradas**. Em essência, **o objeto é feito de forma eficazmente imutável**. O método retorna o objeto congelado.

Agora ficou fácil né?! Vamos lá:


```js
const curso = Object.freeze({
    'nome': 'Be MEAN'
});
curso.nome = 'Be GOOD'; 
console.log(curso.nome);
// Be MEAN 
```

Podemos ver essa utilização com um exemplo bem simples, a criação de uma lib chamada `is` que irá testar alguns valores:

```js
const _is = {}
_is.odd = (val) => (val%2)
_is.even = (val) => !(val%2)

const is = Object.freeze(_is)
// const is = _is

is.odd = 'oi'
```

Com essa pequena mudança, usando `Object.freeze(_is)`, notamos que a função `odd` não é sobrescrita criando assim 1 objeto realmente imutável.

Para saber se um objeto está congelado usamos a função `Object.isFrozen(obj)` que rtorna um valor booleano.

Com isso podemos criar um módulo para gerar objetos imutáveis para nós de forma bem simples:

```js
module.exports = (obj) => {
  if(Object.isFrozen(obj)) return obj 
  return Object.freeze(obj)
}
```

Subi esse módulo no npm [https://www.npmjs.com/package/iammutable](https://www.npmjs.com/package/iammutable)

Agora fica fácil você chamar esse módulo caso queira garantir que seus objetos sejam imutáveis poderá fazer:

```js
'use strict'

const _is = {}
_is.odd = (val) => (val%2)
_is.even = (val) => !(val%2)

module.exports = require('immutable')(_is)
```

Basta chamar `require('immutable')(obj)` na hora do `module.exports`.

Simples não?

#ficadica
