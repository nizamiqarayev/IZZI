<template>
  <div class="h-screen flex items-center justify-center">
    <div class="">
      <slick class="max-w-4/5 flex flex-row justify-center items-center max-w-3xl" ref="slick" :options="slickOptions">
        <SliderItemVue />
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>
        <div>
          <SliderItemVue />
        </div>

      </slick>

    </div>



  </div>
</template>

<script>
import SliderItemVue from './SliderItem.vue'
import 'slick-carousel/slick/slick.css';

import Slick from 'vue-slick'
// import { VueSlickCarousel } from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  name: "Slider",
  components: {
    SliderItemVue,
    Slick
  },
  data() {
    return {
      items: 9,
      slickOptions: {
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,


      }
    }
  },
}
</script>

<style>
</style>