// Cria função de forma literal
function fun1() { }

// Armazenar em um variável
const fun2 = function() { }

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atribudo de objeto
const obj = {}
obj.falar = function() {
  return 'Alow'
}
console.log(obj.falar())

// Passar função como param
function run(fun) {
  fun()
}

run(function() {
  console.log('Executando função....')
})

// Uma função pode retornar/contart uma outra função
function soma(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}
soma(2, 3, )(5)