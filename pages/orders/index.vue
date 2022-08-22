<template>
    <section class="w-full font-quicksand  bg-main bg-no-repeat flex gap-10">
        <main class="lg:w-9/12 w-11/12 mx-auto mt-[24px] mb-10  text-sm flex flex-col lg:flex-row gap-3">
            <div
                class=" lg:w-3/12 w-full flex-1 flex flex-col h-[330px] p-6 bg-white border-[1px] rounded-md transition-all transform border-[#C7C9CB1F]">
                <div class="lg:hidden flex gap-3">
                    <p @click="showorders = !showorders" class="font-bold text-lg pl-3">Orders</p>
                    <img :class="showorders ? 'rotate-180 ' : ''"
                        class="lg:hidden transform transition-all duration-500" src="../../assets/images/Vector 59.svg"
                        alt="">
                </div>
                <div class="hidden lg:flex gap-3">
                    <p class="font-bold text-lg pl-3">Orders</p>
                </div>
                {{ message(orders) }}
                <div :class="showorders ? 'h-full' : 'h-0'"
                    class="lg:block overflow-hidden transform transition-all duration-500">
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
                            <img src="../../assets/images/Close.svg" alt=""><span
                                class="text-[#FF663A]">Cancelled</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="lg:bg-white rounded pb-4 text-xs lg:text-base w-full lg:w-9/12 ">
                <div class="flex lg:rounded-none rounded bg-white justify-between text-xs w-full px-3 py-2">
                    <div class="p-2 lg:p-4 w-8/12 flex gap-2">
                        <div class="flex gap-1 items-center w-1/2 lg:justify-center">
                            <img class="h-4" src="../../assets/images/search (3).svg" alt="">
                            <input class="px-2 w-full py-2 outline-none" type="text" placeholder="search"
                                v-model="searchkey">
                        </div>
                        <hr class="h-9 border-[1px] w-0">
                        <div class=" flex gap-1 relative items-center justify-center">
                            <img @click="showdate = !showdate" class="h-4" src="../../assets/images/calendar (5).svg"
                                alt="">
                            <p @click="showdate = !showdate">Filter dates</p>
                            <div v-if="showdate" class="absolute z-50 -left-2 top-8 h-full w-full">
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
                <div class="hidden lg:flex justify-between w-full bg-[#5920BC] bg-opacity-[0.03] py-4">
                    <div class="flex gap-24 justify-around w-[95%]">
                        <p class="w-1/12 pl-6 whitespace-nowrap">Hired Services</p>
                        <p class="w-1/12 pl-2 text-center whitespace-nowrap">Start date</p>
                        <p class="w-1/12 pl-2 text-center">Status</p>
                        <p class="w-1/12 text-center">Amount</p>
                        <p class="w-1/12 text-center">Order</p>
                    </div>
                </div>
                <div v-show="filteredOrders.length>0" class=" w-full hidden lg:flex h-[400px] overflow-y-auto scroll-ml-2 flex-col gap-8 my-4">
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
                <div v-show="filteredOrders.length>0" class="lg:hidden flex py-3 flex-col gap-5 ">
                    <div v-for="order in filteredOrders" :key="order.id"
                        class="w-full bg-white flex flex-col gap-6 border-[1px] shadow-md rounded py-3 justify-around px-3 items-center">
                        <div class="flex w-full items-center">
                            <div class=" flex gap-3 items-center">
                                <img class="rounded-full h-10 w-10" :src="order.subService.coverPhoto" alt="">
                                <p class="text-lg font-semibold">{{ order.subService.title }}</p>
                            </div>
                        </div>
                        <div class="flex w-full justify-around">
                            <div class=" text-center">
                                <p>Start date</p>
                                <p>{{ date(order.startDate) }}</p>
                            </div>
                            <div class=" text-center">
                                <p>Order status</p>
                                <p>{{ status(order.status) }}</p>
                            </div>
                            <div class=" text-center">
                                <p>Amount</p>
                                <p>{{ order.totalAmount }} ₼</p>
                            </div>
                        </div>
                        <div class="w-full px-4 text-center">
                            <nuxt-link :to="`/orders/${order.id}`">
                                <p
                                    class="w-full py-2 rounded text-white font-medium bg-[#5920BC] hover:bg-white transition-all transform duration-200 ">
                                    Details</p>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <div v-show="filteredOrders.length==0&&orders.length==0">
                    <div v-for="item in 5" :key="item" class="shadow rounded-md p-4 m-4 w-full mx-auto">
                        <div class="animate-pulse flex space-x-4">
                            <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div class="flex-1 space-y-6 py-1">
                                <div class="h-2 bg-slate-200 rounded"></div>
                                <div class="space-y-3">
                                    <div class="grid grid-cols-3 gap-4">
                                        <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div class="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="w-full flex flex-col justify-center items-center"
                        v-if="filteredOrders.length == 0">
                        <img src="../../assets/images/Job hiring 1.svg" alt="">
                        <p>There is no  order for this selection :(</p>
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
            showorders: true,


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
                } else if (this.range.start == null || this.range.end == null) {
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
