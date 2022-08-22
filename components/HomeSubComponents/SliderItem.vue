<template>
  <div class="w-full font-quicksand ">
    <div class="flex flex-col items-start justify-start border rounded-md py-8 px-5 ">
      <div class="flex items-center justify-center mb-5">
        <img class="w-10 h-10 rounded-full" :src="order.subService.coverPhoto" alt="">
        <div class="flex flex-col pl-3 items-start justify-center">
          <h2 class="text-[rgb(34,34,34)] font-bold">{{ order.subService.title }}</h2>
          <h3>{{ order.tasker.user.first_name }} {{ order.tasker.user.last_name }}</h3>
        </div>
      </div>
      <div class="flex gap-[60px]">
        <div>
          <p class="text-[#222222] font-bold">Start Date</p>
          <p>{{ getDay() }}.{{ getMonth() }}.{{ date.getFullYear() }}</p>
        </div>
        <div>
          <p class="text-[#222222] font-bold">Order Price</p>
          <p>{{ order.totalAmount }}₼</p>
        </div>

      </div>
      <div class="flex justify-center items-center shrink gap-3 mt-8">
        <button class="py-3 px-9 whitespace-nowrap rounded  bg-[#3C81F6] font-bold text-white">Price is pending</button>
        <button class="flex items-center justify-center px-4 py-3 border rounded text-[#222222] gap-2"><img
            src="../../assets/images/sliderimg/Show.svg" alt=""> bax</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object
  },
  data() {
    return {
      data: this.$store.state.homestore,
      date: new Date(this.order.startDate)
      // title: this.orders.title,
      // name: this.orders.title,
      // startdate: this.orders.title,
      // price:this.orders.title,
    }
  },
  methods: {
    getMonth() {
      var month = this.date.getMonth() + 1;
      return month < 10 ? '0' + month : '' + month; // ('' + month) for string result

    },
    getDay() {
      var month = this.date.getDate();
      return month < 10 ? '0' + month : '' + month;
    },

  },
  created() {
  

  },
}
</script>

<style>
</style>