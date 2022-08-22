<template>
    <main class="font-quicksand w-full relative  ">
        <div
            class="flex justify-start items-center w-full bg-[url('assets/images/serviceimages/headbg.png')] bg-no-repeat bg-bottom bg-cover">
            <h1 class="lg:ml-36 ml-4 font-bold my-[4.5rem] text-3xl text-[#222222]">{{ services.title }}</h1>
        </div>
        <div class="lg:mx-36 px-4 grid grid-cols-1 lg:grid-cols-3 lg:max-w-full lg:w-auto w-screen lg:gap-x-4  gap-y-8 relative bottom-10">
            <div v-for="service in subServiceData" :key="service.id" class="flex-1 h-fit rounded-md ">
                <div class="bg-cover w-full h-72 rounded-t-md flex items-end justify-start transition-all duration-500 hover:bg-center"
                    :style="`background-image: url('${service.coverPhoto}')`">
                    <div
                        class="w-11/12 py-4 ml-4 mb-4 rounded-md bg-white flex flex-col gap-3 justify-center items-start pl-3 ">
                        <h2 class="text-xl font-semibold whitespace-nowrap">{{ service.title }}</h2>
                        <p class="flex items-center">
                            <span class="text-[#222222] opacity-50">{{ service.description }} {{ service.description
                            }}</span>
                        </p>
                        <nuxt-link :to="$auth.$state.loggedIn == false ? '/signin':`/booking/${service.id}`" class="flex items-center justify-center">
                            <p class="mr-2 text-[#5920BC] text-sm">Book Now</p> <img class="mt-[0.1875rem]"
                                src="../../assets/images/serviceimages/Right.svg" alt="">
                        </nuxt-link>
                    </div>
                </div>
                <!-- {  name:'booking', params:{id: service.id} } -->
            </div>
           

        </div>
    </main>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        id: String,
    },
    data() {
        return {
            params: this.$route.params,
            subServiceData: {},
        }
    },
    async asyncData({ params }) {
        let { data } = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/services/${params.id}/`)

        return { services: data }
    },
    mounted() {
        this.subServiceData = this.services.subServices


        window.scrollTo(0, 0)
    },
}
</script>

<style>
</style>