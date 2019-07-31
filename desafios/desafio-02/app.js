new Vue({
  el: '#desafio',
  data: {
    valor: ''
  },
  methods: {
    alerta() {
      alert('Clicou!')
    },
    alterarValor(event) {
      this.valor = event.target.value
    }
  }, 
})