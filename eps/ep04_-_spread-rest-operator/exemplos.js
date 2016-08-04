
let arr = [1, 2];
console.log(...arr); // 1 2


let somar = (a, b) => a + b


// let arr = [1, 2];
console.log(1, 2); // 1 2


// function somar(x, y) { return x + y }
// var valores = [1,2];
// somar.apply(null, valores);


// function somar(x, y) { }
// var valores = [1, 2];
// somar(...valores);


// function teste() { console.log('arguments', arguments) }
// teste(1,2,3,4,5,6)
// // arguments [1, 2, 3, 4, 5, 6]


// function somar() { return arguments.reduce((a,b) => a+b) }
// somar(1,2,3,4,5,6)
// // Uncaught TypeError: arguments.reduce is not a function(…)


// function somar(...arguments) { return arguments.reduce((a,b) => a+b) }
// somar(1,2,3,4,5,6)
// // 21


// const somar = () => { return arguments.reduce((a,b) => a+b) }
// somar(1,2,3,4,5,6)
// // Uncaught ReferenceError: arguments is not defined


// const somar = (...arguments) => { return arguments.reduce((a,b) => a+b) }
// somar(1,2,3,4,5,6)
// // 21

