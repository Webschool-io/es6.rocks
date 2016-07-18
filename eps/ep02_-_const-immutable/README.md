# ES6.rocks - Const

Muito se fala sobre o `let` e seu escopo, mas o `const` é deixado um pouco de lado então não vamos segregar essa maravilhosa nova funcionalidade do ES6(ES2015).

## O que faz?

> A  declaração const  cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

fonte: [mdn.io/const](mdn.io/const) 

```js
const curso = {};
curso.nome = 'Be MEAN';
console.log(curso.nome);
curso.nome = 'Be GOOD';
console.log(curso.nome);
```


## Imutabilidade

Bom já vimos que o `const` não deixa a variável imutável, então como podemos obter essa mesma funcionalidade, imutabilidade?

Com uma função largaente utiliada no ES5, o [`Object.freeze`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).

> O método `Object.freeze()` congela um objeto: isto é, impede que novas propriedades sejam adicionados a ele; impede que propriedades existentes sejam removidas; e impede que propriedades existentes, ou a sua enumeração, configurabilidade, ou capacidade de escrita, seja alterada. Em essência, o objeto é feito de forma eficaz imutável. O método retorna o objeto a ser congelado.

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




