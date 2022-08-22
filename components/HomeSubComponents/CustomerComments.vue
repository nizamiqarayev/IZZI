<template>
    <section class="font-quicksand mt-24 mb-24 w-10/12 mx-auto">
        <div class="flex justify-between items-center w-full">
            <h3 class="text-2xl lg:text-3xl font-bold">What our customers say</h3>
        </div>
        <div class="overflow-auto lg:justify-center mt-9 flex items-center gap-4">
           

            <div class="w-10/12 lg:w-auto shrink-0" v-for="(comment, index) in comments" :key="comment.id">
                <CustomerCommentsChild class="shrink-0" v-if="index < 3" :data="comment" />
            </div>

        </div>
    </section>
</template>

<script>
import axios from 'axios';
import CustomerCommentsChild from './CustomerCommentsChild.vue';
export default {
    components: { CustomerCommentsChild },
    data() {
        return {
            comments: []
        }
    },
    async created() {
        const tempblog = await axios.get(`https://izzi-api-rest.herokuapp.com/api/v1/comments/`)
        this.comments = tempblog.data
        console.log("comments");
        console.log(this.comments);
    }
}
</script>

<style>
</style>