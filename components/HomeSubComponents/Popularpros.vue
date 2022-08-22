<template>
    <section class="font-quicksand mt-16 mx-auto w-11/12 lg:w-full lg:max-w-[65rem]">
        <div class="flex justify-between items-center w-full">
            <h3 class="text-2xl lg:text-3xl font-bold">Popular Pros</h3>
            <nuxt-link to="pros"
                class="flex items-center gap-2 justify-center border rounded-full border-[#5920BC] py-2 px-4 lg:py-3 lg:px-6">
                <p class="text-[#5920BC]"> Discover All Pros</p>
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="#5920BC" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>


            </nuxt-link>
        </div>
        <div class="overflow-auto w-full lg:justify-center flex mt-9 lg:items-center gap-4">
            <Popularproschild class="w-10/12 shrink-0" v-for="tasker in taskers" :key="tasker.id" :tasker="tasker" />
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
        const config = {
            headers: { Authorization: `${this.$auth.$state.accesslocal}` }
        }
        this.taskers = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/taskers/`, config)
        this.taskers = this.taskers.data
        this.chosentaskersfilter()
    }

}
</script>

<style>
</style>