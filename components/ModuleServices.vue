<template>
    <main class="font-quicksand w-full relative  ">
        <div
            class="flex justify-start items-center w-full bg-[url('assets/images/serviceimages/headbg.png')] bg-no-repeat bg-bottom bg-cover">
            <h1 class="ml-36 font-bold my-[4.5rem] text-3xl text-[#222222]">Find your best</h1>
        </div>
        <div class="mx-36 grid grid-cols-3 max-w-[65rem] gap-x-4  gap-y-8 relative bottom-10">
            <div v-for="service in services.data" :key="service.id" class="flex-1 h-fit rounded-md ">
                <nuxt-link :to="`services/${service.id}`">
                    <div class="bg-cover w-full h-72 rounded-t-md flex items-end justify-start transition-all duration-500 hover:bg-center"
                        :style="`background-image: url('${service.coverPhoto}')`">
                        <div
                            class="w-3/4 py-4 ml-4 mb-4 rounded-md bg-white flex flex-col justify-center items-start pl-6 whitespace-nowrap">
                            <h2 class="text-xl font-semibold">{{ service.title }}</h2>
                            <p class="flex items-center">
                                <img src="../assets/images/serviceimages/dollar.png" alt="">
                                <span>Starts from {{ service.averagePrice }}$/h</span>
                            </p>
                        </div>
                    </div>
                </nuxt-link>
                <ul class="flex flex-col  ">
                    <li class="py-2 pl-2 border hover:py-4 hover:px-4 hover:bg-slate-300 transition-all" v-for="subservice in service.subServices" :key="subservice.id">
                        <nuxt-link to="booking">{{ subservice.title }}</nuxt-link>
                    </li>
                </ul>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            services: {},
        }
    },
    async mounted() {
        this.services = await this.$axios.get("services/")
        console.log('====================================');
        console.log(this.services);
        console.log(this.services.data.subservices);
        console.log('====================================');
    },
}
</script>

<style>
</style>