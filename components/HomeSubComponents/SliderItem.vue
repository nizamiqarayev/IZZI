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
          <p>{{ date.getDay()}}.{{ date.getMonth()+1 }}.{{ date.getFullYear() }}</p>
        </div>
        <div>
          <p class="text-[#222222] font-bold">Order Price</p>
          <p>{{ order.totalAmount }}₼</p>
        </div>

      </div>
      <div class="flex justify-center w-full items-center shrink gap-3 mt-8">
        <button :class="statuscolor(order.status)" class="py-3 px-9 whitespace-nowrap rounded w-7/12  font-bold text-white">{{status(order.status)}}</button>
        <nuxt-link tag="div" class="px-4 w-full cursor-pointer border rounded text-[#222222]" :to="`/orders/${order.id}`">
          <button class="flex items-center h-12 overflow-hidden justify-center group gap-2 "><img class="group-hover:w-8 w-5 transform transition-all"
              src="../../assets/images/sliderimg/Show.svg" alt=""><p class="text-sm  group-hover:text-lg transform transition-all">Details</p></button>
        </nuxt-link>
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
  methods:{
    status(data) {
            if (data == 'accepted') {
                return 'Accepted'
            }
            else if (data == 'closed') {
                return 'Cancelled'
            }
            else if (data == 'completed') {
                return 'Completed'
            }
            else if (data == 'inProgress') {
                return 'In progress'
            }
            else if (data == 'new') {
                return "New"
            }
        },
        statuscolor(data) {
            if (data == 'accepted') {
                return 'bg-[#3B82F6]'
            }
            else if (data == 'closed') {
                return 'bg-[#EF4444]'
            }
            else if (data == 'completed') {
                return 'bg-[#93C5FD]'
            }
            else if (data == 'inProgress') {
                return 'bg-[#C38932]'
            }
            else if (data == 'new') {
                return "bg-[#9333EA]"
            }
        },
  }
}
</script>

<style>
</style>