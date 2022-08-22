<template>
    <main class="font-averta w-full relative   ">
        <div
            class="flex justify-start items-center w-full bg-[url('assets/images/serviceimages/headbg.png')] bg-no-repeat bg-bottom bg-cover">
            <h1 class="lg:ml-36 ml-4 font-bold my-[4.5rem] text-3xl text-[#222222]">Find your best</h1>
        </div>
        <div
            class="lg:mx-36 px-4 grid grid-cols-1 lg:grid-cols-3 lg:max-w-full lg:w-auto w-screen lg:gap-x-4  gap-y-8 relative bottom-10">
            <div v-for="(service, index) in services.data" :key="service.id" class="flex-1 h-fit rounded-md ">
                <div>
                    <nuxt-link v-if="windowWidth > 1024" :to="`services/${service.id}`">
                        <div class="bg-cover w-full lg:h-72 h-40 rounded-md lg:rounded-b-none lg:rounded-t-md flex items-center lg:items-end justify-center lg:justify-start transition-all duration-500 hover:bg-center"
                            :style="`background-image: url('${service.coverPhoto}')`">
                            <div
                                class="lg:w-3/4 w-4/5 max-w-sm py-4 lg:ml-4 lg:mb-4 rounded-md bg-white flex flex-col justify-center items-start px-6 lg:pl-6 whitespace-nowrap">
                                <h2 class="text-xl font-bold">{{ service.title }}</h2>
                                <p class="flex items-center">
                                    <img src="../assets/images/serviceimages/dollar.png" alt="">
                                    <span>Starts from {{ service.averagePrice }}$/h</span>
                                </p>
                            </div>
                        </div>
                    </nuxt-link>
                    <ul class="hidden lg:flex flex-col  ">
                        <li class="py-2 pl-3 font-semibold border hover:text-[#5920BC] transition-all"
                            v-for="subservice in service.subServices" :key="subservice.id">
                            <nuxt-link :to="$auth.$state.loggedIn ? `/booking/${subservice.id}` : '/signin'">{{
                                    subservice.title
                            }}</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <div v-if="windowWidth < 1024" @click="testfunc(index)">
                        <div class="hover:cursor-pointer bg-cover w-full lg:h-72 h-40 rounded-md lg:rounded-b-none lg:rounded-t-md flex items-center lg:items-end justify-center lg:justify-start transition-all duration-500 hover:bg-center"
                            :style="`background-image: url('${service.coverPhoto}')`">
                            <div
                                class="lg:w-3/4 w-4/5 max-w-sm py-4 lg:ml-4  rounded-md bg-white flex flex-col justify-center items-start px-6 lg:pl-6 whitespace-nowrap">
                                <h2 class="text-xl font-bold">{{ service.title }}</h2>
                                <p class="flex items-center">
                                    <img src="../assets/images/serviceimages/dollar.png" alt="">
                                    <span>Starts from {{ service.averagePrice }}$/h</span>
                                </p>
                            </div>
                        </div>
                    </div>


                    <ul v-if="lists[index]" class="flex flex-col mb-2 mt-0 ">
                        <li class="py-2 pl-3 font-semibold border hover:text-[#5920BC] transition-all translate-y-5"
                            v-for="subservice in service.subServices" :key="subservice.id">
                            <nuxt-link :to="$auth.$state.loggedIn ? `/booking/${subservice.id}` : '/signin'">{{
                                    subservice.title
                            }}</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            services: {},
            windowWidth: 0,
            lists: [],


        }
    },
    async mounted() {
        this.services = await this.$axios.get("services/")
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
        this.windowWidth = window.innerWidth
        if (this.windowWidth) {

        }
        for (let index = 0; index < this.services.data.length; index++) {
            this.lists[index] = false

        }
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            console.log(window.innerWidth);
            this.windowWidth = window.innerWidth
        },

        testfunc(index) {
            this.lists.splice(index, 1, !this.lists[index]);

        }
    },
}
</script>

<style>
</style>