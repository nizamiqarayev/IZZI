<template>
  <div class="mr-4 font-quicksand ">
    <div class="flex flex-col items-start justify-start border rounded-md py-8 px-5 ">
      <div class="flex items-center justify-center mb-5">
        <img src="../../assets/images/sliderimg/slidertest.svg" alt="">
        <div class="flex flex-col pl-3 items-start justify-center">
          <h2 class="text-[#222222] font-bold">{{ data.title }}</h2>
          <h3>{{ data.name }}</h3>
        </div>
      </div>
      <div class="flex gap-[60px]">
        <div>
          <p class="text-[#222222] font-bold">Start Date</p>
          <p>{{data.startdate}}</p>
        </div>
        <div>
          <p class="text-[#222222] font-bold">Order Price</p>
          <p>{{data.orderprice}}₼</p>
        </div>

      </div>
      <div class="flex justify-center items-center shrink gap-3 mt-8">
        <button class="py-3 px-9 whitespace-nowrap rounded  bg-[#3C81F6] font-bold text-white">Price is pending</button>
        <button class="flex items-center justify-center px-4 py-3 border rounded text-[#222222] gap-2"><img src="../../assets/images/sliderimg/Show.svg" alt=""> bax</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.homestore
    }
  },
  created() {
    console.log(this.data);
  },
}
</script>

<style>
</style>