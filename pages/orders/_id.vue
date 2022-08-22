<template>
    <section class="w-full font-quicksand bg-[#5920BC] bg-opacity-5 flex gap-10">
        <main class="w-10/12 mt-[32px] mb-20 rounded bg-white p-4 gap-3 flex lg:flex-row flex-col mx-auto">
            <section class="flex flex-col p-4 lg:w-8/12 w-full gap-6 ">
                <div>
                    <p class="text-xl">{{ subService.title }}</p>
                    <p class="text-[#999999] text-sm ">{{ subService.description }}</p>
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-3 flex-col">
                        <div class="flex">
                            <div class="relative">
                                <img class=" relative top-1 h-5 w-5" src="../../assets/images/Path.svg" alt="">
                            </div>
                            <div class="flex-1">
                                <div v-for="(option, index) in serviceChoices" :key="option.id"
                                    class="flex flex-1 justify-between">
                                    <div class="flex gap-1">

                                        <p class="text-black text-opacity-50">{{ option.title }}</p>
                                    </div>
                                    <div class="flex" v-if="option.type == 'checkbox'">
                                        <div class="flex" v-for="(item, index) in options" :key="item">
                                            <p class="text-right">{{ item.title }}</p>
                                            <p v-if="index < options.length - 1">,</p>
                                        </div>
                                    </div>
                                    <div v-if="option.type == 'radio'">
                                        <div>
                                            <p class="text-right">{{ options[index].title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="flex justify-between">
                            <div class="flex gap-1">
                                <img class="h-5" src="../../assets/images/bookingimages/Location.svg" alt="">
                                <p class="text-black text-opacity-50">Start address</p>
                            </div>
                            <p class="w-1/2 text-right">{{ order.address }}</p>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex gap-1">
                                <img class="h-5 w-5 " src="../../assets/images/bookingimages/clock.svg" alt="">
                                <p class="text-black text-opacity-50">Task start date and Time</p>
                            </div>
                            <p class="w-1/2 text-right">12/06/2022 15:35</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-black text-opacity-50">Task detail</p>
                        <p class="w-full">{{ order.detail }}</p>
                    </div>
                    <div>
                        <p class="text-black text-opacity-50">Task Photos</p>
                        <!-- <div v-if="order.photos == 0 ">
                            <p class="">There is no photos to show...</p>
                        </div> -->
                        <div v-if="order.photos == 0">
                            <img class="w-24 h-24 lg:h-40 lg:w-40" :src="subService.coverPhoto" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <div class="border-[1px] border-[#5920BC0F] rounded lg:h-64 lg:w-4/12 w-full p-4 gap-3 flex flex-col">
                <div class="flex w-full gap-1 relative">
                    <div class="relative">
                        <img src="../../assets/images/homeimages/propfp.svg" alt="">
                    </div>
                    <div class="flex">
                        <div class="flex flex-col justify-center items-start">
                            <div class="flex flex-col">
                                <p class="font-bold">{{ tasker_user.first_name }} {{ tasker_user.last_name }}</p>
                            </div>
                            <div class="flex gap-2 w-full self-end">
                                <div v-if="tasker.rating" class="flex gap-[2px]">
                                    <img class="h-4 w-4" v-for="item in Number(Math.round(tasker.rating))" :key="item"
                                        src="../../assets/images/headerpfp/Vector.svg" alt="">
                                </div>
                                <p class="text-[#FFC107] text-xs">{{ tasker.rating }}</p>
                                <p class="text-[#979797] text-xs">({{ tasker.completedTaskCount }})</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <p>{{ tasker.bio }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-[#5920BC] cursor-pointer">view profile</p>
                    <p class="">Total: {{order.totalAmount}}$</p>
                </div>
                <div class="w-full">
                    <div :class="statuscolor(order.status)" class="border-[1px] rounded py-2">
                        <p class="text-center text-white">{{ status(order.status) }}</p>
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>
<script>
import axios from 'axios';
export default {

    data() {
        return {
            order: {},
            tasker: {},
            tasker_user: {},
            subService: {},
            serviceChoices: [],
            options: [],


        }
    },
    async created() {
        const config = {
            headers: { Authorization: `${this.$auth.$state.accesslocal}` }
        }
        this.order = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/orders/${this.$route.params.id}`, config)
        this.order = this.order.data
        this.tasker = this.order.tasker
        this.tasker_user = this.tasker.user
        this.subService = this.order.subService
        this.options = this.order.options
        this.serviceChoices = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/subServices/${this.subService.id}`, config)
        this.serviceChoices = this.serviceChoices.data
        this.serviceChoices = this.serviceChoices.serviceChoices

    },
    methods: {
        message(data) {
            console.log(data);
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
        statuscolor(data){
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