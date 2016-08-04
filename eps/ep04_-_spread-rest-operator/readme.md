# ES6.rocks - Operador Spread (Spread Operator)

Antes que eu lhe explique para que serve isso, irei mostrar um exemplo e aí lhe questionar:

```js
const arr = [1, 2];
console.log(...arr); // 1 2
```

> Ehhhhhhhh entendi maiomeno tio Suissa.

**Tá certo meu pequeno gafanhoto, então veja esse exemplo:**

```js
let somar = (a, b) => a + b
```

**Fácil né? Então como você usaria aquele operador *spread* nessa função `somar`?**

> Não entendi.

**Beleza, então perceba que no primeiro exemplo ele pegou 1 *array* e PASSOU/MOSTROU 1 elemento por vez, ou, em separado.**

Por exemplo:

```js
let arr = [1, 2];
console.log(1, 2); // 1 2
```

> Ahhhhh agora facilitou!
> 
> Se a função somar recebe cada parâmetro por vírgula igual ao console.log, basta eu usar `somar(...arr)` certo?

**EXATAMENTE!!! Viu que simples?**

Além disso é muito comum termos uma função assim:

```js
function somar(x, y) { return x + y }
```

E fazermos o seguinte para utilizar 1 *array* como parâmetro de uma função: 

```js
var valores = [1,2];
somar.apply(null, valores);
```

```js
function somar(x, y) { }
var valores = [1, 2];
somar(...valores);
```

Além disso também conhecemos muito bem nosso querido `arguments`:

```js
function teste() { console.log('arguments', arguments) }
teste(1,2,3,4,5,6)
// arguments [1, 2, 3, 4, 5, 6]
```

Legal, então o `arguments` é um *array* com os valores dos parâmetraos que entraram, correto?

Então vamos tentar somar esses valores?

```js
function somar() { return arguments.reduce((a,b) => a+b) }
somar(1,2,3,4,5,6)
// Uncaught TypeError: arguments.reduce is not a function(…)
```

> Ué deu merda aí tio Suissa!

**Realmente! Então para resolver esse problema usamos o *rest parameter*.**

```js
function somar(...arguments) { return arguments.reduce((a,b) => a+b) }
somar(1,2,3,4,5,6)
// 21
```

Fora isso sabemos que as *arrow functions* não possuem `arguments`, então essa função irá dar merda:

```js
const somar = () => { return arguments.reduce((a,b) => a+b) }
somar(1,2,3,4,5,6)
// Uncaught ReferenceError: arguments is not defined
```

Para *corrigir* isso podemos fazer o seguinte:

```js
const somar = (...arguments) => { return arguments.reduce((a,b) => a+b) }
somar(1,2,3,4,5,6)
// 21
```

Referências:

- [Spread Operator - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Rest Parameters - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)