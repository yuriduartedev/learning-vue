const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

// Percorrendo o array utilizando função externa
fabricantes.forEach(imprimir)

// Percorrendo o array utilizando função interna
fabricantes.forEach(function(item, index){
  console.log(`${index + 1}. ${item}`)
})