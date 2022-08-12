<template>
    
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
            subservicesdata: {}
        }
    },
    async asyncData({ params }) {
        let data = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/services/${params.id}/`)

        return { service: data }
    },
    mounted() {
        this.subservicesdata = this.service
        console.log('====================================');
        console.log("subservice");
        console.log(this.subservicesdata);
        console.log('====================================');
    },
}
</script>

<style>
</style>