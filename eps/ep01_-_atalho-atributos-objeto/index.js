'use strict';

function fn1() { console.log('fn1'); };
function fn2() { console.log('fn2'); };

const meuObjeto = {
  fn1,
  fn2
}

meuObjeto.fn1();
meuObjeto.fn2();