const curso = {};
curso.nome = 'Be MEAN';
console.log(curso.nome);


const ImmutableCurso = require('./immutable')(curso)

ImmutableCurso.nome = 'Be GOOD';
console.log(ImmutableCurso.nome);


// ImmutableCurso.teste = true
// console.log('ImmutableCurso.teste', ImmutableCurso.teste)