<template>
    <section class="font-quicksand mt-24 mx-auto max-w-[65rem] mb-24">
        <div class="flex justify-between items-center w-full">
            <h3 class="text-3xl font-bold">Popular Pros</h3>
            <nuxt-link to="pros"
                class="flex items-center gap-2 justify-center border rounded-full border-[#5920BC] py-3 px-6">
                <p class="text-[#5920BC]"> Discover All Pros</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>


            </nuxt-link>
        </div>
        <div class="w-full justify-center mt-9 flex items-center gap-4">
            <Popularproschild v-for="tasker in taskers" :key="tasker.id" :tasker="tasker" />
        </div>
    </section>
</template>

<script>
import axios from 'axios'

import Popularproschild from './Popularproschild.vue';
export default {
    components: { Popularproschild },
    data() {
        return {
            taskers: {}
        }
    },
    methods: {
        chosentaskersfilter() {

            this.taskers.sort(function (a, b) {
                return b.rating - a.rating;
            });
            const temparr = []

            for (let i = 0; i < 3; i++) {
                temparr.push(this.taskers[i])
            }
            this.taskers = temparr
        }
    },
    async created() {
        this.taskers = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/taskers/`)
        this.taskers=this.taskers.data
        this.chosentaskersfilter()
    }

}
</script>

<style>
</style>