<template>
  <div id="app">

    <Who/>
    <What/>
    <Footer/>
   
  </div>
</template>

<script>
import Who from './components/Who.vue'
import What from './components/What.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    What,Who,Footer
   
  }
}
</script>

<style lang="scss">

</style>
