<template>
    <section class="font-quicksand mt-16 w-11/12 lg:w-full lg:max-w-[65rem] mx-auto">
        <div class="flex justify-between items-center w-full ">
            <h3 class="text-2xl lg:text-3xl font-bold">Services</h3>
            <nuxt-link to="services"
                class="flex items-center gap-2 justify-center border rounded-full group hover:bg-[#5920BC] transition-all duration-200 border-[#5920BC] py-2 px-4 lg:py-3 lg:px-6">
                <p class="text-[#5920BC] group-hover:text-white"> Discover All Services</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" class="group-hover:stroke-white"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </nuxt-link>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 items-center justify-center w-full lg:w-full gap-4 mt-5">
            <div v-for="(service, index) in data" :key="service.id"
                class="">
                <nuxt-link tag="div" class=" cursor-pointer group flex flex-col items-center justify-center border w-full max-h-28   py-5 px-10 rounded-md shadow-md" :to="`/services/${service.id}`">
                    <div v-if="index < 8">
                        <div class="flex justify-center items-center">
                            <img :src="service.icon" class="object-contain object-center h-14 w-14 transform transition-all " alt="">
                        </div>
                        <h4 class="mt-3 text-center group-hover:text-xl transform transition-all font-bold whitespace-nowrap">{{ service.title }}</h4>
                    </div>
                </nuxt-link>
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    name: "Servicesslide",
    data() {
        return {
            data: []
        }
    },
    async created() {
        const tempdata = await this.$axios.get("services/")
        this.data = tempdata.data
    },
}
</script>

<style>
</style>