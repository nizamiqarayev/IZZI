<template>
    <main>

    </main>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            params:this.$route.params,
        }
    },
    async asyncData({ params }) {
        console.log(params.id);
        let { data } = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/subServices/${params.id}/`)

        return { services: data }
    },
    mounted() {

        console.log(this.services);
    },

}
</script>

<style>
</style>