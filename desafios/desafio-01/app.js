new Vue({
  el: '#desafio',
  data: {
    nome: 'Yuri',
    idade: '26',
    img: 'https://grupocataratas.com/wp-content/uploads/2018/12/banneraquario.jpg'
  },
  methods: {
    numRandom: function () {
      return Math.random()
    }
  },
})