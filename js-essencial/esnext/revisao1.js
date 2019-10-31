// let e const
{
  var a = 2
  let b = 3
  console.log(b) // Variáveis declaradas com a utilização do "let" não estarão disponíveis no escopo global somente no bloco em que foi declaradas.
}

console.log(a) // Variáveis declaradas com a utilização do "var" estarão disponíveis no escopo global

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l,e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Ana', idade: 22 }
console.log(i, nome)