function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(`Arrow: ${this.idade}`)
  }, 1000)
}

new Pessoa