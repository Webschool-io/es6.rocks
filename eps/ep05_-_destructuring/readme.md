# ES6.rocks - Desestruturação de Arrays

![](https://media.giphy.com/media/3o7abBP0nMjrdIvaCY/giphy.gif)

> The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.

Traduzindo:

> A sintaxe de atribuição com desestruturação é uma expressão JavaScript que faz com que seja possível extrair dados de matrizes ou objetos em variáveis distintas.


Mais fácil olhando codigo né? Vamos usar o exemplo oficial da MDN:

```js
var a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```

Bom, com isso entendemos que podemos definir *cada valor* de cada posição de um *Array*, `[a, b] = [1, 2]`, pela sua variável, antes criada (`var a, b`). 

Muito legal e se tivermos um array que pode ser maior que 2 elementos mas você não sabe quantos valores a mais pode receber!

> E agora?

**Ahhh meu querido! Vamos usar nosso já conhecido *Spread Operator*!**

> Mas como?

**Simples! Assim:**

```js
[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```

Percebeu que a *variável* `rest` recebeu o *array* `[3, 4, 5]` apenas porque `rest` está usando o *Spread Operator*, vamos testar o mesmo código sem ele:

```js
[a, b, rest] = [1, 2, 3, 4, 5]
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]
```

Porém não ficamos presos a entradas do tipo *Array*, podemos usar Objeto também, dessa forma:

({nome, idade} = {nome:'Suissa', idade:31})
console.log(nome); // Suissa
console.log(idade); // 31
```

Vamos pensar em um exemplo bobo, mas assim:

- tenho uma função que testa se a idade de entrada é **maior ou igual** a 18 anos e se for verdadeira retorna `true`
- temos uma função que testa se o Objeto de Usuário é maior que 18 anos

Então para isso vamos pensar que temos uma função apenas que testa a idade:

```js
const verificaMaioridade = (idade) => idade >= 18
```

E gostaria de reaproveitar ela dentro de uma outra função, por exemplo o `filter:`

```js
const Filtrar = (idades, filtro) => idades.filter(filtro)
```

Para testar basta:

```js
let idades = [16,17,18,19,20]
Filtrar(idades, verificaMaioridade)
```

> Até aí nenhum problema tio Suissa.

Mas e se em vez de vir um *array* vier 1 objeto assim:

```js
const obj = {name: 'Suissa', idade: 31}
```

E eu quisesse usar a mesma funcionalidade, como faria?

Bom antes de chamar a função `Filtrar` você terá que criar um *array* para adicionar a idade do objeto, pois a função `filter` só pode ser executada em 1 *array*:

```js
const verificaMaioridade = (idade) => idade >= 18
({nome, idade} = {nome:'Suissa', idade:17})
let idades = [idade]
const Filtrar = (lista, filtro) => lista.filter(filtro)
Filtrar(idades, verificaMaioridade)
```

E se quando entrar 1 objeto que possua a idade correta nossa função irá retornar ela corretamente:

```js
({nome, idade} = {nome:'Suissa', idade:18})
idades = [idade]
> Filtrar(idades, verificaMaioridade)
```

Referências:

- [Destructuring assignment - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)