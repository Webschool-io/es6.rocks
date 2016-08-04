// const getPrecoFinal = (preco, imposto) => {
  // const _imposto = imposto || 0.3 // 30% 
//   return preco + (preco * _imposto)
// };
// getPrecoFinal(100); // 130


// const getPrecoFinal = (preco, imposto = 0.3) => preco + preco * imposto;
// getPrecoFinal(100); // 130

const lista = [1,2,4,6,7,9]

const filtraImpares = (lista) => lista.filter((valor) => valor%2)
const filtraPares = (lista) => lista.filter((valor) => !(valor%2))

// let filtraCoisas = (lista, filtro) => filtro(lista)
let filtraCoisas = (lista, filtro = filtraImpares) => filtro(lista)

// filtraCoisas(lista)

// const busca = (query = {}, callback = (err, data)=>{}) => Model.find(query, callback)