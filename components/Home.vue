<template>
  <main class="">
    <Hero />
    <Slider class="px-36"/>
    <Servicesslide class="px-20" />
    <Popularpros class="px-20" />
    <Blogs class="px-20"/>
    <CustomerComments class="px-20" />
  </main>
</template>

<script>
import Slider from './HomeSubComponents/Slider.vue';
import Hero from './HomeSubComponents/Hero.vue';
import Servicesslide from './HomeSubComponents/servicesslide.vue';
import Popularpros from './HomeSubComponents/Popularpros.vue';
import Blogs from './HomeSubComponents/Blogs.vue';
import CustomerComments from './HomeSubComponents/CustomerComments.vue';
export default {
    components: { Slider, Hero, Servicesslide, Popularpros, Blogs, CustomerComments }
}
</script>

<style>

</style>