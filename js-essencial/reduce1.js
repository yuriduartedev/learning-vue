const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true },
]

const result = alunos.map(a => a.nota).reduce(function(acc, at) {
  console.log(acc, at)
  return acc + at  
})

console.log(result)
