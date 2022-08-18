<template>
  <main class="">
    <Hero />
    <Slider />
    <Servicesslide />
    <Popularpros />
    <Blogs />
    <CustomerComments />
  </main>
</template>

<script>
import Slider from './HomeSubComponents/Slider.vue';
import Hero from './HomeSubComponents/Hero.vue';
import Servicesslide from './HomeSubComponents/Servicesslide.vue';
import Popularpros from './HomeSubComponents/Popularpros.vue';
import Blogs from './HomeSubComponents/Blogs.vue';
import CustomerComments from './HomeSubComponents/CustomerComments.vue';
export default {
  components: { Slider, Hero, Servicesslide, Popularpros, Blogs, CustomerComments },
  mounted() {
    this.$forceUpdate();
  },
  async created() {
    
  },
  
}
</script>

<style>
</style>