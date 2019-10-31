function Pessoa() {
  this.idade = 0

  const self = this
  setInterval(() => {
    self.idade++
    console.log(self.idade)
  }, 1000)
}

new Pessoa