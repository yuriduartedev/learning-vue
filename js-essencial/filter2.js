Array.prototype.filter2 = function(callback) {
  const newArray = []
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.59, fragil: true },
  { nome: 'Copo de plático', preco: 18.99, fragil: false },
]

const fragil = p => p.fragil
const caro = p => p.preco > 2000

console.log(produtos.filter2(fragil).filter2(caro))