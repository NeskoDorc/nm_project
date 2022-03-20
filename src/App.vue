<template>
  <div id="app">

    <Who/>
    <What/>
   
  </div>
</template>

<script>
import Who from './components/Who.vue'
import What from './components/What.vue'


export default {
  name: 'App',
  components: {
    What,Who
   
  }
}
</script>

<style lang="scss">

</style>
