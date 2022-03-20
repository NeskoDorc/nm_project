<template>
  <div id="app">

    <Navbar/>
    <Carousel/>
    <Who/>
    <What/>
    <Footer/>
   
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'
import Who from './components/Who.vue'
import What from './components/What.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
   Navbar, What,Who,Footer,Carousel
   
  }
}
</script>

<style lang="scss">

</style>
