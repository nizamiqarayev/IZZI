<template>
    <section class="w-full font-quicksand  bg-main bg-no-repeat flex gap-10">
        <main class="w-9/12 mx-auto mt-[24px] mb-10  text-sm flex gap-3">
            <div class=" w-3/12 flex-1 flex flex-col h-[330px] p-6 bg-white border-[1px] rounded-md border-[#C7C9CB1F]">
                <p class="font-bold text-lg pl-3">Orders</p>
                <div @click="selectedMenu = 1"
                    :class="selectedMenu == 1 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]' : 'border-l-transparent'"
                    class="hover:cursor-pointer hover:border-[#5920BC] pl-3 py-4 ">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../../assets/images/Other.svg" alt=""><span>All Services</span>
                    </p>
                </div>
                <div @click="selectedMenu = 2"
                    :class="selectedMenu == 2 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]' : 'border-l-transparent'"
                    class="hover:cursor-pointer hover:border-[#5920BC] pl-3 py-4">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../../assets/images/CheckedOrders.svg" alt=""><span>Accepted</span>
                    </p>
                </div>
                <div @click="selectedMenu = 3"
                    :class="selectedMenu == 3 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]' : 'border-l-transparent'"
                    class="hover:cursor-pointer hover:border-[#5920BC] pl-3 py-4">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../../assets/images/CheckedOrders.svg" alt=""><span>In progress</span>
                    </p>
                </div>
                <div @click="selectedMenu = 4"
                    :class="selectedMenu == 4 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]' : 'border-l-transparent'"
                    class="hover:cursor-pointer hover:border-[#5920BC] pl-3 py-4">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../../assets/images/CheckedOrders.svg" alt=""><span>Completed</span>
                    </p>
                </div>
                <div @click="selectedMenu = 5"
                    :class="selectedMenu == 5 ? 'border-l-4 border-[#5920BC] bg-[#5920BC] bg-opacity-[0.03]' : 'border-l-transparent'"
                    class="hover:cursor-pointer hover:border-[#5920BC] pl-3 py-4">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../../assets/images/Close.svg" alt=""><span class="text-[#FF663A]">Cancelled</span>
                    </p>
                </div>
            </div>
            <div class="bg-white rounded pb-4 w-9/12 ">
                <div class="flex justify-between text-xs w-full px-3 py-2">
                    <div class="p-4 flex gap-2">
                        <div class="flex gap-1 items-center justify-center">
                            <img class="h-4" src="../../assets/images/search (3).svg" alt="">
                            <input class="px-2 py-2 outline-none" type="text" placeholder="search" v-model="searchkey">
                        </div>
                        <hr class="h-9 border-[1px] w-0">
                        <div class=" flex gap-1 relative items-center justify-center">
                            <img @click="showdate = !showdate" class="h-4" src="../../assets/images/calendar (5).svg"
                                alt="">
                            <p @click="showdate = !showdate">Filter dates</p>
                            <div v-if="showdate" class="absolute top-6 h-full w-full">
                                <vc-date-picker is-range v-model="range" mode="date">

                                </vc-date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center">
                        <nuxt-link to="/services">
                            <div class="px-3 py-2 flex-1 w-full gap-2 flex rounded bg-[#5920BC]">
                                <img class="h-4" src="../../assets/images/Add.svg" alt="">
                                <p class=" w-full text-white whitespace-nowrap">Request Now</p>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
                <div class="flex gap-24 justify-around px-3 w-full bg-[#5920BC] bg-opacity-[0.03] pl-3 py-4">
                    <p class="w-1/12 pl-6">Hired Services</p>
                    <p class="w-1/12 text-center">Start date</p>
                    <p class="w-1/12 text-center">Status</p>
                    <p class="w-1/12 text-center">Amount</p>
                    <p class="w-1/12 text-center">Order</p>
                </div>
                <div class="w-full flex h-[400px] overflow-y-auto flex-col gap-8 my-4">
                    <div v-for="order in filteredOrders" :key="order.id"
                        class="w-full flex gap-20 justify-around px-3 items-center">
                        <div class="flex w-1/12 items-center">
                            <div class=" flex gap-1 items-center">
                                <img class="rounded-full h-10 w-10" :src="order.subService.coverPhoto" alt="">
                                <p>{{ order.subService.title }}</p>
                            </div>
                        </div>
                        <div class="w-1/12 text-center">
                            <p>{{ date(order.startDate) }}</p>
                        </div>
                        <div class="w-1/12 text-center">
                            <p>{{ status(order.status) }}</p>
                        </div>
                        <div class="w-1/12 text-center">
                            <p>{{ order.totalAmount }} ₼</p>
                        </div>
                        <div class="w-1/12 text-center">
                            <nuxt-link :to="`/orders/${order.id}`">
                                <p>details</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {
            selectedMenu: 1,
            range: {
                start: null,
                end: null
            },
            orders: [],
            searchkey: '',
            temp_orders: [],
            showdate: false,


        }
    },
    mounted() {
        window.scrollTo(0, 0)
    },
    async created() {
        const config = {
            headers: { Authorization: `${this.$auth.$state.accesslocal}` }
        }
        this.orders = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/orders/`, config)
        this.orders = this.orders.data
        this.orders = this.orders.orders
    },
    methods: {
        message(a) {
            console.log("message", a);
        },
        date(data) {
            let new_date = new Date(data)
            return new_date.getDate() + "." + (new_date.getMonth() + 1) + "." + new_date.getFullYear()
        },
        datefilter(data) {
            let new_date = new Date(data)
            return new_date
        },
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
    },
    computed: {
        filteredOrders() {
            this.temp_orders = this.orders
            if (this.selectedMenu == 1) {
                this.temp_orders = this.temp_orders
            } else if (this.selectedMenu == 2) {
                this.temp_orders = this.temp_orders.filter((el) => {
                    return el.status == 'accepted'
                })
            } else if (this.selectedMenu == 3) {
                this.temp_orders = this.temp_orders.filter((el) => {
                    return el.status == 'inProgress'
                })
            } else if (this.selectedMenu == 4) {
                this.temp_orders = this.temp_orders.filter((el) => {
                    return el.status == 'completed'
                })
            } else if (this.selectedMenu == 5) {
                this.temp_orders = this.temp_orders.filter((el) => {
                    return el.status == 'closed'
                })
            }
            this.temp_orders = this.temp_orders.filter((el) => {
                if (this.datefilter(el.startDate) > this.range.start && this.datefilter(el.startDate) < this.range.end) {
                    return true
                }else if(this.range.start==null||this.range.end==null){
                    return true
                }
            })
            this.temp_orders = this.temp_orders.filter((el) => {
                return el.subService.title.toLowerCase().includes(this.searchkey.toLowerCase())
            })
            return this.temp_orders
        }
    }
}

</script>
