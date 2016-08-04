# ES6.rocks - Operador Spread (Spread Operator)

Antes que eu lhe explique para que serve isso, irei mostrar um exemplo e aí lhe questionar:

```js
let arr = [1, 2];
console.log(...arr); // 1 2
```

> Ehhhhhhhh entendi maiomeno tio Suissa.

**Tá certo meu pequeno gafanhoto, então veja esse exemplo:**

```js
let sum = (a, b) => a + b
```

**Fácil né? Então como você usaria aquele operador *spread* nessa função `sum`?**

> Não entendi.

**Beleza, então perceba que no primeiro exemplo ele pegou 1 *Array* e PASSOU/MOSTROU 1 elemento por vez, ou, em separado.**

Por exemplo:

```js
let arr = [1, 2];
console.log(1, 2); // 1 2
```

> Ahhhhh agora facilitou!
> Se oa função sum recebe cada parâmetro por vírgula igual ao console.log, basta eu usar `sum(...arr)` certo?


**EXATAMENTE!!!**

Viu que simples?

E isso é muito útil pelo que percebemos...

Referências:

- [Spread Operator - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Rest Parameters - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)