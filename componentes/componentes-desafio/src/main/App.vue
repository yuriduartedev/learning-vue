<template>
	<v-app>
		<!-- Navegação -->
		<app-navegacao />

		<!-- Toolbar -->
		<app-toolbar />

		<!-- Carrossel -->
		<app-carrossel />

		<!-- Footer -->
		<app-footer />
	</v-app>
</template>

<script>
// import Navegacao from './Navegacao'
import Footer from '@/components/template/Footer'
import Carrossel from '@/components/widgets/Carrossel'
import Toolbar from '@/components/template/Toolbar'
import Navegacao from '@/components/template/Navegacao'

export default {
	components: { 
		'app-footer': Footer,
		'app-carrossel': Carrossel,
		'app-toolbar': Toolbar,
		'app-navegacao': Navegacao
	}, 

	data() {
		return {
			itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			],
			fotos: [
				{src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
				{src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
			]
		}
	}
}
</script>
