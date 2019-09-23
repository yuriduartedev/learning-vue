<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>  
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import FrutasMixin from './FrutasMixin.js'
import usuarioMixin from './usuarioMixin.js'

export default {
  mixins: [ FrutasMixin, usuarioMixin ],  
	created() {
    console.log('Created - Frutas .vue')    
  }
}
</script>

<style>

</style>
