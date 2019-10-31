const array = [1,2,3,4,5]

// let resultado = array.map((item) => {
//   return item * 2
// })


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = array.map(soma10).map(triplo).reduce((acumulador, valorAtual, indice, array) => {
  return acumulador + valorAtual
})

console.log(paraDinheiro(resultado))
