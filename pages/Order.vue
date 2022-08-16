<template>
    <section class="w-full font-quicksand bg-main flex gap-10">
        <main class="max-w-[65rem] mx-auto flex gap-3">
            <div class="w-3/12 flex-1 flex flex-col p-6 bg-white border-[1px] rounded-md border-[#C7C9CB1F]">
                <p class="font-bold">Orders</p>
                <div @click="selectedMenu = 1" :class="selectedMenu == 1 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px] ">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Other.svg" alt=""><span>All Services</span>
                    </p>
                </div>
                <div @click="selectedMenu = 2" :class="selectedMenu == 2 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/CheckedOrders.svg" alt=""><span>Completed</span>
                    </p>
                </div>
                <div @click="selectedMenu = 3" :class="selectedMenu == 3 ? 'border-[#5920BC]' : ''"
                    class="hover:cursor-pointer hover:border-[#5920BC] py-4 border-b-[1px]">
                    <p class="flex items-center gap-[0.9375rem]">
                        <img src="../assets/images/Close.svg" alt=""><span class="text-[#FF663A]">Cancelled</span>
                    </p>
                </div>
            </div>
            <div class="bg-white w-9/12 ">
                <div class="flex justify-between w-full">
                    <div class="w-full p-4 flex justify-around">
                        <div class="flex items-center justify-center">
                            <img class="h-4" src="../assets/images/search (3).svg" alt="">
                            <input type="text" placeholder="search" v-model="search">
                        </div>
                        <hr class="h-9 border-[1px] w-0">
                        <div class=" flex items-center justify-center">
                            <img class="h-4" src="../assets/images/calendar (5).svg" alt="">
                            <p>Filter dates</p>
                        </div>
                    </div>
                    <div class="px-4 py-2">
                        <div class="px-4 py-2 w-full gap-2 flex rounded bg-[#5920BC]">
                            <img src="../assets/images/Add.svg" alt="">
                            <p class="whitespace-nowrap">Request Now</p>
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
            search: ''

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
    },
    methods: {
        message(a) {
            console.log("message", a);
        }
    }
}

</script>
