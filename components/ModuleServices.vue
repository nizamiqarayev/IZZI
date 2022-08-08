<template>
    <main class="font-quicksand w-full h-full ">
        <div
            class="flex justify-start items-center w-full bg-[url('assets/images/serviceimages/headbg.png')] bg-no-repeat bg-bottom bg-cover">
            <h1 class="ml-36 font-bold my-[4.5rem] text-3xl text-[#222222]">Find your best</h1>
        </div>
        <div class="mx-36 grid grid-cols-3 max-w-7xl gap-x-4  gap-y-8">
            <div v-for="service in testdata.data.services" :key="service.id"
                class="flex-1 h-72 rounded-md relative bottom-10">
                <nuxt-link :to="{ path: '/subservices', params: { serviceid: service.id } }">
                    <div class="bg-cover w-full h-full rounded-md flex items-end justify-start"
                        :style="`background-image: url('${service.cover_img.publicUrl}')`">
                        <div class="w-3/4 py-4 ml-4 mb-4 rounded-md bg-white flex flex-col justify-center items-start pl-6 whitespace-nowrap">
                            <h2 class="text-xl font-semibold">{{ service.title_en }}</h2>
                            <p class="flex items-center">
                                <img src="../assets/images/serviceimages/dollar.png" alt="">
                                <span>Starts from 10$/h</span>
                            </p>
                        </div>
                    </div>

                </nuxt-link>
            </div>

        </div>
    </main>
</template>

<script>
import fakedata from "../assets/testdata/data.json"
export default {
    data() {
        return {
            testdata: fakedata,
        }
    },
    mounted() {
        console.log('====================================');
        console.log(this.testdata.data.services);
        console.log('====================================');
    },
}
</script>

<style>
</style>