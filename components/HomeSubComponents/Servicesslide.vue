<template>
    <section class="font-quicksand mt-24 max-w-[65rem] mx-auto">
        <div class="flex justify-between items-center w-full ">
            <h3 class="text-3xl font-bold">Services</h3>
            <nuxt-link to="services"
                class="flex items-center gap-2 justify-center border rounded-full border-[#5920BC] py-3 px-6">
                <p class="text-[#5920BC]"> Discover All Services</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </nuxt-link>
        </div>
        <div class="flex justify-center w-full gap-4 mt-5">
            <div v-for="(service, index) in data" :key="service.id"
                class="flex flex-col items-center justify-center border max-h-28 max-w-[9.375rem]  py-5 px-10 rounded-md shadow-md">
                <nuxt-link :to="`/services/${service.id}`">
                    <div v-if="index<8"><img :src="service.icon" class="object-scale-down h-14 w-14" alt="">
                        <h4 class="mt-3 font-bold whitespace-nowrap">{{ service.title }}</h4>
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