<template>
  <div v-if="orderslength>0" class="flex  items-start mt-20 justify-center h-fit ">
    <div class="flex flex-col items-start justify-center">
      <h2 class="font-bold text-3xl ml-5 mb-6 text-[#222222]">Orders</h2>
      <div class="flex items-center ">
        <div class="relative left-2.5 z-10 py-3 bg-white" @click="sliderleft()">
          <svg class="hover:fill-[#5920BC]" width="20" height="20" viewBox="0 0 20 20" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.25"
              d="M19.25 10C19.25 12.0416 19.1396 13.6311 18.8634 14.8739C18.5891 16.1083 18.1613 16.9543 17.5578 17.5578C16.9543 18.1613 16.1083 18.5891 14.8739 18.8634C13.6311 19.1396 12.0416 19.25 10 19.25C7.95837 19.25 6.36893 19.1396 5.12607 18.8634C3.89173 18.5891 3.04567 18.1613 2.44221 17.5578C1.83874 16.9543 1.41091 16.1083 1.13659 14.8739C0.860374 13.6311 0.75 12.0416 0.75 10C0.75 7.95837 0.860374 6.36893 1.13659 5.12607C1.41091 3.89173 1.83874 3.04567 2.44221 2.44221C3.04567 1.83874 3.89173 1.41091 5.12607 1.13659C6.36893 0.860374 7.95837 0.75 10 0.75C12.0416 0.75 13.6311 0.860374 14.8739 1.13659C16.1083 1.41091 16.9543 1.83874 17.5578 2.44221C18.1613 3.04567 18.5891 3.89173 18.8634 5.12607C19.1396 6.36893 19.25 7.95837 19.25 10Z"
              stroke="#5920BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path opacity="0.25" d="M11.6666 6.66669L8.33331 10L11.6666 13.3334" stroke="#5920BC" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>


        <slick class="max-w-[65rem]  flex flex-row justify-center items-center" ref="slick" :options="slickOptions">
        <SliderItemVue  v-for="order in this.ordersdata.orders" :key="order.id" :order="order" />

        </slick>

        <div class="relative right-[1.625rem] z-10 py-3 bg-white" @click="sliderright()">
          <svg width="20" height="20" viewBox="0 0 20 20" class="hover:fill-[#5920BC]" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.75 10C0.75 12.0416 0.860374 13.6311 1.13659 14.8739C1.41091 16.1083 1.83874 16.9543 2.44221 17.5578C3.04567 18.1613 3.89172 18.5891 5.12607 18.8634C6.36893 19.1396 7.95837 19.25 10 19.25C12.0416 19.25 13.6311 19.1396 14.8739 18.8634C16.1083 18.5891 16.9543 18.1613 17.5578 17.5578C18.1613 16.9543 18.5891 16.1083 18.8634 14.8739C19.1396 13.6311 19.25 12.0416 19.25 10C19.25 7.95837 19.1396 6.36893 18.8634 5.12607C18.5891 3.89173 18.1613 3.04567 17.5578 2.44221C16.9543 1.83874 16.1083 1.41091 14.8739 1.13659C13.6311 0.860374 12.0416 0.75 10 0.75C7.95837 0.75 6.36893 0.860374 5.12607 1.13659C3.89172 1.41091 3.04567 1.83874 2.44221 2.44221C1.83874 3.04567 1.41091 3.89173 1.13659 5.12607C0.860374 6.36893 0.75 7.95837 0.75 10Z"
              stroke="#ccb5f2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.33335 6.66669L11.6667 10L8.33335 13.3334" stroke="#5920BC" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import SliderItemVue from './SliderItem.vue'
import 'slick-carousel/slick/slick.css';
import axios from 'axios'


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

      ordersdata: [],
      orderslength:0,
      slickOptions: {
        dots: false,
        prevArrow: false,
        nextArrow: false,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,


      }
    }
  },

  methods: {
    sliderleft() {
      this.$refs.slick.prev()
    },
    sliderright() {
      this.$refs.slick.next()
    }
  },
  async created() {
    const config = {
      headers: { Authorization: `${this.$auth.$state.accesslocal}` }
    }
    const tempdata = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/orders/`, config)
    this.ordersdata=tempdata.data
  
    this.orderslength=this.ordersdata.orders.length
  }
}
</script>

<style>
</style>